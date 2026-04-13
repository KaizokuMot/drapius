import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import './Home.css';
import "./hero.css"
import MARKET from "../../assets/grain.png"
import CHANGE from "../../assets/change.png"
import MARKET2 from "../../assets/market2.png"


const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Content Column */}
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="hero-top-text bg-primary/5 text-primary px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase inline-block mb-6">
                Transforming African Innovation
              </div>
              
              <h1 className="hero-title font-bold">
                The Modern Capital 
              </h1>
              
              <h1 className="hero-title-2 ">
                Platform for Growth
              </h1>
              <h1 className="hero-sub-title text-secondary opacity-80">On Your Terms.</h1>
              
              <p className="text-lg text-text-muted mb-8 leading-relaxed max-w-[540px]">
                Sourcing, securing, and managing strategic investments for high-impact projects. 
                We bridge the gap between visionary entrepreneurs and global capital to ensure 
                sustainable development in East Africa.
              </p>
              
              <div className="hero-action flex flex-wrap items-center gap-4">
                <button className="action-btn btn btn-primary flex items-center gap-2">
                  Partner With Us <ArrowUpRight className="w-4 h-4" />
                </button>
                <button className="action-btn btn bg-white border border-primary/10 text-primary hover:bg-primary/5">
                  Our Track Record
                </button>
              </div>

              {/* Stats Row Integrated in Content Column to avoid floating collisions */}
              <div className="hero-stats-row">
                <div>
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-xs uppercase tracking-widest text-text-muted mt-1">Active Markets</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">$150M+</div>
                  <div className="text-xs uppercase tracking-widest text-text-muted mt-1">Capital Projected</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">85%</div>
                  <div className="text-xs uppercase tracking-widest text-text-muted mt-1">Deal Closure Rate</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Column - STRICTLY CONTAINED */}
          <div className="hero-visuals">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="arch-container"
            >
              {/* Arches strictly inside the right column */}
              <div className="arch-item arch-main">
                <img 
                  src={MARKET2} 
                  alt="Business Innovation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="arch-item arch-secondary">
                <img
                  src={MARKET} 
                  alt="Strategic Partnership" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="arch-item arch-tertiary">
                <img 
                src={CHANGE}
                  alt="African Growth" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Card strictly inside the right column */}
              <div className="investment-card-home">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-primary/60 tracking-wider">Investment Growth</div>
                    <div className="projections text-primary">+24.5% Projected Annually</div>
                  </div>
                </div>
                <div className="h-1 bg-primary/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-full bg-primary" 
                  />
                </div>
              </div>

              {/* Curved Text Decoration */}
              <div className="absolute top-10 right-20 text-primary opacity-20 pointer-events-none select-none z-0">
                <svg width="200" height="200" viewBox="0 0 200 200">
                  <path id="curve" fill="transparent" d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
                  <text className="text-[10px] uppercase tracking-[0.3em] font-bold">
                    <textPath xlinkHref="#curve">
                      Drapius Capital • Innovation • East Africa • Strategy •
                    </textPath>
                  </text>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
