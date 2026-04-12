import React from 'react';
import ContactForm from '../components/home/ContactForm';
import './pages.css';
import { executiveSummary, productsAndServices } from '../content/drapiusContent';
import MARKET2 from '../assets/market2.png';
import DIGITAL from '../assets/digital.png';
import GROWTH from '../assets/growth.png';
import PRACTICE from '../assets/practice.png';

const IMAGES = {
  'Investment Sourcing & Facilitation': GROWTH,
  'Brand Development & Market Entry': DIGITAL,
  'Government & NGO Project Implementation': PRACTICE,
  'Project Oversight & Consultancy': MARKET2,
};

const SERVICES = productsAndServices.map((p) => ({
  ...p,
  image: IMAGES[p.title],
}));

export default function PortfolioPage() {
  return (
    <>
      <section className="page-hero-dark">
        <div className="container">
          <div className="page-hero-split">
            <div>
              <p className="page-kicker">Products &amp; Services</p>
              <h1>Products &amp; Services</h1>
              <p className="text-white/75 text-lg mt-6 max-w-xl leading-relaxed">
                {executiveSummary[0]} {executiveSummary[1]}
              </p>
            </div>
            <div className="page-hero-media">
              <img src={MARKET2} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="section page-portfolio-section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Products &amp; Services</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Products &amp; Services</h2>
          </div>

          <div className="page-portfolio-grid page-portfolio-grid--fluid">
            {SERVICES.map((item) => (
              <article key={item.title} className="page-portfolio-card">
                <div className="logo-wrap">
                  <img src={item.image} alt="" />
                </div>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
