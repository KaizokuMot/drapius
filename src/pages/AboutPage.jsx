import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ContactForm from '../components/home/ContactForm';
import Team from '../components/home/Team';
import './pages.css';
import {
  legalName,
  executiveSummary,
  backgroundHistory,
  vision,
  mission,
  strategicAimsIntro,
  strategicAims,
  coreValues,
  strategicObjectives,
  productsAndServices,
  leadershipIntro,
} from '../content/drapiusContent';
import HAPPY from '../assets/happy-people.jpg';
import TRADER from '../assets/african-trader.jpg';
import FARMER from '../assets/farmer-close-up.jpg';
import MARKET from '../assets/market.png';
import OFFICE from '../assets/login-page.png';
import SUPPORT from '../assets/support.png';
import DIGITAL from '../assets/digital.png';
import GROWTH from '../assets/growth.png';
import PRACTICE from '../assets/practice.png';
import MARKET2 from '../assets/market2.png';
import DRAKE from '../assets/drake.jpeg';
import DX from '../assets/dx2.png';

const Z_ROWS = [
  {
    title: productsAndServices[0].title,
    body: productsAndServices[0].body,
    image: DIGITAL,
  },
  {
    title: productsAndServices[1].title,
    body: productsAndServices[1].body,
    image: GROWTH,
  },
  {
    title: productsAndServices[2].title,
    body: productsAndServices[2].body,
    image: PRACTICE,
  },
  {
    title: productsAndServices[3].title,
    body: productsAndServices[3].body,
    image: MARKET2,
  },
];

const VALUE_TILES = [
  { key: coreValues[0], body: strategicAims[0], variant: 'dark' },
  { key: coreValues[1], body: strategicAims[1], variant: 'light' },
  { key: coreValues[2], body: strategicAims[2], variant: 'mint' },
];

