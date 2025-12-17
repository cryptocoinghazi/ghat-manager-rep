import dotenv from 'dotenv';
dotenv.config({ path: './server/.env' });

import { expect } from 'chai';
import axios from 'axios';
import { TruckOwners, GstReceipts, sequelize } from '../server/models/index.js';

const apiBase = 'http://localhost:5000/api';
let token;
let gstOwner;

describe('GST Module API Tests', function() {
  this.timeout(10000);

  before(async () => {
    // Authenticate as admin
    try {
        const res = await axios.post(`${apiBase}/auth/login`, { username: 'admin', password: 'Mansoor@9999' });
        token = res.data.token;
    } catch (e) {
        console.error("Login failed", e.response?.data);
        throw e;
    }

    // Create a test truck owner
    gstOwner = await TruckOwners.create({
      name: `GST-Client-${Date.now()}`,
      vehicle_number: 'MH-GST-1234',
      is_gst_client: false
    });
  });

  after(async () => {
    if (gstOwner) await gstOwner.destroy();
    // Cleanup GST receipts created during test
    await GstReceipts.destroy({ where: { truck_owner: gstOwner.name } });
  });

  it('should toggle GST status for a truck owner', async () => {
    const res = await axios.put(`${apiBase}/settings/truck-owners/${gstOwner.id}/toggle-gst`, 
      { is_gst_client: true },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    expect(res.status).to.equal(200);
    expect(res.data.owner.is_gst_client).to.equal(true);
    
    // Verify in DB
    const updated = await TruckOwners.findByPk(gstOwner.id);
    expect(updated.is_gst_client).to.equal(true);
  });

  it('should create a GST receipt', async () => {
    const payload = {
      truck_owner: gstOwner.name,
      vehicle_number: gstOwner.vehicle_number,
      brass_qty: 2,
      rate: 1500,
      loading_charge: 200,
      gst_rate: 18,
      cash_paid: 1000,
      payment_method: 'cash'
    };

    const res = await axios.post(`${apiBase}/gst-receipts`, payload, {
      headers: { Authorization: `Bearer ${token}` }
    });

    expect(res.status).to.equal(201);
    const receipt = res.data.receipt;
    expect(receipt).to.have.property('receipt_no').that.contains('GST');
    
    // Calculations:
    // Base = 2 * 1500 = 3000
    // TotalBeforeGst = 3000 + 200 = 3200
    // GST = 3200 * 18% = 576
    // Total = 3776
    expect(parseFloat(receipt.total_before_gst)).to.equal(3200);
    expect(parseFloat(receipt.gst_rate)).to.equal(18);
    expect(parseFloat(receipt.total_amount)).to.equal(3776);
    expect(parseFloat(receipt.cgst_amount)).to.equal(288);
    expect(parseFloat(receipt.sgst_amount)).to.equal(288);
  });

  it('should reject GST receipt for non-GST client', async () => {
    // Untoggle GST status
    await gstOwner.update({ is_gst_client: false });

    try {
      await axios.post(`${apiBase}/gst-receipts`, {
        truck_owner: gstOwner.name,
        vehicle_number: gstOwner.vehicle_number,
        brass_qty: 1,
        rate: 1000
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      throw new Error('Should have failed');
    } catch (error) {
      if (!error.response) throw error;
      expect(error.response.status).to.equal(400);
      expect(error.response.data.error).to.include('not a registered GST client');
    }
    
    // Restore for other tests if any
    await gstOwner.update({ is_gst_client: true });
  });

  it('should fetch GST summary report', async () => {
    const res = await axios.get(`${apiBase}/gst-reports/summary`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    
    expect(res.status).to.equal(200);
    expect(res.data).to.have.property('summary');
    expect(res.data).to.have.property('transactions');
    expect(res.data.summary.total_receipts).to.be.at.least(1);
  });
});
