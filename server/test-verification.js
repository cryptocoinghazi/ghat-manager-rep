
const API_URL = 'http://localhost:3000/api';

async function runTests() {
  try {
    console.log('1. Authenticating...');
    const loginRes = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'admin',
        password: 'password123'
      })
    });
    
    if (!loginRes.ok) throw new Error(`Login failed: ${loginRes.statusText}`);
    const loginData = await loginRes.json();
    const token = loginData.token;
    console.log('Authentication successful. Token acquired.');

    const headers = { 
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    console.log('\n2. Creating a Truck Owner (Prerequisite)...');
    const ownerRes = await fetch(`${API_URL}/settings/truck-owners`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        name: 'Test Owner ' + Date.now(),
        phone: '9999999999',
        address: 'Test Address',
        vehicle_number: 'TEST' + Math.floor(Math.random() * 10000)
      })
    });
    
    if (!ownerRes.ok) throw new Error(`Create Owner failed: ${ownerRes.statusText}`);
    const ownerData = await ownerRes.json();
    const ownerId = ownerData.owner.id;
    console.log('Truck Owner created with ID:', ownerId);

    console.log('\n3. Creating a Truck Vehicle...');
    const vehicleNumber = 'TEST' + Math.floor(Math.random() * 10000);
    const vehicleRes = await fetch(`${API_URL}/settings/truck-vehicles`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        vehicle_number: vehicleNumber,
        driver_name: 'Test Driver',
        tyre_type: 'MRF',
        truck_owner_id: ownerId
      })
    });

    if (!vehicleRes.ok) throw new Error(`Create Vehicle failed: ${vehicleRes.statusText}`);
    const vehicleData = await vehicleRes.json();
    console.log('Truck Vehicle created:', vehicleData.vehicle);

    console.log('\n4. Verifying Truck Vehicle Fetch...');
    const fetchRes = await fetch(`${API_URL}/settings/truck-vehicles?q=${vehicleNumber}`, { headers });
    if (!fetchRes.ok) throw new Error(`Fetch Vehicle failed: ${fetchRes.statusText}`);
    const vehicles = await fetchRes.json();
    const fetchedVehicle = vehicles.find(v => v.vehicle_number === vehicleNumber);
    
    if (fetchedVehicle && fetchedVehicle.driver_name === 'Test Driver' && fetchedVehicle.tyre_type === 'MRF') {
      console.log('SUCCESS: Vehicle fetched with correct driver and tyre details.');
    } else {
      console.error('FAILURE: Vehicle details mismatch or not found.', fetchedVehicle);
    }

    console.log('\n5. Verifying Reports Endpoint with Filters...');
    const params = new URLSearchParams({
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0],
      vehicleNumber: vehicleNumber,
      driverName: 'Test Driver'
    });
    
    const reportRes = await fetch(`${API_URL}/reports/daily-transactions?${params}`, { headers });
    
    if (reportRes.ok) {
      const reports = await reportRes.json();
      console.log('SUCCESS: Reports endpoint accepted vehicle/driver filters.');
      console.log('Report Data Count:', reports.transactions ? reports.transactions.length : 0);
    } else {
      console.error('FAILURE: Reports endpoint returned status', reportRes.status);
    }

  } catch (error) {
    console.error('Test Failed:', error.message);
  }
}

runTests();
