import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Features() {
  const featureCategories = [
    {
      title: 'Catalog Your Collection',
      icon: '📚',
      description: 'Build a complete digital catalog of your entire music library',
      features: [
        {
          name: 'Unlimited Pieces',
          description: 'Add as many pieces as you need. Concert marches, test pieces, hymn tunes - catalog them all.',
        },
        {
          name: 'Rich Metadata',
          description: 'Store composer, arranger, publisher, duration, difficulty, and more for every piece.',
        },
        {
          name: 'Custom Tags',
          description: 'Create your own tags and categories. Organize by genre, occasion, or however works best for you.',
        },
        {
          name: 'Bulk Import',
          description: 'Already have a spreadsheet? Import your entire catalog in minutes, not hours.',
        },
      ],
    },
    {
      title: 'Find Anything Instantly',
      icon: '🔍',
      description: 'Powerful search that actually works',
      features: [
        {
          name: 'Full-Text Search',
          description: 'Search by title, composer, arranger, or any field. Find what you need in seconds.',
        },
        {
          name: 'Advanced Filters',
          description: 'Filter by difficulty, duration, genre, or any combination. Perfect for programming concerts.',
        },
        {
          name: 'Smart Suggestions',
          description: 'Get intelligent suggestions based on what you\'re looking for.',
        },
        {
          name: 'Recent & Favorites',
          description: 'Quick access to recently viewed pieces and your marked favorites.',
        },
      ],
    },
    {
      title: 'Digital Sheet Music',
      icon: '🎵',
      description: 'Upload, store, and share PDFs with your band',
      features: [
        {
          name: 'PDF Uploads',
          description: 'Upload scanned sheet music or digital PDFs. Keep everything in one place.',
        },
        {
          name: 'Part Assignment',
          description: 'Assign specific parts to players. Cornet 1 sees cornet parts, etc.',
        },
        {
          name: 'Version Control',
          description: 'Upload new versions without losing the old ones. Always know which is current.',
        },
        {
          name: 'Mobile Access',
          description: 'Band members can view sheet music on any device - phone, tablet, or computer.',
        },
      ],
    },
    {
      title: 'Track & Manage',
      icon: '📊',
      description: 'Know exactly what you have and where it is',
      features: [
        {
          name: 'Inventory Tracking',
          description: 'Know what physical copies you own, their condition, and their location.',
        },
        {
          name: 'Loan Management',
          description: 'Track what\'s been loaned out and to whom. Never lose track of borrowed music.',
        },
        {
          name: 'Usage History',
          description: 'See when pieces were last performed. Great for planning varied programs.',
        },
        {
          name: 'Notes & Comments',
          description: 'Add performance notes, program notes, or any other information you need.',
        },
      ],
    },
    {
      title: 'Collaborate',
      icon: '👥',
      description: 'Work together with your whole band',
      features: [
        {
          name: 'Multi-User Access',
          description: 'Add your MD, librarian, secretary, and players. Everyone gets the access they need.',
        },
        {
          name: 'Role Permissions',
          description: 'Control who can edit, who can view, and who can manage the library.',
        },
        {
          name: 'Shared Workspace',
          description: 'Everyone works from the same up-to-date catalog. No more outdated lists.',
        },
        {
          name: 'Activity Log',
          description: 'See who added, edited, or accessed pieces. Full transparency for your committee.',
        },
      ],
    },
    {
      title: 'Export & Backup',
      icon: '💾',
      description: 'Your data is yours - always',
      features: [
        {
          name: 'Full Export',
          description: 'Export your entire catalog to CSV or Excel at any time. Your data belongs to you.',
        },
        {
          name: 'Automatic Backups',
          description: 'Your library is backed up daily. We keep your data safe.',
        },
        {
          name: 'Print Lists',
          description: 'Generate printable lists for AGMs, committee meetings, or concert programs.',
        },
        {
          name: 'No Lock-In',
          description: 'Cancel anytime and take your data with you. We make it easy, not hard.',
        },
      ],
    },
  ]

  return (
    <Layout
      title="Features | BandSync Library"
      description="Discover all the features of BandSync Library - catalog management, instant search, digital sheet music, collaboration tools and more."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6 text-bs-black">
            Everything Your <span className="gradient-text">Library Needs</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Built specifically for brass bands and ensembles. Powerful enough for professional orchestras, 
            simple enough for community bands.
          </p>
          <a href="https://library.bandsync.co.uk" className="btn-primary">
            Start Your Free Trial
          </a>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {featureCategories.map((category, idx) => (
              <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h2 className="text-3xl font-bold text-bs-black mb-4">{category.title}</h2>
                  <p className="text-xl text-gray-600 mb-8">{category.description}</p>
                  <div className="space-y-4">
                    {category.features.map((feature, fidx) => (
                      <div key={fidx} className="flex gap-3">
                        <svg className="w-6 h-6 text-bs-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <h4 className="font-bold text-bs-black">{feature.name}</h4>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`bg-gray-100 aspect-video rounded-2xl flex items-center justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-center">
                    <div className="text-6xl mb-4">{category.icon}</div>
                    <p className="text-gray-500 font-medium">Screenshot Coming Soon</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-blue-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-bs-black">
            Why Choose BandSync Library?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-bs-black mb-3">Built for Bands</h3>
              <p className="text-gray-600">
                Unlike generic inventory software, we understand brass bands. 
                Fields for arranger, parts, difficulty - everything you actually need.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">🇬🇧</div>
              <h3 className="text-xl font-bold text-bs-black mb-3">UK-Based</h3>
              <p className="text-gray-600">
                Built in the UK, for UK bands. Your data stays in the UK. 
                Support from people who understand brass banding.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-bs-black mb-3">Fair Pricing</h3>
              <p className="text-gray-600">
                One simple price covers your whole band. No per-user fees, 
                no hidden charges. Just £9.99/month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-bs-blue to-bs-blue-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to organize your music library?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Start your 30-day free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://library.bandsync.co.uk"
              className="inline-block bg-white text-bs-blue font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Free Trial
            </a>
            <Link
              href="/pricing"
              className="inline-block bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-white hover:text-bs-blue transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
