import express from 'express';
import { Op } from 'sequelize';
import { Receipts, TruckOwners, CreditPayments, ReceiptEditHistory, DepositTransactions, sequelize } from '../models/index.js';

const router = express.Router();

// Get Owner Ledger Summary
router.get('/owner-ledger/:ownerId', async (req, res) => {
  try {
    const { ownerId } = req.params;
    
    // Get Owner
    const owner = await TruckOwners.findByPk(ownerId);
    if (!owner) return res.status(404).json({ error: 'Owner not found' });

    // Get Receipts Stats
    const receipts = await Receipts.findAll({
      where: { 
        truck_owner: owner.name, // using name as foreign key link
        is_active: 1
      },
      order: [['date_time', 'DESC']]
    });

    let totalAmount = 0;
    let totalPaid = 0;
    let totalPending = 0;

    receipts.forEach(r => {
      totalAmount += parseFloat(r.total_amount || 0);
      totalPaid += parseFloat(r.cash_paid || 0);
      totalPending += parseFloat(r.credit_amount || 0);
    });

    res.json({
      owner,
      summary: {
        totalAmount,
        totalPaid,
        totalPending
      },
      receipts
    });

  } catch (error) {
    console.error('Error fetching owner ledger:', error);
    res.status(500).json({ error: 'Failed to fetch ledger' });
  }
});

// Bulk Payment
router.post('/bulk', async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { ownerId, amount, paymentMode, notes } = req.body;
    const paymentAmount = parseFloat(amount);
    
    if (!paymentAmount || paymentAmount <= 0) {
      await t.rollback();
      return res.status(400).json({ error: 'Valid amount required' });
    }

    const owner = await TruckOwners.findByPk(ownerId);
    if (!owner) {
      await t.rollback();
      return res.status(404).json({ error: 'Owner not found' });
    }

    // Find pending receipts (Oldest first)
    const pendingReceipts = await Receipts.findAll({
      where: {
        truck_owner: owner.name,
        is_active: 1,
        payment_status: { [Op.ne]: 'paid' }
      },
      order: [['date_time', 'ASC']],
      transaction: t
    });

    let remainingAmount = paymentAmount;
    const updatedReceipts = [];

    for (const receipt of pendingReceipts) {
      if (remainingAmount <= 0.01) break; // Float epsilon

      const currentCredit = parseFloat(receipt.credit_amount);
      const payAmount = Math.min(currentCredit, remainingAmount);

      if (payAmount > 0) {
        const oldCashPaid = parseFloat(receipt.cash_paid);
        const newCashPaid = oldCashPaid + payAmount;
        const newCredit = parseFloat(receipt.total_amount) - newCashPaid;
        const newStatus = newCredit <= 0.5 ? 'paid' : 'partial'; // Tolerance for float

        // Create Edit History
        await ReceiptEditHistory.create({
          receipt_id: receipt.id,
          field_name: 'bulk_payment',
          old_value: `${oldCashPaid} (Status: ${receipt.payment_status})`,
          new_value: `${newCashPaid} (Status: ${newStatus})`,
          changed_by: req.user ? req.user.username : 'system',
          reason: `Bulk Payment: ${notes || 'No notes'}`
        }, { transaction: t });

        // Update Receipt
        await receipt.update({
          cash_paid: newCashPaid,
          credit_amount: newCredit,
          payment_status: newStatus
        }, { transaction: t });

        // Record Credit Payment
        await CreditPayments.create({
          receipt_id: receipt.id,
          amount_paid: payAmount,
          payment_date: new Date(),
          payment_mode: paymentMode || 'cash',
          reference_no: notes || 'Bulk Payment Allocation'
        }, { transaction: t });

        remainingAmount -= payAmount;
        updatedReceipts.push({
          id: receipt.id,
          paid: payAmount,
          status: newStatus
        });
      }
    }

    // Handle overpayment as deposit
    let depositAdded = 0;
    if (remainingAmount > 0.5) {
      depositAdded = remainingAmount;
      const previousBalance = parseFloat(owner.deposit_balance || 0);
      const newBalance = previousBalance + depositAdded;
      
      await owner.update({ deposit_balance: newBalance }, { transaction: t });
      
      await DepositTransactions.create({
        owner_id: owner.id,
        type: 'add',
        amount: depositAdded,
        previous_balance: previousBalance,
        new_balance: newBalance,
        notes: `Excess from bulk payment. ${notes || ''}`
      }, { transaction: t });
    }

    await t.commit();

    res.json({
      message: 'Bulk payment processed',
      processedAmount: paymentAmount - remainingAmount,
      remainingAmount,
      depositAdded,
      updatedReceiptsCount: updatedReceipts.length
    });

  } catch (error) {
    await t.rollback();
    console.error('Error processing bulk payment:', error);
    res.status(500).json({ error: 'Failed to process payment' });
  }
});

export default router;
