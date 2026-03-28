import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  Search,
  FolderOpen,
  Music,
  BarChart3,
  Box,
  Clock,
  DollarSign,
  CheckCircle2,
  Star,
  ChevronDown,
  ArrowRight,
} from 'lucide-react'

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const testimonials = [
    {
      author: 'Sarah Thompson',
      role: 'Librarian, City of Birmingham Brass Band',
      content: 'BandSync Library has completely transformed how we manage our music collection. Finding any piece takes seconds, and everyone always has the right version.',
      initials: 'ST',
    },
    {
      author: 'James Wilson',
      role: 'Band Secretary',
      content: "We had boxes of music everywhere with no system. Now everything is digitized, searchable, and organized. It's saved us countless hours before concerts.",
      initials: 'JW',
    },
    {
      author: 'Mike Roberts',
      role: 'Musical Director',
      content: 'Programming concerts is so much easier now. I can search by composer, difficulty, or duration and find exactly what I need. Absolute game-changer.',
      initials: 'MR',
    },
  ]

  const features = [
    {
      icon: Search,
      title: 'Instant Search Across Your Library',
      description: 'Find any piece in seconds. Search by title, composer, arranger, or tags. No more digging through folders.',
    },
    {
      icon: FolderOpen,
      title: 'Smart Organisation & Categories',
      description: 'Organise by genre, difficulty, ensemble size, or your own custom tags. Your library, your way.',
    },
    {
      icon: Music,
      title: 'Digital Sheet Music Access',
      description: 'Upload PDFs, assign parts to players, and let everyone access the latest versions instantly.',
    },
    {
      icon: BarChart3,
      title: 'Track Your Collection',
      description: "Know exactly what you own, what's on loan, and what's missing. Never buy duplicates again.",
    },
  ]

  const steps = [
    {
      number: 1,
      title: 'Create Your Library',
      description: "Sign up and set up your band's music library. Takes 2 minutes.",
    },
    {
      number: 2,
      title: 'Add Your Music',
      description: 'Upload PDFs, enter details, or import from spreadsheets.',
    },
    {
      number: 3,
      title: 'Organise & Tag',
      description: 'Categorise pieces, add metadata, assign parts to players.',
    },
    {
      number: 4,
      title: 'Search & Share',
      description: 'Find anything instantly. Share with your band members.',
    },
  ]

  const faqs = [
    {
      q: 'Is BandSync Library just for brass bands?',
      a: "We're built with brass bands in mind, but any musical ensemble can use it. Concert bands, wind bands, orchestras, choirs—if you have sheet music to organise, BandSync Library works for you.",
    },
    {
      q: 'How much does it cost?',
      a: 'We offer a generous free tier that covers most bands. Paid plans unlock unlimited storage and advanced features. Check our pricing page for details.',
    },
    {
      q: 'Can members access the library on their phones?',
      a: 'Yes. BandSync Library is fully optimised for mobile. Members can browse, search, and view sheet music on any device.',
    },
    {
      q: 'What file formats do you support?',
      a: 'We support PDF uploads for sheet music. You can also add metadata like composer, arranger, difficulty level, duration, and custom tags.',
    },
    {
      q: 'Is our music library secure?',
      a: 'Absolutely. Only your band members can access your library. We use enterprise-grade encryption and security. Your music stays yours.',
    },
    {
      q: 'Can I import my existing catalog?',
      a: "Yes. You can import from spreadsheets (CSV/Excel) or add pieces manually. We'll help you migrate your existing catalogue painlessly.",
    },
  ]

  return (
    <>
      <Head>
        <title>BandSync Library | Your Band's Music Collection, Organised</title>
        <meta name="description" content="Find any piece in seconds. BandSync Library is the smart music library platform for brass bands and ensembles to organise, search, and share sheet music." />
        <meta name="keywords" content="music library management, sheet music organisation, band music catalog, brass band library, digital music library, music collection software" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="BandSync" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="BandSync Library | Your Band's Music Collection, Organised" />
        <meta property="og:description" content="Find any piece in seconds. The smart music library platform for bands and ensembles." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bandsync.co.uk" />
        <meta property="og:image" content="https://bandsync.co.uk/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BandSync Library | Your Band's Music Collection, Organised" />
        <meta name="twitter:description" content="Find any piece in seconds. The smart music library platform for bands and ensembles." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://bandsync.co.uk" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'BandSync Library',
              description: 'Music library management platform for bands and ensembles',
              url: 'https://bandsync.co.uk',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web, iOS, Android',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'GBP',
                description: 'Free tier available',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '50',
              },
            }),
          }}
        />
      </Head>

      {/* ── Floating Navbar ── */}
      <nav className="fixed top-4 left-4 right-4 z-50">
        <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md shadow-lg rounded-2xl border border-gray-100">
          <div className="flex items-center justify-between px-6 py-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-bs-blue rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-bs-black">BandSync Library</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/features" className="text-bs-black hover:text-bs-blue font-medium transition-colors duration-200">
                Features
              </Link>
              <Link href="/pricing" className="text-bs-black hover:text-bs-blue font-medium transition-colors duration-200">
                Pricing
              </Link>
              <Link href="/about" className="text-bs-black hover:text-bs-blue font-medium transition-colors duration-200">
                About
              </Link>
              <Link href="/contact" className="text-bs-black hover:text-bs-blue font-medium transition-colors duration-200">
                Contact
              </Link>
              <a href="https://library.bandsync.co.uk" className="text-bs-black hover:text-bs-blue font-medium transition-colors duration-200">
                Sign In
              </a>
              <a href="https://library.bandsync.co.uk" className="btn-primary text-sm py-2 px-6">
                Get Started Free
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-bs-black cursor-pointer rounded-lg hover:bg-gray-100 transition-colors duration-200"
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
            <div className="md:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
              <Link href="/features" className="text-bs-black hover:text-bs-blue font-medium transition-colors duration-200 py-2" onClick={() => setMobileMenuOpen(false)}>
                Features
              </Link>
              <Link href="/pricing" className="text-bs-black hover:text-bs-blue font-medium transition-colors duration-200 py-2" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="/about" className="text-bs-black hover:text-bs-blue font-medium transition-colors duration-200 py-2" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="text-bs-black hover:text-bs-blue font-medium transition-colors duration-200 py-2" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <a href="https://library.bandsync.co.uk" className="text-bs-black hover:text-bs-blue font-medium transition-colors duration-200 py-2">
                Sign In
              </a>
              <a href="https://library.bandsync.co.uk" className="btn-primary text-center mt-2">
                Get Started Free
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-white via-blue-50/40 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-bs-blue text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-bs-blue rounded-full animate-pulse-slow"></span>
                Built for UK bands &amp; ensembles
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-bs-black">
                Find Any Piece{' '}
                <span className="relative">
                  <span className="text-bs-blue">in Seconds</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M2 9C50 3 150 1 298 9" stroke="#C4A961" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Stop digging through boxes and folders. BandSync Library is the smart music catalogue that organises your band's entire collection — making every piece searchable and accessible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://library.bandsync.co.uk" className="btn-primary text-center">
                  Start Your Free Library
                </a>
                <a href="#features" className="btn-secondary text-center flex items-center justify-center gap-2">
                  See How It Works
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-6 flex flex-wrap gap-x-4 gap-y-1">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> No credit card required</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> Free for up to 500 pieces</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> Set up in 5 minutes</span>
              </p>
            </div>

            {/* Hero UI Mockup */}
            <div className="animate-slide-up">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-bs-blue/10 to-bs-gold/10 rounded-3xl blur-2xl" aria-hidden="true" />
                <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                  {/* Mockup title bar */}
                  <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-md h-5 mx-4 flex items-center px-3">
                      <span className="text-gray-400 text-xs">library.bandsync.co.uk</span>
                    </div>
                  </div>
                  {/* Mockup search bar */}
                  <div className="p-4 border-b border-gray-100 bg-white">
                    <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                      <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">Search by title, composer, arranger…</span>
                    </div>
                  </div>
                  {/* Mockup piece rows */}
                  <div className="divide-y divide-gray-50">
                    {[
                      { title: 'Floral Dance', composer: 'Katie Moss', tag: 'March', parts: 28 },
                      { title: 'New York, New York', composer: 'Kander & Ebb', tag: 'Showpiece', parts: 24 },
                      { title: 'Highland Cathedral', composer: 'Korb & Roever', tag: 'Hymn', parts: 30 },
                      { title: 'The Thunderer', composer: 'John Philip Sousa', tag: 'March', parts: 26 },
                    ].map((piece, i) => (
                      <div key={i} className="flex items-center justify-between px-4 py-3 hover:bg-blue-50/50 transition-colors duration-150">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-bs-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Music className="w-4 h-4 text-bs-blue" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-bs-black">{piece.title}</p>
                            <p className="text-xs text-gray-400">{piece.composer}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="hidden sm:inline text-xs bg-blue-50 text-bs-blue px-2 py-1 rounded-md font-medium">{piece.tag}</span>
                          <span className="text-xs text-gray-400">{piece.parts} parts</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400">Showing 4 of 312 pieces</span>
                    <span className="text-xs text-bs-blue font-medium cursor-pointer hover:underline">View all</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pain Points Section ── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4 text-bs-black">
            Sound Familiar?
          </h2>
          <p className="text-center text-gray-500 mb-14 text-lg max-w-xl mx-auto">
            Every band library manager has been here. Here's what you're up against.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-xl border border-red-100 cursor-default hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-5">
                <Box className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-bs-black mb-3">Boxes Everywhere</h3>
              <p className="text-gray-600 leading-relaxed">
                Stacks of music in filing cabinets, cupboards, and under the stage. Nobody knows what you actually own or where anything is.
              </p>
            </div>
            <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100 cursor-default hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-5">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-bs-black mb-3">The Endless Search</h3>
              <p className="text-gray-600 leading-relaxed">
                "Has anyone seen the Floral Dance parts?" Hours wasted hunting for music before every concert. Missing parts discovered at rehearsal.
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-xl border border-orange-100 cursor-default hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
                <DollarSign className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-bs-black mb-3">Buying Duplicates</h3>
              <p className="text-gray-600 leading-relaxed">
                Re-ordering music you already own because nobody remembers the catalogue. Wasted money on pieces gathering dust in the wrong folder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solution Section ── */}
      <section className="py-20 bg-gradient-to-r from-bs-blue to-bs-blue-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-10">
                Here's What Changes
              </h2>
              <div className="space-y-7">
                {[
                  { title: 'Your Entire Collection, Searchable', body: 'Every piece catalogued and indexed. Search by title, composer, arranger, or any tag you create. Results in seconds.' },
                  { title: 'Know Exactly What You Own', body: 'Complete inventory at your fingertips. Track conditions, locations, and loan status. Never buy duplicates again.' },
                  { title: 'Digital Access for Everyone', body: 'Upload PDFs and share with the band. Members access sheet music from any device, anytime.' },
                  { title: 'Concert Programming Made Easy', body: 'Filter by duration, difficulty, or genre. Build the perfect programme in minutes, not hours.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-blue-100 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution UI Mockup — search demo */}
            <div className="relative">
              <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-2xl" aria-hidden="true" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
                <div className="p-5 border-b border-white/10">
                  <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3">
                    <Search className="w-4 h-4 text-white/60 flex-shrink-0" />
                    <span className="text-white/80 text-sm font-medium">Floral Dance</span>
                    <span className="ml-auto text-xs text-white/50">3 results</span>
                  </div>
                </div>
                <div className="divide-y divide-white/10">
                  {[
                    { title: 'Floral Dance', composer: 'Katie Moss', status: 'Complete', color: 'bg-green-400' },
                    { title: 'Floral Dance (Solo)', composer: 'Katie Moss', status: 'Missing 2', color: 'bg-yellow-400' },
                    { title: 'Floral Dance (Quartet)', composer: 'arr. unknown', status: 'On Loan', color: 'bg-blue-300' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                          <Music className="w-4 h-4 text-white/70" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{item.title}</p>
                          <p className="text-xs text-white/50">{item.composer}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${item.color}`} />
                        <span className="text-xs text-white/70">{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-white/10">
                  <p className="text-xs text-white/40">Searched 312 pieces in 0.04s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section id="features" className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4 text-bs-black">
            Everything Your Library Needs
          </h2>
          <p className="text-center text-gray-500 mb-14 text-lg max-w-xl mx-auto">
            Designed from the ground up for band librarians and musical directors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-200 cursor-default group border border-transparent hover:border-blue-100">
                  <div className="w-12 h-12 bg-bs-blue/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-bs-blue/20 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-bs-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-bs-black mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-blue-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4 text-bs-black">
            Set Up Your Library in 4 Steps
          </h2>
          <p className="text-center text-gray-500 mb-14 text-lg max-w-xl mx-auto">
            From signup to fully searchable library in under 10 minutes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 cursor-default relative">
                <div className="w-12 h-12 bg-bs-blue text-white rounded-full flex items-center justify-center font-bold text-lg mb-5">
                  {step.number}
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 right-0 translate-x-1/2 text-gray-300 z-10">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
                <h3 className="text-lg font-bold text-bs-black mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://library.bandsync.co.uk" className="btn-primary">
              Create Your Library Now
            </a>
          </div>
        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4 text-bs-black">
            Loved by Librarians Across the UK
          </h2>
          <p className="text-center text-gray-500 mb-14 text-lg">
            See what bands are saying about BandSync Library
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-blue-50 p-8 rounded-xl border border-blue-100 cursor-default hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-bs-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-bs-black text-sm">{testimonial.author}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Inline CTA after testimonials */}
          <div className="mt-14 text-center">
            <p className="text-gray-500 mb-4 text-lg">Ready to join them?</p>
            <a href="https://library.bandsync.co.uk" className="btn-primary inline-flex items-center gap-2">
              Start Your Free Library
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-sm text-gray-400 mt-3">No credit card required · Free for up to 500 pieces</p>
          </div>
        </div>
      </section>

      {/* ── Social Proof Banner ── */}
      <section className="py-16 bg-gradient-to-r from-bs-blue to-bs-blue-dark">
        <div className="container-custom text-center">
          <p className="text-white/80 text-lg mb-10">Trusted by bands across the UK to organise their music</p>
          <div className="flex items-center justify-center gap-16 flex-wrap">
            <div className="text-white text-center">
              <p className="text-4xl font-bold">10,000+</p>
              <p className="text-blue-200 mt-1">Pieces Catalogued</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <div className="text-white text-center">
              <p className="text-4xl font-bold">50+</p>
              <p className="text-blue-200 mt-1">Libraries Active</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/20" />
            <div className="text-white text-center">
              <p className="text-4xl font-bold">500+</p>
              <p className="text-blue-200 mt-1">Hours Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4 text-bs-black">
            Got Questions?
          </h2>
          <p className="text-center text-gray-500 mb-14 text-lg max-w-xl mx-auto">
            Everything you need to know about BandSync Library.
          </p>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-colors duration-200">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                  className="w-full px-8 py-5 text-left hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <h3 className="font-semibold text-bs-black">{faq.q}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-bs-blue flex-shrink-0 transition-transform duration-200 ${activeAccordion === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeAccordion === idx && (
                  <div className="px-8 pb-6 bg-white border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA Section ── */}
      <section className="py-24 bg-gradient-to-r from-bs-blue to-bs-blue-dark">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Organise Your Music?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 50+ bands that have finally tamed their music collection. Find any piece in seconds. No credit card required.
          </p>
          <a
            href="https://library.bandsync.co.uk"
            className="inline-flex items-center gap-2 bg-white text-bs-blue font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
          >
            Start Your Free Library
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-blue-200 mt-6 text-sm">
            Set up in 5 minutes · Free for up to 500 pieces · No hidden fees
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-bs-black text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-bs-blue rounded-lg flex items-center justify-center">
                  <Music className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-lg">BandSync Library</span>
              </Link>
              <p className="text-gray-400 text-sm mb-4">
                The music library platform built by musicians, for musicians.
              </p>
              <p className="text-gray-500 text-xs">
                A{' '}
                <a href="https://harvey-wallace.co.uk" target="_blank" rel="noopener noreferrer" className="text-bs-gold hover:text-white transition-colors duration-200">
                  Harvey-Wallace
                </a>{' '}
                Product
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/features" className="hover:text-white transition-colors duration-200">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors duration-200">Pricing</Link></li>
                <li><a href="https://library.bandsync.co.uk" className="hover:text-white transition-colors duration-200">Sign In</a></li>
                <li><a href="https://library.bandsync.co.uk" className="hover:text-white transition-colors duration-200">Start Free Trial</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors duration-200">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors duration-200">Contact</Link></li>
                <li>
                  <a href="https://harvey-wallace.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                    Harvey-Wallace
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="mailto:hello@bandsync.co.uk" className="hover:text-white transition-colors duration-200">hello@bandsync.co.uk</a></li>
                <li><a href="mailto:support@bandsync.co.uk" className="hover:text-white transition-colors duration-200">support@bandsync.co.uk</a></li>
              </ul>
            </div>
          </div>

          {/* Popular SEO Keywords Footer Links */}
          <div className="bg-bs-blue bg-opacity-20 p-6 rounded-lg mb-8">
            <p className="text-gray-400 text-xs mb-3 font-semibold uppercase tracking-wider">Popular Searches</p>
            <div className="flex flex-wrap gap-3 text-xs">
              <Link href="/features" className="text-gray-300 hover:text-white transition-colors duration-200">Music Library Software</Link>
              <span className="text-gray-600">·</span>
              <Link href="/features" className="text-gray-300 hover:text-white transition-colors duration-200">Sheet Music Organisation</Link>
              <span className="text-gray-600">·</span>
              <Link href="/features" className="text-gray-300 hover:text-white transition-colors duration-200">Band Music Catalog</Link>
              <span className="text-gray-600">·</span>
              <Link href="/features" className="text-gray-300 hover:text-white transition-colors duration-200">Digital Music Library</Link>
              <span className="text-gray-600">·</span>
              <Link href="/features" className="text-gray-300 hover:text-white transition-colors duration-200">Brass Band Library</Link>
              <span className="text-gray-600">·</span>
              <Link href="/features" className="text-gray-300 hover:text-white transition-colors duration-200">Music Collection Management</Link>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
              <p>&copy; 2026 BandSync Library. All rights reserved. Built with ♪ for musicians.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
