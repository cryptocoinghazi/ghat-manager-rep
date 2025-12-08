import express from 'express';
import { getDB } from '../db.js';
import { generateReceiptNumber } from '../utils/receiptUtils.js';

const router = express.Router();

// Helper function to validate dates
function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

// Get all receipts with filters - FIXED TIMEZONE ISSUE
router.get('/', async (req, res) => {
  try {
    const db = getDB();
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

    let query = `
      SELECT * FROM receipts 
      WHERE is_active = 1
    `;
    const params = [];

    // Apply filters - FIXED: Compare full timestamps, not just dates
    if (startDate && endDate) {
      query += ` AND date_time BETWEEN ? AND ?`;
      params.push(startDate, endDate);
    } else if (startDate) {
      query += ` AND date_time >= ?`;
      params.push(startDate);
    } else if (endDate) {
      query += ` AND date_time <= ?`;
      params.push(endDate);
    }

    if (truckOwner) {
      query += ` AND truck_owner LIKE ?`;
      params.push(`%${truckOwner}%`);
    }

    if (vehicleNumber) {
      query += ` AND vehicle_number LIKE ?`;
      params.push(`%${vehicleNumber}%`);
    }

    if (paymentStatus) {
      query += ` AND payment_status = ?`;
      params.push(paymentStatus);
    }

    // Order by latest first
    query += ` ORDER BY date_time DESC`;

    // Pagination
    const offset = (page - 1) * limit;
    query += ` LIMIT ? OFFSET ?`;
    params.push(limit, offset);

    console.log('Receipts query:', query);
    console.log('Receipts params:', params);

    const receipts = await db.all(query, params);
    
    console.log(`Found ${receipts.length} receipts`);

    // Get total count for pagination
    const countQuery = query.replace('SELECT *', 'SELECT COUNT(*) as count')
                           .split('LIMIT')[0];
    const countParams = params.slice(0, -2);
    console.log('Count query:', countQuery);
    console.log('Count params:', countParams);
    
    const countResult = await db.get(countQuery, countParams);
    const total = countResult?.count || 0;

    res.json({
      receipts,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
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
    const db = getDB();
    const receipt = await db.get(
      'SELECT * FROM receipts WHERE id = ? AND is_active = 1',
      [req.params.id]
    );

    if (!receipt) {
      return res.status(404).json({ error: 'Receipt not found' });
    }

    res.json(receipt);
  } catch (error) {
    console.error('Error fetching receipt:', error);
    res.status(500).json({ error: 'Failed to fetch receipt' });
  }
});

// Create new receipt - FIXED: Normalize timestamp
router.post('/', async (req, res) => {
  try {
    const db = getDB();
    const {
      receipt_no,
      truck_owner,
      vehicle_number,
      brass_qty,
      rate,
      loading_charge,
      cash_paid,
      notes,
      date_time
    } = req.body;

    console.log('Creating receipt with data:', {
      receipt_no, truck_owner, vehicle_number, brass_qty, rate,
      loading_charge, cash_paid, notes, date_time
    });

    // Calculate amounts
    const totalMaterialCost = parseFloat(brass_qty) * parseFloat(rate);
    const totalAmount = totalMaterialCost + parseFloat(loading_charge || 0);
    const cashPaidValue = parseFloat(cash_paid || 0);
    const creditAmount = totalAmount - cashPaidValue;
    const paymentStatus = cashPaidValue >= totalAmount ? 'paid' : 
                         cashPaidValue > 0 ? 'partial' : 'unpaid';

    // FIX: Validate and normalize timestamp
    let timestamp;
    if (date_time && isValidDate(new Date(date_time))) {
      timestamp = new Date(date_time).toISOString();
    } else {
      timestamp = new Date().toISOString();
    }
    
    console.log('Using timestamp for storage:', timestamp);

    // Insert receipt
    const result = await db.run(
      `INSERT INTO receipts (
        receipt_no, truck_owner, vehicle_number, brass_qty, rate,
        loading_charge, cash_paid, credit_amount, total_amount,
        payment_status, notes, date_time
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        receipt_no,
        truck_owner,
        vehicle_number,
        brass_qty,
        rate,
        loading_charge || 0,
        cash_paid || 0,
        creditAmount,
        totalAmount,
        paymentStatus,
        notes || '',
        timestamp
      ]
    );

    // Update truck owner if exists, else create
    await db.run(
      `INSERT OR REPLACE INTO truck_owners (name, payment_type) 
       VALUES (?, ?)`,
      [truck_owner, cashPaidValue >= totalAmount ? 'cash' : 'mixed']
    );

    const newReceipt = await db.get(
      'SELECT * FROM receipts WHERE id = ?',
      [result.lastID]
    );

    console.log('Receipt created successfully:', newReceipt);

    res.status(201).json({
      message: 'Receipt created successfully',
      receipt: newReceipt
    });
  } catch (error) {
    console.error('Error creating receipt:', error);
    res.status(500).json({ error: 'Failed to create receipt' });
  }
});

// Update receipt (no changes needed here)
router.put('/:id', async (req, res) => {
  try {
    const db = getDB();
    const { cash_paid, notes } = req.body;

    // Get existing receipt
    const existingReceipt = await db.get(
      'SELECT * FROM receipts WHERE id = ?',
      [req.params.id]
    );

    if (!existingReceipt) {
      return res.status(404).json({ error: 'Receipt not found' });
    }

    // Calculate new credit amount
    const cashPaidValue = parseFloat(cash_paid || existingReceipt.cash_paid);
    const creditAmount = existingReceipt.total_amount - cashPaidValue;
    const paymentStatus = cashPaidValue >= existingReceipt.total_amount ? 'paid' : 
                         cashPaidValue > 0 ? 'partial' : 'unpaid';

    // Update receipt
    await db.run(
      `UPDATE receipts SET 
        cash_paid = ?,
        credit_amount = ?,
        payment_status = ?,
        notes = ?,
        updated_at = CURRENT_TIMESTAMP
       WHERE id = ?`,
      [
        cashPaidValue,
        creditAmount,
        paymentStatus,
        notes || existingReceipt.notes,
        req.params.id
      ]
    );

    // If payment made, record in credit_payments
    if (cashPaidValue > existingReceipt.cash_paid) {
      const paymentAmount = cashPaidValue - existingReceipt.cash_paid;
      await db.run(
        `INSERT INTO credit_payments (receipt_id, amount_paid) 
         VALUES (?, ?)`,
        [req.params.id, paymentAmount]
      );
    }

    const updatedReceipt = await db.get(
      'SELECT * FROM receipts WHERE id = ?',
      [req.params.id]
    );

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
    const db = getDB();
    
    const result = await db.run(
      'UPDATE receipts SET is_active = 0 WHERE id = ?',
      [req.params.id]
    );

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Receipt not found' });
    }

    res.json({ message: 'Receipt deleted successfully' });
  } catch (error) {
    console.error('Error deleting receipt:', error);
    res.status(500).json({ error: 'Failed to delete receipt' });
  }
});

export default router;