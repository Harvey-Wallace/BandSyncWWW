import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Layout
      title="Page Not Found | BandSync Library"
      description="The page you're looking for doesn't exist."
    >
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-blue-50 min-h-screen flex items-center">
        <div className="container-custom text-center">
          <div className="text-8xl mb-6">🎺</div>
          <h1 className="text-6xl font-bold mb-4 text-bs-black">404</h1>
          <h2 className="text-2xl font-bold mb-6 text-gray-700">
            This page hit a <span className="gradient-text">wrong note</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to the music.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Back to Homepage
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Support
            </Link>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-200 max-w-2xl mx-auto">
            <p className="text-gray-500 mb-4">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/features" className="text-bs-blue hover:underline">Features</Link>
              <Link href="/pricing" className="text-bs-blue hover:underline">Pricing</Link>
              <Link href="/about" className="text-bs-blue hover:underline">About</Link>
              <Link href="/contact" className="text-bs-blue hover:underline">Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