const FAQS = [
  {
    q: 'What is Drapius Capital?',
    a: `${executiveSummary[0]} ${executiveSummary[1]} ${executiveSummary[2]}`,
  },
  {
    q: 'How can I partner with you?',
    a: 'We work with visionary entrepreneurs, institutional partners, and international investors. Reach out through our contact form with a short summary of your project or mandate, and our team will respond with next steps.',
  },
  {
    q: 'What sectors do you focus on?',
    a: 'We prioritize agriculture, entrepreneurship, education, healthcare, climate and environment, and sanitation—aligned with relevant UN Sustainable Development Goals and long-term economic stability in East Africa.',
  },
  {
    q: 'Where are you located?',
    a: 'We are legally registered in Uganda and operate from our head offices at Buganda Road Block 663, Kampala, Uganda.',
  },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [openProcess, setOpenProcess] = useState(0);

  return (
    <>
      {/* Hero — template split + serif headline */}
      <section className="about-hero-deep">
        <div className="container">
          <div className="about-hero-grid">
            <div>
              <p className="about-hero-eyebrow">{legalName}</p>
              <h1>Innovative solutions for tomorrow&apos;s ventures.</h1>
              <p className="about-hero-lead">
                {executiveSummary[1]} {executiveSummary[2]}
              </p>
              <Link to="/#contact" className="about-hero-cta">
                Get in touch
              </Link>
            </div>
            <div className="about-hero-visual">
              <img src={HAPPY} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      {/* <section className="about-trust-strip">
        <div className="container">
          <p className="about-trust-strip__label">Strategic network</p>
          <p className="text-center text-text-muted text-sm md:text-base max-w-3xl mx-auto mb-8 leading-relaxed px-2">
            We have cultivated a vast network of business corporations and private investors committed to the growth of the African continent.
          </p>
          <div className="about-trust-logos" aria-hidden>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="about-trust-logo" />
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Story */}
      <section className="section bg-white" id="about-story">
        <div className="container">
          <p className="about-section-kicker">Background &amp; History</p>
          <div style={{marginBottom:"6rem"}} className="about-doc-split">
            <h2>Our Story</h2>
            <div className="about-doc-body">
              {backgroundHistory.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="about-bento">
            <div className="about-bento__tall">
              <img src={TRADER} alt="" />
            </div>
            <div className="about-bento__cell">
              <img src={FARMER} alt="" />
            </div>
            <div className="about-bento__cell">
              <img src={MARKET} alt="" />
            </div>
            <div className="about-bento__wide">
              <img src={OFFICE} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission + Vision */}
      <section className="section bg-bg-light">
        <div className="container">
          <p className="about-section-kicker">Vision &amp; Mission</p>
          <div className="about-doc-split mb-12">
            <h2>Our Mission</h2>
            <div className="about-doc-body space-y-8">
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Vision</h3>
                <p>{vision}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">Mission</h3>
                <p>{mission}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation band */}
      <section className="section bg-white">
        <div className="container">
          <div className="about-innovation-band">
            <h2>Driven by passion &amp; innovation. Forging impact.</h2>
            <p>{strategicAimsIntro}</p>
          </div>
          <div className="about-innovation-visual">
            <img src={SUPPORT} alt="" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats-band">
        <div className="container">
          <h2>A journey of innovation and success</h2>
          <div className="about-stats-row">
            <div className="about-stat-pill">
              <strong>6</strong>
              <span>Core sectors of focus</span>
            </div>
            <div className="about-stat-pill">
              <strong>4</strong>
              <span>Strategic aims</span>
            </div>
            <div className="about-stat-pill">
              <strong>5</strong>
              <span>Key objectives</span>
            </div>
            <div className="about-stat-pill">
              <strong>100%</strong>
              <span>Brand identity target</span>
            </div>
          </div>
          <p className="about-stats-foot">{strategicAimsIntro}</p>
        </div>
      </section>
      {/* Process accordion — strategic aims */}
      <section className="section bg-white">
        <div className="container max-w-3xl">
          <h2 className="font-display text-center text-primary text-2xl md:text-3xl font-semibold mb-10">
            Navigating success through key steps
          </h2>
          <div className="border-t border-primary/10">
            {strategicAims.map((item, i) => (
              <div key={i} className="about-faq-item border-b border-primary/10">
                <button
                  type="button"
                  className="about-faq-trigger"
                  aria-expanded={openProcess === i}
                  onClick={() => setOpenProcess(openProcess === i ? -1 : i)}
                >
                  <span className="pr-4 font-semibold leading-snug">{item}</span>
                  <ChevronDown size={20} strokeWidth={2.25} className="mt-1 flex-shrink-0" />
                </button>
                {openProcess === i && strategicObjectives[i] && (
                  <div className="about-faq-panel pl-0">
                    <p className="font-bold text-primary mb-2">{strategicObjectives[i].title}</p>
                    <p>{strategicObjectives[i].body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-bg-light">
        <div className="container">
          <div className="about-faq-wrap">
            <h2>Commonly asked questions</h2>
            <div>
              {FAQS.map((item, i) => (
                <div key={item.q} className="about-faq-item">
                  <button
                    type="button"
                    className="about-faq-trigger"
                    aria-expanded={openFaq === i}
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <ChevronDown size={20} strokeWidth={2.25} />
                  </button>
                  {openFaq === i && <div className="about-faq-panel">{item.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core values — template 3-card row */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="font-display text-center text-primary text-3xl md:text-4xl font-semibold mb-12">
            Unveiling the core values of Drapius Capital
          </h2>
          <div className="about-values-grid">
            {VALUE_TILES.map((tile) => (
              <div
                key={tile.key}
                className={`about-value-tile about-value-tile--${tile.variant}`}
              >
                <h3>{tile.key}</h3>
                <p>{tile.body}</p>
              </div>
            ))}
          </div>
          <div className="about-values-row2">
            <div className="about-value-tile about-value-tile--dark about-value-tile--wide">
              <h3>{coreValues[3]}</h3>
              <p>{strategicAims[3]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic objectives */}
      <section className="section bg-bg-light">
        <div className="container">
          <p className="about-section-kicker">Strategic objectives</p>
          <h2 className="font-display text-primary text-2xl md:text-3xl font-semibold mb-10">
            Strategic Objectives
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {strategicObjectives.map((obj) => (
              <article
                key={obj.title}
                className="p-8 bg-white rounded-2xl border border-primary/5 shadow-sm"
              >
                <h3 className="text-lg font-bold text-primary mb-3">{obj.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{obj.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
