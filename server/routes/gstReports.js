import express from 'express';
import { Op } from 'sequelize';
import { GstReceipts } from '../models/index.js';

const router = express.Router();

// GST Summary Report (Liability)
router.get('/summary', async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    
    const where = { is_active: 1 };
    if (startDate && endDate) {
      where.date_time = { [Op.between]: [startDate, endDate] };
    }

    const receipts = await GstReceipts.findAll({
      where,
      order: [['date_time', 'ASC']]
    });

    const summary = {
      total_receipts: receipts.length,
      total_taxable_value: 0,
      total_cgst: 0,
      total_sgst: 0,
      total_igst: 0,
      total_gst_collected: 0,
      grand_total: 0
    };

    receipts.forEach(r => {
      summary.total_taxable_value += parseFloat(r.total_before_gst || 0);
      summary.total_cgst += parseFloat(r.cgst_amount || 0);
      summary.total_sgst += parseFloat(r.sgst_amount || 0);
      summary.total_igst += parseFloat(r.igst_amount || 0);
      summary.grand_total += parseFloat(r.total_amount || 0);
    });

    summary.total_gst_collected = summary.total_cgst + summary.total_sgst + summary.total_igst;

    res.json({
      summary,
      transactions: receipts
    });

  } catch (error) {
    console.error('Error fetching GST report:', error);
    res.status(500).json({ error: 'Failed to fetch GST report' });
  }
});

export default router;
