import Head from 'next/head'
import { useState } from 'react'
import {
  ArrowRight, BarChart3, Check, ChevronDown, FileSpreadsheet, FolderLock,
  Library, Music2, QrCode, Search, ShieldCheck, Smartphone, Users,
} from 'lucide-react'
import { APP_URL, SiteFooter, SiteHeader } from '@/components/SiteChrome'


const features = [
  { icon: Search, number: '01', title: 'Find it before the count-in', copy: 'Search by title, composer, arranger, genre, difficulty or any custom field. Your whole catalogue, answered in seconds.' },
  { icon: FileSpreadsheet, number: '02', title: 'Bring your spreadsheet', copy: 'Import your existing Excel catalogue instead of starting again. Add pieces individually or move hundreds in one go.' },
  { icon: Music2, number: '03', title: 'Every part accounted for', copy: 'Track missing parts, allocate PDFs to players and split larger files. Know what is complete before rehearsal starts.' },
  { icon: QrCode, number: '04', title: 'From shelf to screen', copy: 'Generate library numbers, cover sheets and barcodes. Scan a piece on mobile to open its record instantly.' },
  { icon: Users, number: '05', title: 'Built for the whole band', copy: 'Give admins, members and viewers the access they need. Everyone works from the same up-to-date library.' },
  { icon: BarChart3, number: '06', title: 'Loans without loose ends', copy: 'Track check-outs, locations, condition and history. See what is out, who has it and what needs attention.' },
]

