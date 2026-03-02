import Head from 'next/head'
import React, { useState } from 'react'

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  const testimonials = [
    {
      author: 'Sarah Thompson',
      role: 'Librarian, City of Birmingham Brass Band',
      content: 'BandSync Library has completely transformed how we manage our music collection. Finding any piece takes seconds, and everyone always has the right version.',
    },
    {
      author: 'James Wilson',
      role: 'Band Secretary',
      content: 'We had boxes of music everywhere with no system. Now everything is digitized, searchable, and organized. It\'s saved us countless hours before concerts.',
    },
    {
      author: 'Mike Roberts',
      role: 'Musical Director',
      content: 'Programming concerts is so much easier now. I can search by composer, difficulty, or duration and find exactly what I need. Absolute game-changer.',
    },
  ]

  const features = [
    {
      icon: '�',
      title: 'Instant Search Across Your Library',
      description: 'Find any piece in seconds. Search by title, composer, arranger, or tags. No more digging through folders.',
    },
    {
      icon: '📁',
      title: 'Smart Organization & Categories',
      description: 'Organize by genre, difficulty, ensemble size, or your own custom tags. Your library, your way.',
    },
    {
      icon: '🎵',
      title: 'Digital Sheet Music Access',
      description: 'Upload PDFs, assign parts to players, and let everyone access the latest versions instantly.',
    },
    {
      icon: '📊',
      title: 'Track Your Collection',
      description: 'Know exactly what you own, what\'s on loan, and what\'s missing. Never buy duplicates again.',
    },
  ]

  const steps = [
    {
      number: 1,
      title: 'Create Your Library',
      description: 'Sign up and set up your band\'s music library. Takes 2 minutes.',
    },
    {
      number: 2,
      title: 'Add Your Music',
      description: 'Upload PDFs, enter details, or import from spreadsheets.',
    },
    {
      number: 3,
      title: 'Organize & Tag',
      description: 'Categorize pieces, add metadata, assign parts to players.',
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
      a: 'We\'re built with brass bands in mind, but any musical ensemble can use it. Concert bands, wind bands, orchestras, choirs—if you have sheet music to organize, BandSync Library works for you.',
    },
    {
      q: 'How much does it cost?',
      a: 'We offer a generous free tier that covers most bands. Paid plans unlock unlimited storage and advanced features. Check our pricing page for details.',
    },
    {
      q: 'Can members access the library on their phones?',
      a: 'Yes. BandSync Library is fully optimized for mobile. Members can browse, search, and view sheet music on any device.',
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
      a: 'Yes. You can import from spreadsheets (CSV/Excel) or add pieces manually. We\'ll help you migrate your existing catalog painlessly.',
    },
  ]

  return (
    <>
      <Head>
        <title>BandSync Library | Your Band's Music Collection, Organized</title>
        <meta name="description" content="Find any piece in seconds. BandSync Library is the smart music library platform for brass bands and ensembles to organize, search, and share sheet music." />
        <meta name="keywords" content="music library management, sheet music organization, band music catalog, brass band library, digital music library, music collection software" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="BandSync" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="BandSync Library | Your Band's Music Collection, Organized" />
        <meta property="og:description" content="Find any piece in seconds. The smart music library platform for bands and ensembles." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bandsync.co.uk" />
        <meta property="og:image" content="https://bandsync.co.uk/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BandSync Library | Your Band's Music Collection, Organized" />
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

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
        <div className="container-custom flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-bs-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">♪</span>
            </div>
            <span className="font-bold text-lg text-bs-black">BandSync Library</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://library.bandsync.co.uk" className="text-bs-black hover:text-bs-blue font-medium transition">
              Sign In
            </a>
            <a href="https://library.bandsync.co.uk" className="btn-primary">
              Get Started Free
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-bs-black">
                Find Any Piece{' '}
                <span className="gradient-text">in Seconds</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Stop digging through boxes and folders. BandSync Library is the smart music catalog that organizes your band's entire collection, making every piece searchable and accessible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://library.bandsync.co.uk" className="btn-primary text-center">
                  Start Your Free Library
                </a>
                <button className="btn-secondary text-center">
                  Watch Demo (2 min)
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-6">
                ✓ No credit card required · ✓ Free for up to 500 pieces · ✓ Set up in 5 minutes
              </p>
            </div>
            <div className="animate-slide-up">
              <div className="bg-gray-200 aspect-video rounded-2xl flex items-center justify-center border-4 border-bs-blue border-dashed">
                <div className="text-center">
                  <div className="text-6xl mb-4">�</div>
                  <p className="text-gray-600 font-medium">Library Dashboard</p>
                  <p className="text-sm text-gray-500 mt-2">(Coming soon)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16 text-bs-black">
            Sound Familiar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-xl border-2 border-red-200">
              <div className="text-5xl mb-4">�</div>
              <h3 className="text-xl font-bold text-bs-black mb-4">Boxes Everywhere</h3>
              <p className="text-gray-700">
                Stacks of music in filing cabinets, cupboards, and under the stage. Nobody knows what you actually own or where anything is.
              </p>
            </div>
            <div className="bg-yellow-50 p-8 rounded-xl border-2 border-yellow-200">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-bs-black mb-4">The Endless Search</h3>
              <p className="text-gray-700">
                "Has anyone seen the Floral Dance parts?" Hours wasted hunting for music before every concert. Missing parts discovered at rehearsal.
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-xl border-2 border-orange-200">
              <div className="text-5xl mb-4">💸</div>
              <h3 className="text-xl font-bold text-bs-black mb-4">Buying Duplicates</h3>
              <p className="text-gray-700">
                Re-ordering music you already own because nobody remembers the catalog. Wasted money on pieces gathering dust in the wrong folder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-r from-bs-blue to-bs-blue-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Here's What Changes
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">✅</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Your Entire Collection, Searchable</h3>
                    <p className="text-blue-100">
                      Every piece cataloged and indexed. Search by title, composer, arranger, or any tag you create. Results in seconds.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">✅</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Know Exactly What You Own</h3>
                    <p className="text-blue-100">
                      Complete inventory at your fingertips. Track conditions, locations, and loan status. Never buy duplicates again.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">✅</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Digital Access for Everyone</h3>
                    <p className="text-blue-100">
                      Upload PDFs and share with the band. Members access sheet music from any device, anytime.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">✅</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Concert Programming Made Easy</h3>
                    <p className="text-blue-100">
                      Filter by duration, difficulty, or genre. Build the perfect program in minutes, not hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white bg-opacity-20 aspect-video rounded-2xl flex items-center justify-center border-4 border-white border-dashed">
                <div className="text-center">
                  <div className="text-6xl mb-4">�</div>
                  <p className="text-white font-medium">Search Interface Demo</p>
                  <p className="text-sm text-blue-100 mt-2">(Placeholder for screenshot)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16 text-bs-black">
            Everything Your Library Needs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-bs-black mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-blue-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16 text-bs-black">
            Set Up Your Library in 4 Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-bs-blue text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-bs-black mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4 text-bs-black">
            Loved by Librarians Across the UK
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            See what bands are saying about BandSync Library
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-blue-50 p-8 rounded-xl border-2 border-bs-blue">
                <div className="flex items-center mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-bold text-bs-black">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Banner */}
      <section className="py-16 bg-gradient-to-r from-bs-blue to-bs-blue-dark">
        <div className="container-custom text-center">
          <p className="text-white text-lg mb-6">Trusted by bands across the UK to organize their music</p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <div className="text-white text-center">
              <p className="text-3xl font-bold">10,000+</p>
              <p className="text-blue-100">Pieces Cataloged</p>
            </div>
            <div className="hidden md:block text-white opacity-30">→</div>
            <div className="text-white text-center">
              <p className="text-3xl font-bold">50+</p>
              <p className="text-blue-100">Libraries Active</p>
            </div>
            <div className="hidden md:block text-white opacity-30">→</div>
            <div className="text-white text-center">
              <p className="text-3xl font-bold">100s</p>
              <p className="text-blue-100">Hours Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16 text-bs-black">
            Got Questions?
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <h3 className="font-bold text-bs-black text-lg">{faq.q}</h3>
                  <span className={`text-2xl text-bs-blue transition-transform ${activeAccordion === idx ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {activeAccordion === idx && (
                  <div className="px-8 py-6 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bs-blue to-bs-blue-dark">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Organize Your Music?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join 50+ bands that have finally tamed their music collection. Find any piece in seconds. No credit card required.
          </p>
          <a
            href="https://library.bandsync.co.uk"
            className="inline-block bg-white text-bs-blue font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Free Library
          </a>
          <p className="text-blue-100 mt-6 text-sm">
            Set up in 5 minutes. Free for up to 500 pieces. No hidden fees.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bs-black text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-bs-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">♪</span>
                </div>
                <span className="font-bold text-lg">BandSync Library</span>
              </div>
              <p className="text-gray-400 text-sm">
                The music library platform built by musicians, for musicians.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#security" className="hover:text-white transition">Security</a></li>
                <li><a href="https://library.bandsync.co.uk" className="hover:text-white transition">Sign In</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                <li><a href="#careers" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#terms" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#privacy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#cookies" className="hover:text-white transition">Cookie Policy</a></li>
                <li><a href="#gdpr" className="hover:text-white transition">GDPR</a></li>
              </ul>
            </div>
          </div>

          {/* Popular SEO Keywords Footer Links */}
          <div className="bg-bs-blue bg-opacity-20 p-6 rounded-lg mb-8">
            <p className="text-gray-400 text-xs mb-3 font-semibold uppercase">Popular Searches</p>
            <div className="flex flex-wrap gap-3 text-xs">
              <a href="#" className="text-gray-300 hover:text-white transition">Music Library Software</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-300 hover:text-white transition">Sheet Music Organization</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-300 hover:text-white transition">Band Music Catalog</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-300 hover:text-white transition">Digital Music Library</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-300 hover:text-white transition">Brass Band Library</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-300 hover:text-white transition">Music Collection Management</a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
              <p>&copy; 2026 BandSync Library. All rights reserved. Built with ♪ for musicians.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#facebook" className="hover:text-white transition">Facebook</a>
                <a href="#twitter" className="hover:text-white transition">Twitter</a>
                <a href="#instagram" className="hover:text-white transition">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
