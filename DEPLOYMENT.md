# BandSync Website - Deployment Guide 🚀

## What You've Got

A modern, high-conversion landing page for BandSync that incorporates all the recommendations from your independent audit:

✅ **Compelling messaging** - "Know Your Lineup in 10 Seconds"  
✅ **Pain-to-solution flow** - Emotional hook before solution  
✅ **Social proof** - City of Birmingham Brass Band testimonials  
✅ **SEO optimized** - Target brass band keywords  
✅ **Mobile-first design** - Perfect for band members on phones  
✅ **Trust elements** - Testimonials, features, how it works  
✅ **Clear CTAs** - Repeated throughout the site  
✅ **Screenshot placeholders** - Ready for app screenshots  

## Quick Start (Local)

```bash
# Install dependencies (if not done)
npm install

# Run development server
npm run dev

# Open in browser
open http://localhost:3000
```

## Deploy to Vercel

### Option 1: Via Git (Recommended)

1. Push this repo to GitHub
   ```bash
   git remote add origin https://github.com/Harvey-Wallace/BandSyncWWW.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"

Vercel will automatically:
- Detect Next.js project
- Install dependencies
- Build for production
- Deploy to CDN

### Option 2: Via CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. That's it!

### Option 3: Manual Build

```bash
npm run build
npm start
```

Then deploy the `.next` folder to your hosting.

## After Deployment

### 1. Update Your Domain

In Vercel dashboard:
- Go to Settings > Domains
- Add `bandsync.co.uk`
- Update your DNS records

### 2. Add Missing Content

Currently has placeholders for:
- **App screenshots** (Dashboard, RSVP view, library)
- **City of Birmingham Brass Band logo**
- **Real testimonial quotes**

**To add screenshots:**
- Replace placeholder `aspect-video` divs with actual images
- Place images in `/public` folder
- Update image paths in `pages/index.tsx`

### 3. Update Links

Current links point to `https://library.bandsync.co.uk`

Update these in `pages/index.tsx` if needed:
- Line 312: "Sign In" button
- Line 316: "Get Started Free" button
- Lines in various CTAs

### 4. Google Search Console

1. Verify your site: [Google Search Console](https://search.google.com/search-console)
2. Submit the sitemap: `/sitemap.xml`
3. Monitor rankings for target keywords:
   - "brass band management"
   - "band availability tracker"
   - "music library management UK"

### 5. Analytics

Add Google Analytics by updating `pages/_document.tsx`:

```tsx
{/* Google Analytics */}
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `
}} />
```

Replace `GA_ID` with your Google Analytics ID.

## Customization Checklist

- [ ] Add City of Birmingham Brass Band logo to testimonials section
- [ ] Add real band logos to social proof section
- [ ] Replace screenshot placeholders with actual app screenshots
- [ ] Update testimonial quotes with real feedback
- [ ] Add your contact email/form
- [ ] Set up Google Analytics
- [ ] Update domain DNS records
- [ ] Test on mobile devices
- [ ] Submit sitemap to Google Search Console
- [ ] Verify site speed with Google PageSpeed Insights

## File Guide

Important files to know:

- **`pages/index.tsx`** - Main landing page (edit content here)
- **`styles/globals.css`** - Global styles
- **`tailwind.config.ts`** - Colors and theme
- **`vercel.json`** - Vercel deployment config
- **`next.config.js`** - Next.js settings

## Performance

Current metrics:
- **First Load JS**: 85.2 kB (excellent)
- **Build**: ~3 seconds
- **Static pages**: Pre-rendered at build time
- **Mobile**: Fully responsive

## Future Enhancements

Consider adding:
- Blog section (for SEO content)
- Pricing page
- About page
- Contact form
- Video testimonials
- Comparison table
- ROI calculator
- Free trial email sequence

## Support

Need help? The project includes:
- TypeScript for type safety
- Tailwind CSS for easy styling
- Next.js best practices
- Mobile-first responsive design

---

**Ready? Push to Vercel and start getting signups! 🎺**
