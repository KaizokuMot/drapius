import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Link2, Globe, Send, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-primary/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
            
              <div className="flex flex-col">
                <span className="text-primary font-bold text-lg leading-none tracking-tight">DRAPIUS</span>
                <span className="text-primary text-[10px] font-semibold tracking-widest mt-1">CAPITAL</span>
              </div>
            </div>
            <p className="text-text-muted">
              A premier investment & project management firm acting as a strategic bridge for sustainable development in East Africa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-bg-light rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Link2 size={18} /></a>
              <a href="#" className="w-10 h-10 bg-bg-light rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Send size={18} /></a>
              <a href="#" className="w-10 h-10 bg-bg-light rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><Globe size={18} /></a>
              <a href="#" className="w-10 h-10 bg-bg-light rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"><MessageSquare size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-primary font-bold mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-text-muted hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="text-text-muted hover:text-primary">About Us</Link></li>
              <li><Link to="/sectors" className="text-text-muted hover:text-primary">Sectors</Link></li>
              <li><Link to="/portfolio" className="text-text-muted hover:text-primary">Portfolio</Link></li>
              <li><Link to="/blog" className="text-text-muted hover:text-primary">Insights & News</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold mb-8">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-text-muted hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary">Cookie Policy</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary">Regulatory Disclosure</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold mb-8">Join Our Newsletter</h4>
            <p className="text-text-muted mb-6 text-sm">Get the latest insights on African investment and project management.</p>
            <div className="flex gap-2 p-2 bg-bg-light rounded-2xl">
              <input type="email" placeholder="Email address" className="bg-transparent border-none focus:ring-0 px-4 w-full" />
              <button className="bg-primary text-white p-3 rounded-xl hover:bg-primary-light transition-all">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/5">
          <p className="text-text-muted text-sm mb-4 md:mb-0">
            &copy; 2026 Drapius Capital Africa Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-text-muted text-xs font-bold uppercase tracking-widest">Registered Private Limited Company</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
