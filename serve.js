/**
 * serve.js – Local HTTP server for MM Joshi Eye Institute landing page
 * Run:  node serve.js
 * Then open the URL shown in the console on your laptop or mobile.
 */

const http = require('http');
const fs   = require('fs');
const path = require('path');
const os   = require('os');

const PORT = 3000;
const ROOT = fs.existsSync(path.join(__dirname, 'dist')) ? path.join(__dirname, 'dist') : __dirname;

const MIME = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff2':'font/woff2',
};

const server = http.createServer((req, res) => {
  let filePath = path.join(ROOT, req.url === '/' ? 'index.html' : req.url);
  const ext  = path.extname(filePath).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Try serving index.html for unknown routes (SPA fallback)
      fs.readFile(path.join(ROOT, 'index.html'), (e2, d2) => {
        if (e2) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(d2);
      });
      return;
    }
    res.writeHead(200, { 'Content-Type': mime });
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  // Find local IP so mobile devices can connect too
  const ifaces = os.networkInterfaces();
  let localIP  = '127.0.0.1';
  for (const name of Object.keys(ifaces)) {
    for (const iface of ifaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        localIP = iface.address;
        break;
      }
    }
  }

  console.log('=============================================================');
  console.log('  MM Joshi Eye Institute – Local Server Running');
  console.log('=============================================================');
  console.log('');
  console.log('  Open on THIS LAPTOP:');
  console.log('    http://localhost:' + PORT);
  console.log('');
  console.log('  Open on YOUR MOBILE (must be on the same Wi-Fi):');
  console.log('    http://' + localIP + ':' + PORT);
  console.log('');
  console.log('  Press Ctrl + C to stop the server.');
  console.log('=============================================================');
});
