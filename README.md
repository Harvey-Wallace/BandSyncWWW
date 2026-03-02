# BandSync Library Website 🎼

The official marketing website for BandSync Library - the music library platform built for brass bands and ensembles.

**Live Site:** [https://bandsync.co.uk](https://bandsync.co.uk)

**A Harvey-Wallace Product:** [https://harvey-wallace.co.uk](https://harvey-wallace.co.uk)

## Overview

BandSync Library helps brass bands organize, search, and share their sheet music collection through one simple, intuitive platform. This is the public-facing website that drives signups and showcases the value of the library platform.

## Feature Highlights

- **Modern, SEO-optimized landing page** - Built with responsive design and Core Web Vitals optimization
- **Lightning-fast performance** - Next.js with static generation
- **Mobile-first design** - Fully responsive with hamburger navigation
- **Complete page structure** - Homepage, Features, Pricing, About, Contact, Privacy, Terms
- **Harvey-Wallace branding** - Consistent branding throughout

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Homepage | `/` | Main landing page with hero, features, testimonials |
| Features | `/features` | Detailed breakdown of all library features |
| Pricing | `/pricing` | Pricing plans (£9.99/mo, £99/year, 30-day trial) |
| About | `/about` | Company story and Harvey-Wallace info |
| Contact | `/contact` | Contact form and email addresses |
| Privacy | `/privacy` | GDPR-compliant privacy policy |
| Terms | `/terms` | Terms of service |
| 404 | `/404` | Custom error page |

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
components/
└── Layout.tsx         # Shared layout with nav + footer

pages/
├── index.tsx          # Main landing page
├── features.tsx       # Features page
├── pricing.tsx        # Pricing page
├── about.tsx          # About page
├── contact.tsx        # Contact page
├── privacy.tsx        # Privacy Policy
├── terms.tsx          # Terms of Service
├── 404.tsx            # Custom 404 page
├── _app.tsx           # Next.js app wrapper
└── _document.tsx      # HTML document structure

styles/
└── globals.css        # Global styles, Tailwind, animations

public/
├── robots.txt         # SEO crawling instructions
└── sitemap.xml        # XML sitemap for search engines

tailwind.config.ts     # Tailwind CSS configuration
next.config.js         # Next.js configuration
```

## Homepage Sections

1. **Hero Section** - Compelling headline + subheading about solving music library chaos
2. **Pain Points** - Relatable problems (boxes everywhere, endless searching, buying duplicates)
3. **Solution** - How BandSync Library solves these problems
4. **Features** - Outcome-based library feature descriptions
5. **How It Works** - 4-step onboarding process
6. **Testimonials** - Quotes from librarians and band leaders
7. **Social Proof** - Band count stats
8. **FAQ** - Common questions and answers
9. **Final CTA** - Strong call-to-action
10. **Footer** - Links, Harvey-Wallace branding, legal pages

## SEO Strategy

- **Target Keywords**: "music library management", "sheet music organization", "band music catalog", "digital music library"
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

**Built with ♪ for musicians by [Harvey-Wallace](https://harvey-wallace.co.uk)**

## Contact

- **General:** hello@bandsync.co.uk
- **Support:** support@bandsync.co.uk
