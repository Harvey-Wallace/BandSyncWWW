import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export default function Layout({ 
  children, 
  title = 'BandSync Library | Your Band\'s Music Collection, Organized',
  description = 'Find any piece in seconds. BandSync Library is the smart music library platform for brass bands and ensembles to organize, search, and share sheet music.'
}: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="BandSync" />
        <link rel="canonical" href="https://bandsync.co.uk" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
        <div className="container-custom flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-bs-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">♪</span>
            </div>
            <span className="font-bold text-lg text-bs-black">BandSync Library</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/features" className="text-bs-black hover:text-bs-blue font-medium transition">
              Features
            </Link>
            <Link href="/pricing" className="text-bs-black hover:text-bs-blue font-medium transition">
              Pricing
            </Link>
            <Link href="/about" className="text-bs-black hover:text-bs-blue font-medium transition">
              About
            </Link>
            <Link href="/contact" className="text-bs-black hover:text-bs-blue font-medium transition">
              Contact
            </Link>
            <a href="https://library.bandsync.co.uk" className="text-bs-black hover:text-bs-blue font-medium transition">
              Sign In
            </a>
            <a href="https://library.bandsync.co.uk" className="btn-primary">
              Get Started Free
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-bs-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="container-custom flex flex-col gap-4">
              <Link href="/features" className="text-bs-black hover:text-bs-blue font-medium transition py-2" onClick={() => setMobileMenuOpen(false)}>
                Features
              </Link>
              <Link href="/pricing" className="text-bs-black hover:text-bs-blue font-medium transition py-2" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="/about" className="text-bs-black hover:text-bs-blue font-medium transition py-2" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="text-bs-black hover:text-bs-blue font-medium transition py-2" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <a href="https://library.bandsync.co.uk" className="text-bs-black hover:text-bs-blue font-medium transition py-2">
                Sign In
              </a>
              <a href="https://library.bandsync.co.uk" className="btn-primary text-center">
                Get Started Free
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-bs-black text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-bs-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">♪</span>
                </div>
                <span className="font-bold text-lg">BandSync Library</span>
              </Link>
              <p className="text-gray-400 text-sm mb-4">
                The music library platform built by musicians, for musicians.
              </p>
              <p className="text-gray-500 text-xs">
                A <a href="https://harvey-wallace.co.uk" target="_blank" rel="noopener noreferrer" className="text-bs-gold hover:text-white transition">Harvey-Wallace</a> Product
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/features" className="hover:text-white transition">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
                <li><a href="https://library.bandsync.co.uk" className="hover:text-white transition">Sign In</a></li>
                <li><a href="https://library.bandsync.co.uk" className="hover:text-white transition">Start Free Trial</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><a href="https://harvey-wallace.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Harvey-Wallace</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="mailto:hello@bandsync.co.uk" className="hover:text-white transition">hello@bandsync.co.uk</a></li>
                <li><a href="mailto:support@bandsync.co.uk" className="hover:text-white transition">support@bandsync.co.uk</a></li>
              </ul>
            </div>
          </div>

          {/* Popular SEO Keywords Footer Links */}
          <div className="bg-bs-blue bg-opacity-20 p-6 rounded-lg mb-8">
            <p className="text-gray-400 text-xs mb-3 font-semibold uppercase">Popular Searches</p>
            <div className="flex flex-wrap gap-3 text-xs">
              <Link href="/features" className="text-gray-300 hover:text-white transition">Music Library Software</Link>
              <span className="text-gray-600">•</span>
              <Link href="/features" className="text-gray-300 hover:text-white transition">Sheet Music Organization</Link>
              <span className="text-gray-600">•</span>
              <Link href="/features" className="text-gray-300 hover:text-white transition">Band Music Catalog</Link>
              <span className="text-gray-600">•</span>
              <Link href="/features" className="text-gray-300 hover:text-white transition">Digital Music Library</Link>
              <span className="text-gray-600">•</span>
              <Link href="/features" className="text-gray-300 hover:text-white transition">Brass Band Library</Link>
              <span className="text-gray-600">•</span>
              <Link href="/features" className="text-gray-300 hover:text-white transition">Music Collection Management</Link>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
              <p>&copy; 2026 BandSync Library. All rights reserved. Built with ♪ for musicians.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
