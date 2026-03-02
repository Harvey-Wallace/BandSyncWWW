import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Pricing() {
  const features = {
    free: [
      'Up to 100 pieces in your catalog',
      'Basic search functionality',
      'Single user account',
      'PDF uploads (up to 10MB each)',
      'Basic metadata fields',
      'Email support',
    ],
    pro: [
      'Unlimited pieces in your catalog',
      'Advanced search & filters',
      'Up to 50 band members',
      'PDF uploads (up to 100MB each)',
      'Custom tags & categories',
      'Bulk import from spreadsheets',
      'Part assignment to players',
      'Usage history & analytics',
      'Priority email support',
      'Export your entire library',
    ],
  }

  return (
    <Layout
      title="Pricing | BandSync Library"
      description="Simple, transparent pricing for BandSync Library. Start with a 30-day free trial, then just £9.99/month or £99/year."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6 text-bs-black">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Start free. No credit card required. Upgrade when you're ready.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Free Trial Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-bs-black mb-2">Free Trial</h3>
                <p className="text-gray-600">Perfect for getting started</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-bs-black">£0</div>
                <p className="text-gray-600 mt-2">for 30 days</p>
              </div>

              <ul className="space-y-4 mb-8">
                {features.free.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://library.bandsync.co.uk"
                className="block w-full text-center btn-secondary"
              >
                Start Free Trial
              </a>
            </div>

            {/* Pro Card */}
            <div className="bg-gradient-to-br from-bs-blue to-bs-blue-dark rounded-2xl shadow-xl p-8 border-2 border-bs-blue relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-bs-gold text-bs-black text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                <p className="text-blue-100">For serious bands & ensembles</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-white">£9.99</div>
                <p className="text-blue-100 mt-2">per month</p>
                <div className="mt-4 bg-white bg-opacity-20 rounded-lg px-4 py-2 inline-block">
                  <span className="text-white font-medium">or £99/year</span>
                  <span className="text-bs-gold ml-2 text-sm">(Save £20!)</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {features.pro.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-bs-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://library.bandsync.co.uk"
                className="block w-full text-center bg-white text-bs-blue font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Start 30-Day Free Trial
              </a>
              <p className="text-center text-blue-100 text-sm mt-4">
                No credit card required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-bs-black">
            Pricing Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-bs-black mb-2">What happens after my free trial?</h3>
              <p className="text-gray-700">
                After 30 days, your trial will end. You can upgrade to Pro to keep all your data, 
                or your account will be limited to the free tier features. We'll never delete your data.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-bs-black mb-2">Can I change plans later?</h3>
              <p className="text-gray-700">
                Absolutely! You can upgrade, downgrade, or cancel at any time. 
                If you switch from monthly to yearly, we'll prorate the difference.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-bs-black mb-2">Is there a discount for yearly billing?</h3>
              <p className="text-gray-700">
                Yes! Pay yearly at £99 and save £20 compared to monthly billing (£119.88/year).
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-bs-black mb-2">Do you offer discounts for charities or youth bands?</h3>
              <p className="text-gray-700">
                We offer special pricing for registered charities, youth bands, and educational institutions. 
                <Link href="/contact" className="text-bs-blue hover:underline ml-1">Contact us</Link> to discuss your needs.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-bs-black mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-700">
                We accept all major credit and debit cards through our secure payment provider. 
                For yearly subscriptions, we can also arrange bank transfer.
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
          <a
            href="https://library.bandsync.co.uk"
            className="inline-block bg-white text-bs-blue font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Free Trial
          </a>
        </div>
      </section>
    </Layout>
  )
}
