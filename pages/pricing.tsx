import Layout from '@/components/Layout'
import { APP_URL } from '@/components/SiteChrome'
import { ArrowRight, Check, HelpCircle, ShieldCheck } from 'lucide-react'

const included = ['Up to 500 catalogue entries', 'Search, filters and rich metadata', 'Spreadsheet import', 'Secure PDF storage', 'Mobile and web access', 'Role-based member access']
const faqs = [
  ['Is the free plan time-limited?', 'No. Build a real working library with up to 500 entries for as long as it suits your band.'],
  ['Do I need a card to start?', 'No card is required. Create your library and decide about upgrading only when you need more capacity.'],
  ['Can we bring our spreadsheet?', 'Yes. Import your existing catalogue so you can get value without retyping years of records.'],
  ['What will a paid plan cost?', 'Paid capacity is being finalised. We will show the price clearly before you choose to upgrade; your free library remains usable.'],
]

export default function Pricing() {
  return <Layout title="Pricing — Start free | BandSync Library" description="Start BandSync Library free with up to 500 pieces, no credit card and no time limit.">
    <section className="subpage-hero"><div className="shell narrow"><span className="section-number light">SIMPLE FROM THE FIRST NOTE</span><h1>Start with your real library.<br/><em>Pay when you outgrow it.</em></h1><p>No ticking trial clock. No card details. Catalogue up to 500 pieces and see whether BandSync fits the way your band works.</p></div></section>
    <section className="pricing-section"><div className="shell pricing-layout">
      <div className="price-card"><div className="price-card-top"><span>FREE LIBRARY</span><ShieldCheck/></div><h2>£0</h2><p className="price-sub">for up to 500 pieces</p><ul>{included.map(x=><li key={x}><Check/>{x}</li>)}</ul><a className="button price-button" href={APP_URL}>Build your free library <ArrowRight/></a><small>No credit card · Keep it free while it fits</small></div>
      <div className="price-story"><span className="section-number">PRICING WITHOUT PRESSURE</span><h2>Prove the value before asking the committee.</h2><p>Import your catalogue, invite the right people and use BandSync in the band room. When your collection grows beyond 500 entries, you can choose extra capacity without rebuilding anything.</p><div className="value-points"><div><b>Start useful</b><span>Enough room for a working collection—not a demo.</span></div><div><b>Grow in place</b><span>Your records, files and access stay together.</span></div><div><b>Stay in control</b><span>Export your catalogue and keep ownership of your data.</span></div></div></div>
    </div></section>
    <section className="pricing-faq"><div className="shell"><div className="faq-title"><HelpCircle/><div><span className="section-number">THE DETAILS</span><h2>Questions committees ask.</h2></div></div><div className="pricing-faq-grid">{faqs.map(([q,a])=><article key={q}><h3>{q}</h3><p>{a}</p></article>)}</div></div></section>
    <section className="final-cta"><div className="cta-lines"/><div className="shell"><span className="eyebrow"><span className="live-dot"/> Free up to 500 pieces</span><h2>Make the first search<br/>the easy one.</h2><p>Bring your spreadsheet. Add your first pieces. No credit card required.</p><a className="button button-large" href={APP_URL}>Start your free library <ArrowRight/></a></div></section>
  </Layout>
}
