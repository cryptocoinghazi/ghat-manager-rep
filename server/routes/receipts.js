import express from 'express';
import { Op } from 'sequelize';
import { Receipts, TruckOwners, DepositTransactions, CreditPayments } from '../models/index.js';

const router = express.Router();

// Helper function to validate dates
function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

// Get all receipts with filters - FIXED TIMEZONE ISSUE
router.get('/', async (req, res) => {
  try {
    const {
      startDate,
      endDate,
      truckOwner,
      vehicleNumber,
      paymentStatus,
      page = 1,
      limit = 100
    } = req.query;

    console.log('Receipts query params:', {
      startDate, endDate, truckOwner, vehicleNumber, paymentStatus
    });

    const where = { is_active: 1 };
    if (startDate && endDate) where.date_time = { [Op.between]: [startDate, endDate] };
    else if (startDate) where.date_time = { [Op.gte]: startDate };
    else if (endDate) where.date_time = { [Op.lte]: endDate };
    if (truckOwner) where.truck_owner = { [Op.like]: `%${truckOwner}%` };
    if (vehicleNumber) where.vehicle_number = { [Op.like]: `%${vehicleNumber}%` };
    if (paymentStatus) where.payment_status = paymentStatus;
    const { ownerType } = req.query;
    if (ownerType) where.owner_type = ownerType;
    const offset = (page - 1) * limit;
    const result = await Receipts.findAndCountAll({
      where,
      order: [['date_time', 'DESC']],
      limit: parseInt(limit),
      offset
    });
    return res.json({
      receipts: result.rows,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: result.count,
        pages: Math.ceil(result.count / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching receipts:', error);
    res.status(500).json({ error: 'Failed to fetch receipts' });
  }
});

// Get single receipt by ID
router.get('/:id', async (req, res) => {
  try {
    const receipt = await Receipts.findByPk(req.params.id);
    if (!receipt || receipt.is_active === 0) {
      return res.status(404).json({ error: 'Receipt not found' });
    }
    res.json(receipt);
  } catch (error) {
    console.error('Error fetching receipt:', error);
    res.status(500).json({ error: 'Failed to fetch receipt' });
  }
});

// Create new receipt - FIXED: Normalize timestamp + Partner rates
router.post('/', async (req, res) => {
  try {
    const {
      receipt_no,
      truck_owner,
      vehicle_number,
      brass_qty,
      rate,
      loading_charge,
      cash_paid,
      notes,
      date_time,
      owner_type,
      applied_rate,
      payment_method,
      deposit_deducted
    } = req.body;

    console.log('Creating receipt with data:', {
      receipt_no, truck_owner, vehicle_number, brass_qty, rate,
      loading_charge, cash_paid, notes, date_time, owner_type, applied_rate,
      payment_method, deposit_deducted
    });

    // Basic validation
    if (!truck_owner || !vehicle_number) {
      return res.status(400).json({ error: 'Truck owner and vehicle number are required' });
    }
    const qtyVal = parseFloat(brass_qty);
    const rateVal = parseFloat(rate);
    if (!qtyVal || qtyVal <= 0 || !rateVal || rateVal <= 0) {
      return res.status(400).json({ error: 'Valid brass quantity and rate are required' });
    }

    // Check if owner is a partner and determine rate
    let finalOwnerType = owner_type || 'regular';
    let finalRate = rateVal;
    let finalAppliedRate = applied_rate;
    if (!owner_type) {
      const ownerRecord = await TruckOwners.findOne({ where: { name: truck_owner, is_active: 1 } });
      if (ownerRecord && ownerRecord.is_partner) {
        finalOwnerType = 'partner';
        if (ownerRecord.partner_rate && !applied_rate) {
          finalRate = parseFloat(ownerRecord.partner_rate);
          finalAppliedRate = ownerRecord.partner_rate;
        }
      }
    }

    // Calculate amounts
    const totalMaterialCost = parseFloat(brass_qty) * finalRate;
    const totalAmount = totalMaterialCost + parseFloat(loading_charge || 0);
    let cashPaidValue = parseFloat(cash_paid || 0);
    const depositDeductedValue = parseFloat(deposit_deducted || 0);
    const creditAmount = totalAmount - cashPaidValue;
    let paymentStatus;
    let paymentMethod = payment_method || 'cash';
    // If deposit used, ensure owner has enough balance and deduct
    if (paymentMethod === 'deposit' && depositDeductedValue > 0) {
      const ownerForDeposit = await TruckOwners.findOne({ where: { name: truck_owner, is_active: 1 } });
      if (!ownerForDeposit) {
        return res.status(400).json({ error: 'Owner not found for deposit deduction' });
      }
      const available = parseFloat(ownerForDeposit.deposit_balance || 0);
      const toDeduct = Math.min(depositDeductedValue, available, totalAmount);
      cashPaidValue = parseFloat(cash_paid || 0);
      const remainingAfterDeposit = totalAmount - toDeduct;
      await ownerForDeposit.update({ deposit_balance: available - toDeduct });
      await DepositTransactions.create({ owner_id: ownerForDeposit.id, type: 'deduct', amount: toDeduct, previous_balance: available, new_balance: available - toDeduct, receipt_no: receipt_no || '', notes: 'Receipt deduction' });
      paymentStatus = (cashPaidValue >= remainingAfterDeposit) ? 'paid' : (cashPaidValue > 0 ? 'partial' : 'unpaid');
    } else {
      paymentStatus = cashPaidValue >= totalAmount ? 'paid' : 
                      cashPaidValue > 0 ? 'partial' : 'unpaid';
      paymentMethod = cashPaidValue >= totalAmount ? 'cash' : (cashPaidValue > 0 ? 'cash' : 'credit');
    }

    // FIX: Validate and normalize timestamp
    let timestamp;
    if (date_time && isValidDate(new Date(date_time))) {
      timestamp = new Date(date_time).toISOString();
    } else {
      timestamp = new Date().toISOString();
    }
    
    console.log('Using timestamp for storage:', timestamp);
    console.log('Owner type:', finalOwnerType, 'Applied rate:', finalAppliedRate);

    // Ensure unique receipt number
    let finalReceiptNo = receipt_no;
    if (!finalReceiptNo) {
      const last = await Receipts.findOne({ order: [['id', 'DESC']] });
      const prefix = 'GM';
      const startNumber = 9001;
      let nextNumber = startNumber;
      if (last && last.receipt_no) {
        const lastNum = parseInt(String(last.receipt_no).replace(/\D/g, '')) || startNumber - 1;
        nextNumber = lastNum + 1;
      }
      finalReceiptNo = `${prefix}${nextNumber.toString().padStart(4, '0')}`;
    } else {
      const existing = await Receipts.findOne({ where: { receipt_no: finalReceiptNo } });
      if (existing) {
        const last = await Receipts.findOne({ order: [['id', 'DESC']] });
        const prefix = 'GM';
        const startNumber = 9001;
        let nextNumber = startNumber;
        if (last && last.receipt_no) {
          const lastNum = parseInt(String(last.receipt_no).replace(/\D/g, '')) || startNumber - 1;
          nextNumber = lastNum + 1;
        }
        finalReceiptNo = `${prefix}${nextNumber.toString().padStart(4, '0')}`;
      }
    }

    let newReceipt;
    newReceipt = await Receipts.create({
        receipt_no: finalReceiptNo,
        truck_owner,
        vehicle_number,
        brass_qty,
        rate: finalRate,
        loading_charge: loading_charge || 0,
        cash_paid: cashPaidValue || 0,
        credit_amount: creditAmount,
        total_amount: totalAmount,
        payment_status: paymentStatus,
        payment_method: paymentMethod,
        deposit_deducted: depositDeductedValue || 0,
        owner_type: finalOwnerType,
        applied_rate: finalAppliedRate || finalRate,
        notes: notes || '',
        date_time: timestamp
      });

    const existingOwner = await TruckOwners.findOne({ where: { name: truck_owner } });
    if (existingOwner) {
      await existingOwner.update({ payment_type: cashPaidValue >= totalAmount ? 'cash' : 'mixed' });
    } else {
      await TruckOwners.create({ name: truck_owner, payment_type: cashPaidValue >= totalAmount ? 'cash' : 'mixed', is_partner: 0, is_active: 1 });
    }

    console.log('Receipt created successfully:', newReceipt);
    res.status(201).json({ message: 'Receipt created successfully', receipt: newReceipt });
  } catch (error) {
    console.error('Error creating receipt:', error);
    res.status(500).json({ error: 'Failed to create receipt' });
  }
});

// Update receipt (no changes needed here)
router.put('/:id', async (req, res) => {
  try {
    const { cash_paid, notes } = req.body;

    // Get existing receipt
    const existingReceipt = await Receipts.findByPk(req.params.id);

    if (!existingReceipt) {
      return res.status(404).json({ error: 'Receipt not found' });
    }

    // Calculate new credit amount
    const cashPaidValue = parseFloat(cash_paid || existingReceipt.cash_paid);
    const creditAmount = existingReceipt.total_amount - cashPaidValue;
    const paymentStatus = cashPaidValue >= existingReceipt.total_amount ? 'paid' : 
                         cashPaidValue > 0 ? 'partial' : 'unpaid';

    // Update receipt
    await existingReceipt.update({ cash_paid: cashPaidValue, credit_amount: creditAmount, payment_status: paymentStatus, notes: notes || existingReceipt.notes });

    // If payment made, record in credit_payments
    if (cashPaidValue > existingReceipt.cash_paid) {
      const paymentAmount = cashPaidValue - existingReceipt.cash_paid;
      await CreditPayments.create({ receipt_id: req.params.id, amount_paid: paymentAmount });
    }

    const updatedReceipt = await Receipts.findByPk(req.params.id);

    res.json({
      message: 'Receipt updated successfully',
      receipt: updatedReceipt
    });
  } catch (error) {
    console.error('Error updating receipt:', error);
    res.status(500).json({ error: 'Failed to update receipt' });
  }
});

// Delete receipt (soft delete)
router.delete('/:id', async (req, res) => {
  try {
    const rec = await Receipts.findByPk(req.params.id);
    if (!rec) return res.status(404).json({ error: 'Receipt not found' });
    await rec.update({ is_active: 0 });

    res.json({ message: 'Receipt deleted successfully' });
  } catch (error) {
    console.error('Error deleting receipt:', error);
    res.status(500).json({ error: 'Failed to delete receipt' });
  }
});

export default router;
