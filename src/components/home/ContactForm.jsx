import React from 'react';
import { Send, MapPin, Mail, Landmark } from 'lucide-react';
import './Home.css';
import { contactInfo } from '../../content/drapiusContent';

const ContactForm = () => {
  return (
    <section id="contact" className="section bg-white overflow-hidden">
      <div className="container">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Pitch Your Vision, <br />
                <span className="text-accent">Let's Talk.</span>
              </h2>
              <p className="text-white/70 text-lg mb-12 max-w-md">
                Got a high-impact idea? Or an investor looking for your next sustainable opportunity? 
                Reach out and let's create a measurable reality together.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <MapPin className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Head Office</p>
                    <p className="font-semibold">{contactInfo.headOffice}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-white">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Landmark className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Legal Status</p>
                    <p className="font-semibold">{contactInfo.legalStatus}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Mail className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Email Us</p>
                    <p className="font-semibold">contact@drapiuscapital.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full h-14 px-6 rounded-2xl bg-bg-light border-none focus:ring-2 focus:ring-accent transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full h-14 px-6 rounded-2xl bg-bg-light border-none focus:ring-2 focus:ring-accent transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Subject</label>
                  <select className="w-full h-14 px-6 rounded-2xl bg-bg-light border-none focus:ring-2 focus:ring-accent transition-all">
                    <option>Investment Sourcing</option>
                    <option>Project Implementation</option>
                    <option>Brand Engineering</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Your Message</label>
                  <textarea rows="4" placeholder="Tell us about your vision..." className="w-full p-6 rounded-2xl bg-bg-light border-none focus:ring-2 focus:ring-accent transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full h-16 text-lg font-bold group">
                  Send Message <Send className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
