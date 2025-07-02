/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
const { createServer } = require('node:http');
// eslint-disable-next-line node/no-deprecated-api
const { parse } = require('node:url');
const next = require('next');

// Get the port from environment variables or default to 3000
const port = Number.parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

// Create Next.js app
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    try {
      // Parse the URL
      const parsedUrl = parse(req.url, true);
      // eslint-disable-next-line no-unused-vars
      const { pathname, query } = parsedUrl;

      // Handle all requests with Next.js
      handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
      console.log(`> Environment: ${process.env.NODE_ENV || 'development'}`);
    });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  process.exit(0);
});
