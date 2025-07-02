#!/usr/bin/env node
/* eslint-disable no-console */

// This is the main entry point for the Node.js app on cPanel
// Make sure this file has execution permissions: chmod +x app.js

const { spawn } = require('node:child_process');
const path = require('node:path');

// Set production environment
process.env.NODE_ENV = 'production';

// Get port from cPanel environment or default to 3000
const port = process.env.PORT || 3000;

console.log('Starting Cafe Cruiser application...');
console.log(`Environment: ${process.env.NODE_ENV}`);
console.log(`Port: ${port}`);

// Start the server
const serverPath = path.join(__dirname, 'server.js');
const server = spawn('node', [serverPath], {
  stdio: 'inherit',
  env: {
    ...process.env,
    PORT: port,
    NODE_ENV: 'production',
  },
});

server.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

server.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
  if (code !== 0) {
    process.exit(code);
  }
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  server.kill('SIGINT');
});
