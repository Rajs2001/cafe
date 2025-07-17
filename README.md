# Cruiserverse - Adventure Community Platform

![Cruiserverse Banner](https://www.link.in/url/of/banner)

A modern Next.js application built for the adventure community, featuring motorcycle enthusiasts, riders, and adventure seekers. The platform showcases various services including Ventures, Core experiences, Pulse digital services, Partnerships, Culture, Studio content creation, and Career opportunities.

## 🚀 Features

- **Modern Design**: Built with Next.js 14, React, and TypeScript
- **Responsive UI**: Mobile-first design with Tailwind CSS
- **Static Export Ready**: Configured for static site generation and deployment
- **Animation**: Smooth animations using Framer Motion
- **External API Integration**: Form submissions to external API endpoint
- **SEO Optimized**: Built-in SEO with Next.js metadata API
- **Performance Optimized**: Image optimization, compression, and caching

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Validation**: React Hook Form with Zod resolvers
- **UI Components**: Radix UI primitives
- **Development**: ESLint, Prettier

## 📁 Project Structure

```
cafe/
├── public/                 # Static assets
│   ├── assets/            # Images and media files
│   └── base/              # Brand assets and logos
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── careers/       # Careers page
│   │   ├── core/          # Core services page
│   │   ├── culture/       # Culture page
│   │   ├── partnership/   # Partnership page
│   │   ├── pulse/         # Pulse digital services page
│   │   ├── studio/        # Studio page
│   │   ├── ventures/      # Ventures page
│   │   └── globals.css    # Global styles
│   ├── components/        # Reusable components
│   │   ├── careers/       # Career-specific components
│   │   ├── core/          # Core service components
│   │   ├── culture/       # Culture components
│   │   ├── home/          # Homepage components
│   │   ├── partnership/   # Partnership components
│   │   ├── pulse/         # Pulse service components
│   │   ├── studio/        # Studio components
│   │   ├── ventures/      # Ventures components
│   │   └── ui/            # Base UI components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility libraries
│   └── styles/            # Additional styles
├── server.js              # Custom server for cPanel hosting
├── app.js                 # Alternative startup script
└── .htaccess             # Apache configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rajs2001/cafe.git
   cd cafe
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or with legacy peer deps if needed
   npm run instldeps
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   # Add any required environment variables here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run export` - Build static export
- `npm run server` - Start custom server (for cPanel)
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## 🌐 Deployment

### Static Export (Recommended)

The application is configured for static export, making it suitable for deployment on any static hosting service.

1. **Build the static site**
   ```bash
   npm run export
   ```

2. **Deploy the `out` directory**

   The generated `out` directory contains all static files ready for deployment to:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3
   - Any web server

### cPanel Hosting

For cPanel hosting with Node.js support:

1. Upload project files to cPanel
2. Configure Node.js app in cPanel
3. Set startup file to `server.js`
4. Install dependencies with `npm install`

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed cPanel deployment instructions.

## 🎨 Pages & Features

### Homepage
- Hero section with animated background
- Service overview cards
- Call-to-action sections

### Ventures
- Adventure community showcase
- Team introductions
- Experience galleries

### Core
- Core service offerings
- Feature highlights
- Interactive elements

### Pulse
- Digital marketing services
- Brand storytelling
- CTA integration

### Partnership
- Partnership opportunities
- Contact form with external API integration
- Business collaboration details

### Culture
- Company culture showcase
- Team values and mission
- Interactive culture elements

### Studio
- Content creation services
- Portfolio showcase
- Creative process highlights

### Careers
- Job opportunities
- Company benefits
- Application process
- Team growth statistics

## 🔧 Configuration

### Next.js Configuration

The project uses a custom Next.js configuration (`next.config.mjs`) with:
- Static export enabled
- Image optimization disabled for static hosting
- CORS headers for external API calls
- Build error ignoring for development flexibility

### Form Integration

Contact forms are integrated with an external API endpoint:
- **Endpoint**: `https://api.cruiserverse.in/v1/email`
- **Method**: POST
- **Content-Type**: application/json

### Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Components**: Radix UI primitives for accessibility
- **Animations**: Framer Motion for smooth interactions
- **Responsive Design**: Mobile-first approach

## 🎯 SEO & Performance

- **Metadata API**: Next.js 14 metadata for SEO
- **Image Optimization**: Optimized images for faster loading
- **Static Generation**: Pre-rendered pages for better performance
- **Compression**: Gzip compression enabled
- **Caching**: Browser caching configured

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website**: [https://cruiserverse.in](https://cruiserverse.in)
- **Email**: services@cruiserverse.in

## 🙏 Acknowledgments

- Built with ❤️ for the adventure community
- Thanks to all contributors and the closed-source community
- Special thanks to the motorcycle and adventure enthusiast community

---

**Built for the Wild. Powered by Stories. Driven by Community.**
