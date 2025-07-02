# Cafe Cruiser - cPanel Deployment Guide

This guide will help you deploy the Cafe Cruiser Next.js application to cPanel hosting.

## Prerequisites

1. cPanel hosting account with Node.js support
2. Node.js 18.x or higher enabled in cPanel
3. Access to cPanel File Manager or FTP
4. Terminal/SSH access (if available)

## Deployment Steps

### 1. Prepare the Application

First, build the application locally:

```bash
npm install
npm run build
```

### 2. Upload Files to cPanel

Upload the following files and folders to your cPanel public_html directory (or your domain's document root):

**Required Files:**
- `.next/` folder (generated after build)
- `public/` folder
- `src/` folder
- `server.js`
- `app.js`
- `package.json`
- `package-lock.json`
- `next.config.mjs`
- `.htaccess`
- `.env` (with production values)

**Do NOT upload:**
- `node_modules/` (will be installed on server)
- `.git/`
- Development files

### 3. Configure Node.js in cPanel

1. Log into cPanel
2. Find "Node.js App" in the Software section
3. Click "Create Application"
4. Configure as follows:
   - **Node.js Version:** 18.x or higher (recommended: 20.x)
   - **Application Mode:** Production
   - **Application Root:** `/public_html` (or your domain folder)
   - **Application URL:** `/` (root domain)
   - **Application Startup File:** `server.js`

### 4. Set Environment Variables

In the Node.js App settings, add these environment variables:

```env
NODE_ENV=production
EMAIL_USER=your-email@domain.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=admin@domain.com
```

### 5. Install Dependencies

In cPanel Node.js App section:
1. Click on your application
2. Run "npm install" to install dependencies
3. Wait for installation to complete

### 6. Start the Application

1. Click "Restart" in the Node.js App section
2. Your application should now be running
3. Visit your domain to see the live site

## File Structure on Server

```
/public_html/
├── .next/                 # Next.js build output
├── public/               # Static assets
│   └── assets/          # Images and files
├── src/                 # Source code
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   └── lib/           # Utility libraries
├── server.js           # Custom server file
├── app.js             # Alternative startup file
├── package.json       # Project dependencies
├── next.config.mjs    # Next.js configuration
├── .htaccess         # Apache configuration
└── .env              # Environment variables
```

## Troubleshooting

### Common Issues:

1. **Application won't start:**
   - Check Node.js version (should be 18+ or 20+)
   - Verify all files are uploaded
   - Check environment variables are set correctly

2. **Static files not loading:**
   - Ensure `public/` folder is uploaded
   - Check `.htaccess` file is present
   - Verify file permissions

3. **Email functionality not working:**
   - Check email environment variables
   - Verify email credentials are correct
   - Test with a simple email service first

4. **Build errors:**
   - Run `npm run build` locally first
   - Check for TypeScript/ESLint errors
   - Upload the `.next` folder after successful build

### Checking Logs:

1. In cPanel Node.js App section
2. Click on your application
3. View "Log" section for error messages

## Performance Optimization

1. **Enable compression** - `.htaccess` includes gzip compression
2. **Browser caching** - Static assets are cached for 1 year
3. **Image optimization** - Already configured in `next.config.mjs`
4. **Security headers** - Added in `.htaccess`

## SSL Configuration

1. Enable SSL in cPanel (Let's Encrypt or purchased certificate)
2. The `.htaccess` file includes HTTPS redirect rules
3. Update any hardcoded HTTP URLs to HTTPS

## Maintenance

### Updating the Application:

1. Build locally: `npm run build`
2. Upload new `.next/` folder
3. Upload any changed files
4. Restart the Node.js application in cPanel

### Monitoring:

- Check Node.js App logs regularly
- Monitor error rates
- Check disk space usage
- Monitor SSL certificate expiration

## Support

If you encounter issues:
1. Check cPanel Node.js logs
2. Verify all environment variables
3. Test locally with `npm run server`
4. Contact cPanel support for hosting-specific issues

## Scripts Available

- `npm run dev` - Development server
- `npm run build` - Build for production
- `npm run start` - Standard Next.js production server
- `npm run server` - Custom server (for cPanel)
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## Security Notes

- `.env` file is protected by `.htaccess`
- Server files are blocked from direct access
- Security headers are set in `.htaccess`
- HTTPS is enforced (when SSL is available)
