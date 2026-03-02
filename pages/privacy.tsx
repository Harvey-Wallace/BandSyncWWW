import Layout from '@/components/Layout'

export default function Privacy() {
  return (
    <Layout
      title="Privacy Policy | BandSync Library"
      description="BandSync Library Privacy Policy - how we collect, use, and protect your data."
    >
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-bs-black">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: 2 March 2026</p>

            <div className="prose prose-lg text-gray-700 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-bs-black mb-4">1. Introduction</h2>
                <p>
                  BandSync Library ("we", "our", "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, and safeguard your information 
                  when you use our music library management platform.
                </p>
                <p>
                  BandSync Library is a product of Harvey-Wallace. We are based in the United Kingdom 
                  and comply with UK GDPR and data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-bs-black mb-4">2. Information We Collect</h2>
                <p>We collect information you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account information (name, email address, band/organization name)</li>
                  <li>Music catalog data (piece titles, composers, arrangers, metadata)</li>
                  <li>Uploaded files (PDF sheet music, documents)</li>
                  <li>Usage data (how you interact with our platform)</li>
                  <li>Payment information (processed securely by our payment provider)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-bs-black mb-4">3. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and maintain the BandSync Library service</li>
                  <li>Process your subscription and payments</li>
                  <li>Send you service-related communications</li>
                  <li>Respond to your requests and support inquiries</li>
                  <li>Improve and develop our platform</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-bs-black mb-4">4. Data Storage & Security</h2>
                <p>
                  Your data is stored securely on servers located in the United Kingdom. 
                  We implement industry-standard security measures including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption in transit (HTTPS/TLS)</li>
                  <li>Encryption at rest</li>
                  <li>Regular security audits</li>
                  <li>Access controls and authentication</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-bs-black mb-4">5. Data Sharing</h2>
                <p>
                  We do not sell your personal data. We may share data with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers who assist in operating our platform (hosting, payment processing)</li>
                  <li>Legal authorities when required by law</li>
                  <li>Other users in your band/organization (only data you choose to share)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-bs-black mb-4">6. Your Rights</h2>
                <p>Under UK GDPR, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Export your data in a portable format</li>
                  <li>Object to processing of your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at{' '}
                  <a href="mailto:hello@bandsync.co.uk" className="text-bs-blue hover:underline">
                    hello@bandsync.co.uk
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-bs-black mb-4">7. Data Retention</h2>
                <p>
                  We retain your data for as long as your account is active. If you cancel your 
                  subscription, we retain your data for up to 2 years in case you decide to return. 
                  You can request immediate deletion at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-bs-black mb-4">8. Cookies</h2>
                <p>
                  We use essential cookies to provide our service. We do not use tracking or 
                  advertising cookies. Essential cookies are necessary for the platform to function 
                  and cannot be disabled.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-bs-black mb-4">9. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  significant changes by email or through the platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-bs-black mb-4">10. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our data practices, please contact:
                </p>
                <p className="mt-4">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:hello@bandsync.co.uk" className="text-bs-blue hover:underline">
                    hello@bandsync.co.uk
                  </a>
                </p>
                <p className="mt-2">
                  <strong>Website:</strong>{' '}
                  <a href="https://harvey-wallace.co.uk" target="_blank" rel="noopener noreferrer" className="text-bs-blue hover:underline">
                    harvey-wallace.co.uk
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
