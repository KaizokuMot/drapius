import React from 'react';
import ContactForm from '../components/home/ContactForm';
import './pages.css';
import { sectors, sectorsIntro } from '../content/drapiusContent';
import SUSTAINABLE from '../assets/sustainable-farming.png';
import GROWTH from '../assets/growth.png';
import PRACTICE from '../assets/practice.png';
import FRESH from '../assets/fresh.png';
import CHANGE from '../assets/change.png';
import OPEN from '../assets/open.png';
import HERO_OFFICE from '../assets/standards.png';

const IMAGES = {
  Agriculture: SUSTAINABLE,
  Entrepreneurship: GROWTH,
  Education: PRACTICE,
  Healthcare: FRESH,
  'Climate & Environment': CHANGE,
  Sanitation: OPEN,
};

const ROWS = sectors.map((row) => ({ ...row, image: IMAGES[row.name] }));

export default function SectorsPage() {
  return (
    <>
      <section className="section bg-white pt-28 md:pt-32">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Core Sectors of Focus</h1>
            <p className="text-text-muted text-lg leading-relaxed">{sectorsIntro}</p>
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-0">
        <div className="container py-0">
          <div className="rounded-[2rem] overflow-hidden shadow-xl">
            <img src={HERO_OFFICE} alt="" className="w-full h-[min(50vh,420px)] object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          {ROWS.map((row, i) => (
            <div
              key={row.name}
              className={`page-alternating-row ${i % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className="page-alternating-text">
                <p className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-2">{row.sdg}</p>
                <h3>{row.name}</h3>
                <p className="text-text-muted text-lg leading-relaxed">{row.focus}</p>
              </div>
              <div className="page-alternating-visual">
                <img src={row.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
