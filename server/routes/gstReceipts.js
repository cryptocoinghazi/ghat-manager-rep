import express from 'express';
import { Op } from 'sequelize';
import { GstReceipts, TruckOwners, DepositTransactions, CreditPayments } from '../models/index.js';

const router = express.Router();

// Helper function to validate dates
function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

// Get all GST receipts with filters
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

    console.log('GST Receipts query params:', {
      startDate, endDate, truckOwner, vehicleNumber, paymentStatus
    });

    const where = { is_active: 1 };
    if (startDate && endDate) where.date_time = { [Op.between]: [startDate, endDate] };
    else if (startDate) where.date_time = { [Op.gte]: startDate };
    else if (endDate) where.date_time = { [Op.lte]: endDate };
    if (truckOwner) where.truck_owner = { [Op.like]: `%${truckOwner}%` };
    if (vehicleNumber) where.vehicle_number = { [Op.like]: `%${vehicleNumber}%` };
    if (paymentStatus) where.payment_status = paymentStatus;

    const offset = (page - 1) * limit;
    const result = await GstReceipts.findAndCountAll({
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
    console.error('Error fetching GST receipts:', error);
    res.status(500).json({ error: 'Failed to fetch GST receipts' });
  }
});

// Get single GST receipt by ID
router.get('/:id', async (req, res) => {
  try {
    const receipt = await GstReceipts.findByPk(req.params.id);
    if (!receipt || receipt.is_active === 0) {
      return res.status(404).json({ error: 'GST Receipt not found' });
    }
    res.json(receipt);
  } catch (error) {
    console.error('Error fetching GST receipt:', error);
    res.status(500).json({ error: 'Failed to fetch GST receipt' });
  }
});

// Create new GST receipt
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
      payment_method,
      deposit_deducted,
      gst_rate = 5.00
    } = req.body;

    // Basic validation
    if (!truck_owner || !vehicle_number) {
      return res.status(400).json({ error: 'Truck owner and vehicle number are required' });
    }

    // Verify truck owner is GST client
    const ownerRecord = await TruckOwners.findOne({ where: { name: truck_owner, is_active: 1 } });
    if (!ownerRecord || !ownerRecord.is_gst_client) {
      return res.status(400).json({ error: 'Selected owner is not a registered GST client' });
    }

    const qtyVal = parseFloat(brass_qty);
    const rateVal = parseFloat(rate);
    const gstRateVal = parseFloat(gst_rate);

    if (!qtyVal || qtyVal <= 0 || !rateVal || rateVal <= 0) {
      return res.status(400).json({ error: 'Valid brass quantity and rate are required' });
    }

    // Calculate amounts
    const baseAmount = qtyVal * rateVal;
    const totalBeforeGst = baseAmount + parseFloat(loading_charge || 0);
    
    // Calculate GST
    const gstAmount = (totalBeforeGst * gstRateVal) / 100;
    const cgstAmount = gstAmount / 2;
    const sgstAmount = gstAmount / 2;
    const igstAmount = 0; // Assuming intra-state for now, can be updated logic later
    
    const totalAmount = totalBeforeGst + gstAmount;
    
    let cashPaidValue = parseFloat(cash_paid || 0);
    const depositDeductedValue = parseFloat(deposit_deducted || 0);
    let creditAmount = Math.max(0, totalAmount - cashPaidValue);
    let paymentStatus;
    let paymentMethod = payment_method || 'cash';

    // Deposit Logic
    if (paymentMethod === 'deposit' && depositDeductedValue > 0) {
      const available = parseFloat(ownerRecord.deposit_balance || 0);
      const toDeduct = Math.min(depositDeductedValue, available, totalAmount);
      cashPaidValue = parseFloat(cash_paid || 0);
      const remainingAfterDeposit = totalAmount - toDeduct;
      
      await ownerRecord.update({ deposit_balance: available - toDeduct });
      await DepositTransactions.create({ 
        owner_id: ownerRecord.id, 
        type: 'deduct', 
        amount: toDeduct, 
        previous_balance: available, 
        new_balance: available - toDeduct, 
        receipt_no: receipt_no || '', 
        notes: 'GST Receipt deduction' 
      });
      
      paymentStatus = (cashPaidValue >= remainingAfterDeposit) ? 'paid' : (cashPaidValue > 0 ? 'partial' : 'unpaid');
      creditAmount = Math.max(0, totalAmount - cashPaidValue - toDeduct);
    } else {
      paymentStatus = cashPaidValue >= totalAmount ? 'paid' : 
                      cashPaidValue > 0 ? 'partial' : 'unpaid';
      paymentMethod = cashPaidValue >= totalAmount ? 'cash' : (cashPaidValue > 0 ? 'cash' : 'credit');
      creditAmount = Math.max(0, totalAmount - cashPaidValue);
    }

    // Timestamp
    let timestamp;
    if (date_time && isValidDate(new Date(date_time))) {
      timestamp = new Date(date_time).toISOString();
    } else {
      timestamp = new Date().toISOString();
    }
    
    // Generate GST Receipt Number (Separate sequence or shared? User said "New GST Module", implies separate)
    // Let's use 'GST' prefix
    let finalReceiptNo = receipt_no;
    if (!finalReceiptNo) {
      // Use provided ID or generate from latest
      const last = await GstReceipts.findOne({ order: [['id', 'DESC']] });
      const prefix = 'GST';
      const startNumber = 1001;
      let nextNumber = startNumber;
      if (last && last.receipt_no) {
        // Try to extract number from last receipt
        const match = last.receipt_no.match(/(\d+)$/);
        if (match) {
            nextNumber = parseInt(match[1], 10) + 1;
        }
      }
      finalReceiptNo = `${prefix}${nextNumber.toString().padStart(4, '0')}`;
    }

    const newReceipt = await GstReceipts.create({
      receipt_no: finalReceiptNo,
      truck_owner,
      vehicle_number,
      brass_qty: qtyVal,
      rate: rateVal,
      loading_charge: loading_charge || 0,
      
      gst_rate: gstRateVal,
      cgst_amount: cgstAmount,
      sgst_amount: sgstAmount,
      igst_amount: igstAmount,
      total_before_gst: totalBeforeGst,
      
      cash_paid: cashPaidValue || 0,
      credit_amount: creditAmount,
      total_amount: totalAmount,
      payment_status: paymentStatus,
      payment_method: paymentMethod,
      deposit_deducted: depositDeductedValue || 0,
      notes: notes || '',
      date_time: timestamp,
      owner_id: ownerRecord.id
    });

    res.status(201).json({ message: 'GST Receipt created successfully', receipt: newReceipt });
  } catch (error) {
    console.error('Error creating GST receipt:', error);
    res.status(500).json({ error: 'Failed to create GST receipt' });
  }
});

export default router;
