import Head from 'next/head'
import React from 'react'
import { SiteFooter, SiteHeader } from './SiteChrome'

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
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="BandSync" />
        <link rel="canonical" href="https://bandsync.co.uk" />
      </Head>

      <SiteHeader />

      {/* Main Content */}
      <main>
        {children}
      </main>

      <SiteFooter />
    </>
  )
}
