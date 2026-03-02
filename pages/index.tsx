import Head from 'next/head'
import React, { useState } from 'react'

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  const testimonials = [
    {
      author: 'Sarah Thompson',
      role: 'MD, City of Birmingham Brass Band',
      content: 'BandSync has transformed how we manage rehearsals. No more WhatsApp chaos, no more missed messages. Everyone knows exactly what time we\'re playing and what to bring.',
    },
    {
      author: 'James Wilson',
      role: 'Band Member',
      content: 'The availability tracking is a game-changer. Instead of sending 30 messages to check who\'s free, the MD just gets instant clarity. It\'s saved us hours.',
    },
    {
      author: 'Lisa Chen',
      role: 'Librarian',
      content: 'Managing sheet music used to be nightmare. Now searching for a piece takes seconds and everyone has access to the latest versions instantly.',
    },
  ]

  const features = [
    {
      icon: '📋',
      title: 'Plan Rehearsals & Gigs in Seconds',
      description: 'Create events, set dates, add details. No complexity. Your band is ready to go.',
    },
    {
      icon: '✋',
      title: 'See Who\'s Coming Instantly',
      description: 'Availability tracking that actually works. No WhatsApp threads. No guessing. Just clarity.',
    },
    {
      icon: '🎵',
      title: 'Find Sheet Music in 10 Seconds',
      description: 'Searchable music library organized and ready. No more digging through folders.',
    },
    {
      icon: '🔔',
      title: 'Reminders That Actually Work',
      description: 'Automated reminders ensure no one forgets rehearsal. Less stress for you, better attendance for the band.',
    },
  ]

  const steps = [
    {
      number: 1,
      title: 'Create Your Band',
      description: 'Sign up and set your band name. Takes 2 minutes.',
    },
    {
      number: 2,
      title: 'Invite Your Members',
      description: 'Send links to band members. They sign up with one click.',
    },
    {
      number: 3,
      title: 'Schedule & Organize',
      description: 'Create rehearsals and gigs. Members RSVP instantly.',
    },
    {
      number: 4,
      title: 'Stay Organized',
      description: 'Manage music, track attendance, send reminders. All in one place.',
    },
  ]

  const faqs = [
    {
      q: 'Is BandSync just for brass bands?',
      a: 'We\'re built specifically for brass bands, but any ensemble can use it. Concert bands, wind bands, orchestras—if you need to manage availability and share music, BandSync works for you.',
    },
    {
      q: 'How much does it cost?',
      a: 'We offer a generous free tier that covers most bands. Paid plans unlock unlimited storage and advanced features. Check our pricing page for details.',
    },
    {
      q: 'Can members access BandSync on their phones?',
      a: 'Yes. BandSync is fully optimized for mobile. Members can RSVP, check rehearsal details, and access music on iOS and Android.',
    },
    {
      q: 'What if band members don\'t want another app?',
      a: 'Smart invitations arrive via email or SMS. Members don\'t need to download anything. They respond directly from their email or SMS, and their response syncs to your dashboard.',
    },
    {
      q: 'Is our music library secure?',
      a: 'Absolutely. Only your band members can access your library. We use enterprise-grade encryption and security. Your music stays yours.',
    },
    {
      q: 'Can I export my data?',
      a: 'Yes. You can export attendance records, event details, and your entire music library anytime. Your data is yours.',
    },
  ]

  return (
    <>
      <Head>
        <title>BandSync | Stop Chasing Your Band for Availability</title>
        <meta name="description" content="Know your band's lineup in 10 seconds. BandSync is the all-in-one platform for brass bands to manage rehearsals, track availability, and organize sheet music." />
        <meta name="keywords" content="brass band management, band availability tracker, music library management, band scheduling, UK brass bands, band organization" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="BandSync" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="BandSync | Stop Chasing Your Band for Availability" />
        <meta property="og:description" content="Know your band's lineup in 10 seconds. The all-in-one platform for brass bands." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bandsync.co.uk" />
        <meta property="og:image" content="https://bandsync.co.uk/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BandSync | Stop Chasing Your Band for Availability" />
        <meta name="twitter:description" content="Know your band's lineup in 10 seconds. The all-in-one platform for brass bands." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://bandsync.co.uk" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'BandSync',
              description: 'Band management platform for brass bands',
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
            <span className="font-bold text-lg text-bs-black">BandSync</span>
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
                Know Your{' '}
                <span className="gradient-text">Lineup in 10 Seconds</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Stop chasing your band for availability. Stop guessing who's turning up. BandSync is the all-in-one platform that replaces WhatsApp chaos, spreadsheets, and last-minute panic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://library.bandsync.co.uk" className="btn-primary text-center">
                  Start Your Free Trial Now
                </a>
                <button className="btn-secondary text-center">
                  Watch Demo (2 min)
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-6">
                ✓ No credit card required · ✓ Free for up to 30 members · ✓ Set up in 2 minutes
              </p>
            </div>
            <div className="animate-slide-up">
              <div className="bg-gray-200 aspect-video rounded-2xl flex items-center justify-center border-4 border-bs-blue border-dashed">
                <div className="text-center">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-gray-600 font-medium">Dashboard Screenshot</p>
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
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-bs-black mb-4">WhatsApp Chaos</h3>
              <p className="text-gray-700">
                Messages flying everywhere. Replies buried. The same question asked 10 times. Half your band doesn't see important updates.
              </p>
            </div>
            <div className="bg-yellow-50 p-8 rounded-xl border-2 border-yellow-200">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-bs-black mb-4">Spreadsheet Nightmare</h3>
              <p className="text-gray-700">
                Outdated info. Manual updates. Nobody trusts the data. You spend hours just managing the spreadsheet.
              </p>
            </div>
            <div className="bg-orange-50 p-8 rounded-xl border-2 border-orange-200">
              <div className="text-5xl mb-4">😰</div>
              <h3 className="text-xl font-bold text-bs-black mb-4">Last-Minute Panic</h3>
              <p className="text-gray-700">
                Rehearsal starts in 30 mins. You still don't know who's coming. Missing parts? Unsure lineup? Stress every rehearsal.
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
                    <h3 className="text-xl font-bold text-white mb-2">One Simple Dashboard</h3>
                    <p className="text-blue-100">
                      All band info in one place. No hunting through messages. Everything your band needs is right there.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">✅</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Instant Clarity on Availability</h3>
                    <p className="text-blue-100">
                      One click to see who's coming. No more guessing, no delays, no chaos. You get clarity in seconds.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">✅</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Music Library That Works</h3>
                    <p className="text-blue-100">
                      Every piece, organized and searchable. Members find sheet music in seconds, not minutes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">✅</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Reminders That Stick</h3>
                    <p className="text-blue-100">
                      Automated reminders reach everyone. Less stress for you. Better attendance for your band.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white bg-opacity-20 aspect-video rounded-2xl flex items-center justify-center border-4 border-white border-dashed">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎺</div>
                  <p className="text-white font-medium">App Interface Demo</p>
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
            Everything Your Band Needs
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
            Get Started in 4 Steps
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
              Create Your Band Now
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-4 text-bs-black">
            Loved by Brass Bands Across the UK
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            See what bands are saying about BandSync
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
          <p className="text-white text-lg mb-6">Trusted by leading brass bands across the UK</p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                <div className="text-center text-xs font-bold text-bs-blue">CBBB Logo</div>
              </div>
              <p className="text-white text-sm font-medium">City of Birmingham<br/>Brass Band</p>
            </div>
            <div className="hidden md:block text-white opacity-30">→</div>
            <div className="text-white text-center">
              <p className="text-3xl font-bold">50+</p>
              <p className="text-blue-100">Bands Active</p>
            </div>
            <div className="hidden md:block text-white opacity-30">→</div>
            <div className="text-white text-center">
              <p className="text-3xl font-bold">1000+</p>
              <p className="text-blue-100">Members</p>
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
            Ready to Transform Your Band?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join 50+ brass bands that have already ditched WhatsApp chaos. Know your lineup in 10 seconds. No credit card required.
          </p>
          <a
            href="https://library.bandsync.co.uk"
            className="inline-block bg-white text-bs-blue font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-colors"
          >
            Get Started Free Today
          </a>
          <p className="text-blue-100 mt-6 text-sm">
            Set up in 2 minutes. Free for up to 30 members. No hidden fees.
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
                <span className="font-bold text-lg">BandSync</span>
              </div>
              <p className="text-gray-400 text-sm">
                The band management platform built by musicians, for musicians.
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
              <a href="#" className="text-gray-300 hover:text-white transition">Brass Band Management Software</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-300 hover:text-white transition">Band Availability Tracker</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-300 hover:text-white transition">Music Library Management</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-300 hover:text-white transition">UK Brass Bands</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-300 hover:text-white transition">Band Scheduling App</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-300 hover:text-white transition">Ensemble Management Platform</a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
              <p>&copy; 2024 BandSync. All rights reserved. Built with ♪ for musicians.</p>
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
