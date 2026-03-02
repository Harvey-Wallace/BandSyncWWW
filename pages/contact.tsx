import Layout from '@/components/Layout'
import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    band: '',
    subject: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to an API endpoint
    // For now, we'll just show a success message and open mailto
    const mailtoLink = `mailto:hello@bandsync.co.uk?subject=${encodeURIComponent(
      `[${formData.subject}] ${formData.name} - ${formData.band}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nBand: ${formData.band}\n\n${formData.message}`
    )}`
    window.location.href = mailtoLink
    setSubmitted(true)
  }

  return (
    <Layout
      title="Contact | BandSync Library"
      description="Get in touch with the BandSync Library team. We're here to help with questions about features, pricing, or anything else."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6 text-bs-black">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Got a question? We'd love to hear from you. Send us a message and we'll 
            respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-bs-black mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-bs-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-bs-black">General Enquiries</h3>
                    <a href="mailto:hello@bandsync.co.uk" className="text-bs-blue hover:underline">
                      hello@bandsync.co.uk
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      For questions about BandSync Library, pricing, or partnerships.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-bs-black">Technical Support</h3>
                    <a href="mailto:support@bandsync.co.uk" className="text-bs-blue hover:underline">
                      support@bandsync.co.uk
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      For help with your account, technical issues, or feature requests.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-bs-gold bg-opacity-30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-bs-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-bs-black">Harvey-Wallace</h3>
                    <a href="https://harvey-wallace.co.uk" target="_blank" rel="noopener noreferrer" className="text-bs-blue hover:underline">
                      harvey-wallace.co.uk
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      BandSync Library is a Harvey-Wallace product.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-bold text-bs-black mb-3">Typical Response Times</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    General enquiries: Within 24 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Technical support: Within 4 hours (business hours)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Urgent issues: Same day
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-bs-black mb-6">Send us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4">✉️</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Ready!</h3>
                  <p className="text-green-700">
                    Your email app should have opened with your message. 
                    If not, please email us directly at{' '}
                    <a href="mailto:hello@bandsync.co.uk" className="underline">
                      hello@bandsync.co.uk
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-bs-black mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-bs-blue focus:outline-none transition"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-bs-black mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-bs-blue focus:outline-none transition"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="band" className="block text-sm font-medium text-bs-black mb-2">
                      Band / Organization
                    </label>
                    <input
                      type="text"
                      id="band"
                      value={formData.band}
                      onChange={(e) => setFormData({...formData, band: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-bs-blue focus:outline-none transition"
                      placeholder="City Brass Band"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-bs-black mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-bs-blue focus:outline-none transition"
                    >
                      <option value="general">General Enquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="pricing">Pricing Question</option>
                      <option value="demo">Request a Demo</option>
                      <option value="feature">Feature Request</option>
                      <option value="charity">Charity/Youth Band Discount</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-bs-black mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-bs-blue focus:outline-none transition resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-bs-black mb-4">
            Looking for quick answers?
          </h2>
          <p className="text-gray-600 mb-6">
            Check our FAQ section for answers to common questions.
          </p>
          <a href="/#faq" className="btn-secondary">
            View FAQs
          </a>
        </div>
      </section>
    </Layout>
  )
}
