import Link from 'next/link'
import { ArrowRight, Menu, Music2, X } from 'lucide-react'
import { useState } from 'react'

export const APP_URL = 'https://library.bandsync.co.uk'

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false)
  return <header className={`site-header ${overlay ? '' : 'site-header-solid'}`}>
    <div className="nav-wrap">
      <Link href="/" className="brand" aria-label="BandSync home"><span className="brand-mark"><Music2 /></span><span>BandSync <b>Library</b></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation"><Link href="/features">Features</Link><Link href="/#mobile">Mobile</Link><Link href="/pricing">Pricing</Link><Link href="/about">About</Link></nav>
      <div className="nav-actions"><a className="sign-in" href={APP_URL}>Sign in</a><a className="button button-small" href={APP_URL}>Start free <ArrowRight /></a></div>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="mobile-nav"><Link href="/features">Features</Link><Link href="/#mobile">Mobile</Link><Link href="/pricing">Pricing</Link><Link href="/about">About</Link><a href={APP_URL}>Sign in</a><a className="button" href={APP_URL}>Start free</a></nav>}
  </header>
}

export function SiteFooter() {
  return <footer><div className="shell footer-grid"><div><Link href="/" className="brand footer-brand"><span className="brand-mark"><Music2 /></span><span>BandSync <b>Library</b></span></Link><p>Your band&apos;s music, finally in order.</p></div><div><b>Product</b><Link href="/features">Features</Link><Link href="/pricing">Pricing</Link><Link href="/#mobile">Mobile apps</Link><a href={APP_URL}>Sign in</a></div><div><b>Company</b><Link href="/about">About</Link><Link href="/contact">Contact</Link><a href="https://harvey-wallace.co.uk">Harvey-Wallace</a></div><div><b>Legal</b><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><a href="mailto:support@bandsync.co.uk">Support</a></div></div><div className="shell footer-bottom"><span>© 2026 BandSync Library</span><span>Made with care in the UK ♪</span></div></footer>
}
