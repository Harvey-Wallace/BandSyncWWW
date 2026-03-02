# BandSync Website 🎺

The official marketing website for BandSync - the band management platform built for brass bands.

## Overview

BandSync helps brass bands organize rehearsals, track availability, and manage sheet music through one simple, intuitive platform. This is the public-facing website that drives signups and showcases the value of the platform.

## Feature Highlights

- **Modern, SEO-optimized landing page** - Built with responsive design and Core Web Vitals optimization
- **Lightning-fast performance** - Next.js with static generation and image optimization
- **Mobile-first design** - Fully responsive and thumb-friendly for mobile users
- **Trust & social proof** - Testimonials, band logos, and real-world use case demonstrations
- **Pain-to-solution messaging** - Follows proven conversion copywriting principles

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
pages/
├── index.tsx          # Main landing page with all sections
├── _app.tsx          # Next.js app wrapper
└── _document.tsx     # HTML document structure

styles/
└── globals.css       # Global styles and Tailwind directives

public/
├── robots.txt        # SEO crawling instructions
├── sitemap.xml       # XML sitemap for search engines
└── ...               # Static assets

tailwind.config.ts    # Tailwind CSS configuration
next.config.js        # Next.js configuration
```

## Sections

1. **Hero Section** - Compelling headline + subheading about solving band chaos
2. **Pain Points** - Relatable problems (WhatsApp, spreadsheets, stress)
3. **Solution** - How BandSync solves these problems
4. **Features** - Outcome-based feature descriptions
5. **How It Works** - 4-step onboarding process
6. **Testimonials** - Real quotes from band leaders
7. **FAQ** - Common questions and answers
8. **Final CTA** - Strong call-to-action
9. **Footer** - Links + SEO optimization

## SEO Strategy

- **Target Keywords**: "brass band management", "band availability tracker", "music library management UK"
- **Meta Tags**: Optimized title, description, and Open Graph tags
- **Structured Data**: JSON-LD schema for SoftwareApplication
- **Mobile Optimization**: Responsive design with mobile-first approach
- **Performance**: Next.js optimizations for Core Web Vitals

## Branding

**Colors**:
- Primary Blue: `#0080C8`
- Dark Blue: `#005FA3`
- Gold/Brass Accent: `#C4A961`
- Black: `#1a1a1a`

**Typography**: Inter font family via Google Fonts

## Deployment

This site is built for Vercel and includes `vercel.json` configuration.

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect your Git repository to Vercel for automatic deployments.

## Customization

### Update Testimonials
Edit the `testimonials` array in `pages/index.tsx`

### Update Features
Edit the `features` array in `pages/index.tsx`

### Add Screenshots
Replace placeholder images in the sections with real app screenshots

## Performance Notes

- ✅ Static site generation for fast load times
- ✅ Image optimization built-in
- ✅ CSS-in-JS with Tailwind for minimal bundle size
- ✅ Responsive across all devices
- ✅ Mobile-first design approach

## Technical Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **SEO**: Next.js built-in support + structured data

## Contributing

To make changes:

1. Create a feature branch
2. Make your changes
3. Test locally with `npm run dev`
4. Commit and push
5. Deploy via Vercel or manual build

---

**Built with ♪ for musicians**
