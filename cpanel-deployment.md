# cPanel Node.js App Configuration
# This file should be used as reference for setting up the Node.js app in cPanel

# App Settings:
# - Node.js Version: 18.x or higher (recommended: 20.x)
# - App Root: /public_html (or your domain's document root)
# - App URL: / (root)
# - App Startup File: server.js
# - App Mode: Production

# Environment Variables to set in cPanel:
# NODE_ENV=production
# PORT=3000 (or the port assigned by cPanel)

# Required npm packages (should be installed automatically):
# - next
# - react
# - react-dom

# Build Commands:
# 1. npm install
# 2. npm run build
# 3. npm run server (for testing)

# Files to upload to cPanel:
# - All project files except node_modules/
# - .next/ folder (generated after build)
# - public/ folder
# - server.js
# - package.json
# - package-lock.json
# - next.config.mjs
# - .env (with production values)

# Folder Structure on cPanel:
# /public_html/
# ├── .next/
# ├── public/
# ├── src/
# ├── server.js
# ├── package.json
# ├── next.config.mjs
# ├── .env
# └── .htaccess

# Important Notes:
# 1. Make sure Node.js is enabled in cPanel
# 2. Set the correct Node.js version
# 3. Install dependencies using npm install
# 4. Build the project using npm run build
# 5. Start the app using the server.js file
# 6. Check cPanel Node.js logs for any errors
