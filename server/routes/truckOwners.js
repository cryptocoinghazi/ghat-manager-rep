import express from 'express';
import { Op } from 'sequelize';
import { Receipts, TruckOwners, TruckVehicles, ReceiptEditHistory, sequelize } from '../models/index.js';

const router = express.Router();

// Get all truck owners with summary stats
router.get('/', async (req, res) => {
  try {
    const owners = await TruckOwners.findAll({
      where: { is_active: 1 },
      order: [['name', 'ASC']]
    });

    // We can also fetch aggregated stats here if needed, or do it on demand
    // For performance, let's just return the list first
    res.json(owners);
  } catch (error) {
    console.error('Error fetching truck owners:', error);
    res.status(500).json({ error: 'Failed to fetch truck owners' });
  }
});

// Get owner details with ledger (receipts)
router.get('/:id/ledger', async (req, res) => {
  try {
    const { id } = req.params;
    const owner = await TruckOwners.findByPk(id);
    
    if (!owner) {
      return res.status(404).json({ error: 'Owner not found' });
    }

    // Find all receipts for this owner
    // We try to match by owner_id OR truck_owner name (for legacy data)
    const receipts = await Receipts.findAll({
      where: {
        is_active: 1,
        [Op.or]: [
          { owner_id: id },
          { truck_owner: owner.name }
        ]
      },
      order: [['date_time', 'DESC']]
    });

    // Calculate totals
    let totalAmount = 0;
    let totalPaid = 0;
    let totalCredit = 0;

    receipts.forEach(r => {
      totalAmount += parseFloat(r.total_amount || 0);
      totalPaid += parseFloat(r.cash_paid || 0);
      totalCredit += parseFloat(r.credit_amount || 0);
    });

    // Get vehicles associated with this owner
    const vehicles = await TruckVehicles.findAll({
      where: { truck_owner_id: id }
    });

    res.json({
      owner,
      stats: {
        totalAmount,
        totalPaid,
        totalCredit,
        receiptCount: receipts.length
      },
      vehicles,
      receipts
    });

  } catch (error) {
    console.error('Error fetching owner ledger:', error);
    res.status(500).json({ error: 'Failed to fetch owner ledger' });
  }
});

// Bulk Payment
router.post('/:id/payment', async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { id } = req.params;
    const { amount, notes } = req.body;
    
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Valid amount is required' });
    }

    const paymentAmount = parseFloat(amount);
    let remainingPayment = paymentAmount;

    const owner = await TruckOwners.findByPk(id);
    if (!owner) {
      await t.rollback();
      return res.status(404).json({ error: 'Owner not found' });
    }

    // Fetch unpaid receipts (oldest first)
    const unpaidReceipts = await Receipts.findAll({
      where: {
        is_active: 1,
        payment_status: { [Op.ne]: 'paid' },
        [Op.or]: [
          { owner_id: id },
          { truck_owner: owner.name }
        ]
      },
      order: [['date_time', 'ASC']], // FIFO
      transaction: t
    });

    const updates = [];

    for (const receipt of unpaidReceipts) {
      if (remainingPayment <= 0) break;

      const currentCredit = parseFloat(receipt.credit_amount);
      if (currentCredit <= 0) continue;

      const paymentForThis = Math.min(remainingPayment, currentCredit);
      
      const newCashPaid = parseFloat(receipt.cash_paid) + paymentForThis;
      const newCredit = parseFloat(receipt.total_amount) - newCashPaid;
      const newStatus = newCredit <= 0.01 ? 'paid' : 'partial'; // Tolerance for float

      // Update receipt
      await receipt.update({
        cash_paid: newCashPaid,
        credit_amount: newCredit,
        payment_status: newStatus,
        notes: receipt.notes + `\n[Bulk Payment]: Paid ${paymentForThis}. ${notes || ''}`
      }, { transaction: t });

      // Log history
      await ReceiptEditHistory.create({
        receipt_id: receipt.id,
        field_name: 'bulk_payment',
        old_value: `Credit: ${currentCredit}`,
        new_value: `Paid: ${paymentForThis}, New Credit: ${newCredit}`,
        changed_by: req.user ? req.user.username : 'system',
        reason: 'Bulk Payment Adjustment'
      }, { transaction: t });

      updates.push({
        receipt_no: receipt.receipt_no,
        paid: paymentForThis,
        new_status: newStatus
      });

      remainingPayment -= paymentForThis;
    }

    // If there is still remaining payment, maybe add it to deposit?
    // For now, we just return it as "excess".
    // Or we can add it to the owner's deposit_balance if the model supports it.
    if (remainingPayment > 0) {
        const currentDeposit = parseFloat(owner.deposit_balance || 0);
        await owner.update({
            deposit_balance: currentDeposit + remainingPayment
        }, { transaction: t });
    }

    await t.commit();

    res.json({
      message: 'Bulk payment processed successfully',
      totalPaid: paymentAmount,
      appliedToReceipts: paymentAmount - remainingPayment,
      addedToDeposit: remainingPayment > 0 ? remainingPayment : 0,
      affectedReceipts: updates
    });

  } catch (error) {
    await t.rollback();
    console.error('Error processing bulk payment:', error);
    res.status(500).json({ error: 'Failed to process bulk payment' });
  }
});

export default router;