const faqs = [
  { q: 'Is BandSync only for brass bands?', a: 'It is shaped by real banding workflows, but concert bands, wind bands, orchestras, choirs and other ensembles can configure their own instrumentation, categories and custom fields.' },
  { q: 'Can I import our current catalogue?', a: 'Yes. Import your existing Excel spreadsheet, add pieces manually, and keep building from there. You do not need to retype your whole library.' },
  { q: 'Can members use it on their phones?', a: 'Yes. BandSync works on the web and iOS. The Android app is in closed testing while we prepare its public Google Play release.' },
  { q: 'How is our library protected?', a: 'BandSync uses organisation-based access, role permissions, secure authentication, private cloud storage and watermarked downloads. Members only see the libraries they are authorised to access.' },
  { q: 'Can we upload copyrighted sheet music?', a: 'Only upload or share material your organisation is legally entitled to reproduce and use. Owning a printed copy does not always include permission to scan or distribute it. Your publisher, licence provider or legal adviser can confirm the permissions that apply to your band.' },
  { q: 'What happens after the free plan?', a: 'Start with up to 500 catalogue entries and no credit card. If your library grows or you need more capacity, you can choose the plan that fits your organisation.' },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Head>
        <title>BandSync Library — Your band&apos;s music, finally in order</title>
        <meta name="description" content="Catalogue, search, track and securely access your band's sheet music from anywhere. Free for libraries with up to 500 pieces." />
        <link rel="canonical" href="https://bandsync.co.uk" />
        <meta property="og:title" content="BandSync Library — Your band's music, finally in order" />
        <meta property="og:description" content="A searchable, secure music library built for the banding community." />
        <meta property="og:url" content="https://bandsync.co.uk" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'BandSync Library',
          applicationCategory: 'BusinessApplication', operatingSystem: 'Web, iOS, Android', url: 'https://bandsync.co.uk',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', description: 'Free for up to 500 pieces' },
        }) }} />
      </Head>

      <SiteHeader overlay />

      <main>
        <section className="hero">
          <div className="hero-glow" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="live-dot" /> Built with the banding community</div>
              <h1>Your band&apos;s music.<br /><span>Finally in order.</span></h1>
              <p className="hero-lead">One secure place to catalogue, search, track and access every piece—so your library works as hard as your band does.</p>
              <div className="hero-actions"><a className="button" href={APP_URL}>Build your free library <ArrowRight /></a><a className="text-link" href="#platform">See how it works <span>↓</span></a></div>
              <div className="assurance"><span><Check /> No credit card</span><span><Check /> Free up to 500 pieces</span><span><Check /> Import from Excel</span></div>
            </div>
            <div className="product-stage" aria-label="BandSync product preview">
              <div className="stage-orbit orbit-one" /><div className="stage-orbit orbit-two" />
              <div className="app-window">
                <div className="app-bar"><div className="app-logo"><Music2 /></div><span>Music Library</span><div className="app-user">RH</div></div>
                <div className="app-body">
                  <div className="app-sidebar"><i /><i /><i /><i /></div>
                  <div className="app-content">
                    <div className="app-heading"><div><small>Good morning</small><strong>Your Library</strong></div><button>+ Add piece</button></div>
                    <div className="search-box"><Search /><span>Search title, composer, arranger…</span><kbd>⌘ K</kbd></div>
                    <div className="stats-row"><div><small>Pieces</small><b>1,842</b><em>+28 this month</em></div><div><small>Complete</small><b>94%</b><em>Library health</em></div><div><small>On loan</small><b>12</b><em>4 due soon</em></div></div>
                    <div className="table-head"><span>Recently updated</span><span>View all →</span></div>
                    {[['The Floral Dance','Katie Moss','Complete'],['Highland Cathedral','Korb & Roever','On loan'],['The Thunderer','J. P. Sousa','Missing 2']].map((row) => <div className="piece-row" key={row[0]}><span className="piece-icon">♫</span><span><b>{row[0]}</b><small>{row[1]}</small></span><em className={row[2].replace(' ','-').toLowerCase()}>{row[2]}</em></div>)}
                  </div>
                </div>
              </div>
              <div className="float-card search-result"><span className="mini-icon"><Search /></span><div><b>Found in 0.04 sec</b><small>Across your whole library</small></div></div>
              <div className="float-card sync-card"><span className="mini-icon gold"><ShieldCheck /></span><div><b>Securely synced</b><small>Available to your members</small></div></div>
            </div>
          </div>
          <div className="shell proof-strip"><p>Already bringing order to band rooms across the UK</p><div><strong>35</strong><span>active libraries</span></div><div><strong>1,800+</strong><span>pieces catalogued</span></div><div><strong>3</strong><span>ways to access</span></div></div>
        </section>

        <section className="problem-section">
          <div className="shell split-heading"><div><span className="section-number">01 / THE PROBLEM</span><h2>The music is valuable.<br />The system around it <em>should be too.</em></h2></div><p>Boxes, spreadsheets and shared drives all work—until somebody needs the right part, right now. BandSync connects the physical library to one living digital record.</p></div>
          <div className="shell workflow"><div className="workflow-old"><span>THE OLD WAY</span><div className="chaos-card rotate-left">Spreadsheet_v7_FINAL.xlsx</div><div className="chaos-card rotate-right">Who has folder 84?</div><div className="chaos-card">Missing: 2nd Horn</div></div><div className="workflow-arrow">→</div><div className="workflow-new"><span>WITH BANDSYNC</span><div className="order-card"><Search /><div><b>One search</b><small>Every record, file and status</small></div><Check /></div><div className="order-card"><QrCode /><div><b>One scan</b><small>From the shelf to the right piece</small></div><Check /></div><div className="order-card"><Users /><div><b>One source of truth</b><small>For every authorised member</small></div><Check /></div></div></div>
        </section>

        <section className="platform-section" id="platform">
          <div className="shell"><div className="section-intro"><span className="section-number light">02 / THE PLATFORM</span><h2>Everything between the<br />filing cabinet and the concert.</h2><p>Purpose-built tools for people who look after a band&apos;s most important shared resource.</p></div>
            <div className="feature-grid">{features.map(({icon: Icon, ...feature}) => <article className="feature-card" key={feature.number}><span className="feature-number">{feature.number}</span><Icon /><h3>{feature.title}</h3><p>{feature.copy}</p></article>)}</div>
          </div>
        </section>

        <section className="mobile-section" id="mobile">
          <div className="shell mobile-grid">
            <div className="phone-stage"><div className="phone phone-back"><div className="phone-screen dark"><div className="scan-corners"><QrCode /></div><b>Scan library code</b><small>Point your camera at a BandSync label</small></div></div><div className="phone phone-front"><div className="phone-screen"><div className="phone-top"><span>9:41</span><span>● ● ●</span></div><div className="mobile-title"><small>BandSync Library</small><b>Good evening, Robert</b></div><div className="mobile-search"><Search /> Search your library</div><div className="mobile-piece"><span>♫</span><div><b>Floral Dance</b><small>Katie Moss</small></div><em>›</em></div><div className="mobile-piece"><span>♫</span><div><b>Highland Cathedral</b><small>Korb & Roever</small></div><em>›</em></div><div className="mobile-tabs"><Library /><Search /><QrCode /><Users /></div></div></div></div>
            <div className="mobile-copy"><span className="section-number">03 / BANDSYNC MOBILE</span><h2>The library leaves<br />the band room.</h2><p>Browse music, open authorised PDFs, scan library codes and check what&apos;s on loan—from the device already in your pocket.</p><ul><li><span><Smartphone /></span><div><b>iOS available now</b><small>Native, secure access for iPhone and iPad.</small></div></li><li><span><Users /></span><div><b>Help test BandSync for Android</b><small>Join our closed test and help unlock the public Google Play launch.</small></div></li></ul><a className="button button-dark" href="mailto:hello@bandsync.co.uk?subject=BandSync%20Android%20testing">Become an Android tester <ArrowRight /></a></div>
          </div>
        </section>

        <section className="security-section"><div className="shell security-grid"><div><span className="section-number light">04 / TRUSTED ACCESS</span><h2>Your library stays<br /><em>your library.</em></h2></div><div className="security-copy"><p>Organisation-level separation, role-based permissions, protected cloud storage and secure authentication keep access controlled.</p><div className="security-points"><span><FolderLock /> Private organisation libraries</span><span><ShieldCheck /> Role-based access</span><span><QrCode /> Watermarked downloads</span></div><p className="copyright-note"><b>A note on copyright</b> BandSync helps you manage access; it does not grant reproduction rights. Only upload or share music your organisation has permission or a valid licence to use.</p></div></div></section>

        <section className="faq-section"><div className="shell faq-grid"><div><span className="section-number">05 / QUESTIONS</span><h2>Before you<br />get started.</h2><p>Still unsure? <a href="mailto:hello@bandsync.co.uk">Talk to a real person</a> behind BandSync.</p></div><div className="faq-list">{faqs.map((faq, i) => <div className="faq-item" key={faq.q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{faq.q}</span><ChevronDown className={openFaq === i ? 'open' : ''} /></button>{openFaq === i && <p>{faq.a}</p>}</div>)}</div></div></section>

        <section className="final-cta"><div className="cta-lines" /><div className="shell"><span className="eyebrow"><span className="live-dot" /> Your first 500 pieces are free</span><h2>Bring your library<br />into the present.</h2><p>Set up in minutes. Import what you already have. No credit card required.</p><a className="button button-large" href={APP_URL}>Start your free library <ArrowRight /></a></div></section>
      </main>

      <SiteFooter />
    </>
  )
}
