import React from 'react';
import Hero from '../components/home/Hero';
import Sectors from '../components/home/Sectors';
import ContactForm from '../components/home/ContactForm';
import { ArrowUpRight, CheckCircle2, Target, Globe } from 'lucide-react';
import '../about.css';
import SUPPORT from '../assets/support.png';
import {
  strategicAimsIntro,
  strategicAims,
  strategicObjectives,
  productsAndServices,
} from '../content/drapiusContent';

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="about" className="about-section section bg-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl invisible lg:visible"></div>
              <div className="relative z-10 overflow-hidden shadow-2xl">
                <img
                  src={SUPPORT}
                  alt="Our Vision"
                  className="w-full h-[600px] object-cover"
                />
                {/* <div className="absolute bottom-8 left-8 right-8 glass p-8 rounded-2xl">
                  <p className="text-primary font-bold text-xl mb-2 italic">&quot;Turning innovative ideas into market-leading institutions.&quot;</p>
                  <p className="text-primary/60 font-bold text-xs uppercase tracking-widest">— DRAKE MAKANGA, GM</p>
                </div> */}
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Who We Are</h4>
                <h2 className="mb-6">A Pathway from Concept to Consumer.</h2>
                <p className="text-text-muted text-lg mb-8">
                  Founded by Drake Makanga and Pius Walugembe, Drapius Capital was established to address the critical funding gap
                  faced by high-impact entrepreneurs in Africa. We offer more than just capital — we offer a pathway to market success.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-bg-light border border-primary/5">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6 text-accent">
                    <Target />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    To be the leading catalyst for sustainable economic transformation in East Africa,
                    recognized for turning innovative ideas into market-leading institutions.
                  </p>
                </div>
                <div className="p-8 rounded-3xl bg-bg-light border border-primary/5">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6 text-accent">
                    <Globe />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    To source, secure, and manage strategic investments for high-impact projects while providing
                    the branding and distribution infrastructure necessary for sustainable success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Strategic Aims & Objectives</h2>
              <p className="text-white/70 text-lg mb-12 leading-relaxed">
                {strategicAimsIntro}
              </p>
              <div className="space-y-6">
                {strategicAims.map((aim, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 text-primary mt-1">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="font-medium leading-relaxed text-white/95">{aim}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {strategicObjectives.map((obj) => (
                <div
                  key={obj.title}
                  className="p-6 bg-white/5 rounded-2xl border border-white/10"
                >
                  <h3 className="text-sm font-bold text-accent uppercase tracking-wide mb-2">{obj.title}</h3>
                  <p className="text-sm text-white/75 leading-relaxed">{obj.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Sectors />

      <section className="section bg-bg-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Products &amp; Services</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Products &amp; Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsAndServices.map((service) => (
              <div key={service.title} className="p-10 bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 group">
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{service.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">{service.body}</p>
                <a href="#" className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowUpRight size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
