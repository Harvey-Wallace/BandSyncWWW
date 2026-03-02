import Layout from '@/components/Layout'
import Link from 'next/link'

export default function About() {
  return (
    <Layout
      title="About | BandSync Library"
      description="Learn about BandSync Library - built by Harvey-Wallace to help brass bands and ensembles organize their music collections."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-bs-black">
              Built by Musicians, <span className="gradient-text">for Musicians</span>
            </h1>
            <p className="text-xl text-gray-700">
              BandSync Library was born from a simple frustration: why is it so hard to 
              find that piece of music you know you have somewhere?
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-bs-black">Our Story</h2>
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p>
                Every brass band has the same problem. Boxes of music in cupboards. 
                Filing cabinets that haven't been organized since 1987. A spreadsheet 
                that's somehow both incomplete and out of date.
              </p>
              <p>
                When it comes to programming a concert or finding a specific piece, 
                the librarian ends up on a treasure hunt. "I'm sure we have Floral Dance 
                somewhere..." And don't even mention trying to work out which parts are missing.
              </p>
              <p>
                <strong>We built BandSync Library to solve this problem once and for all.</strong>
              </p>
              <p>
                A proper digital catalog where you can find any piece in seconds. 
                Upload your PDFs so everyone can access the latest version. 
                Track what you own, what's on loan, and what you might want to buy.
              </p>
              <p>
                It's not complicated. It doesn't try to do everything. 
                It just does one thing really well: organize your band's music library.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Harvey-Wallace Section */}
      <section className="py-20 bg-blue-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-bs-gold rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-bs-black font-bold text-2xl">HW</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-bs-black">
              A Harvey-Wallace Product
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              BandSync Library is built and maintained by 
              <a 
                href="https://harvey-wallace.co.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-bs-blue hover:underline mx-1"
              >
                Harvey-Wallace
              </a>
              — building software that solves real problems for real people.
            </p>
            <a 
              href="https://harvey-wallace.co.uk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary inline-block"
            >
              Visit Harvey-Wallace
            </a>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-bs-black">
            What We Believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-bs-black mb-3">Simple Over Complex</h3>
              <p className="text-gray-600">
                We don't try to do everything. We do one thing really well. 
                No feature bloat, just the tools you actually need.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-bs-black mb-3">Fair & Transparent</h3>
              <p className="text-gray-600">
                Simple pricing, no hidden fees, no tricks. 
                Your data is yours - export it anytime, cancel anytime.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🇬🇧</div>
              <h3 className="text-xl font-bold text-bs-black mb-3">UK-Based</h3>
              <p className="text-gray-600">
                Built in the UK, hosted in the UK, supported by people who 
                understand UK brass bands. GDPR compliant, of course.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-bs-blue to-bs-blue-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <p className="text-blue-100">Bands Using BandSync Library</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">10,000+</div>
              <p className="text-blue-100">Pieces Cataloged</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">100s</div>
              <p className="text-blue-100">Hours Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-bs-black">
            Ready to organize your library?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-xl mx-auto">
            Join the growing number of bands who've finally got their music sorted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://library.bandsync.co.uk" className="btn-primary">
              Start Your Free Trial
            </a>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
