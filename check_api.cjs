const http = require('http');

const options = {
  hostname: '127.0.0.1',
  port: 3000,
  path: '/api/reports/profit-loss?startDate=2024-01-01&endDate=2024-01-31',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log('Keys in response:', Object.keys(json));
      if (json.trends) {
        console.log('trends type:', Array.isArray(json.trends) ? 'Array' : typeof json.trends);
        console.log('trends length:', json.trends.length);
      } else {
        console.log('trends is missing or falsy');
      }
    } catch (e) {
      console.log('Response is not JSON:', data.substring(0, 200));
    }
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.end();
