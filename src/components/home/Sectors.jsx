import React from 'react';
import { Leaf, GraduationCap, HeartPulse, Wind, Droplets, Rocket, ArrowRight } from 'lucide-react';
import './Home.css';
import { motion } from 'framer-motion';

const sectors = [
  {
    icon: <Leaf className="w-8 h-8" />,
    name: "Agriculture",
    sdg: "SDG 2 (Zero Hunger)",
    focus: "Value addition, supply chain optimization, and sustainable farming tech.",
    color: "bg-green-100 text-green-700"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    name: "Entrepreneurship",
    sdg: "SDG 8 & 9",
    focus: "Supporting SMEs, startup incubation, and venture scaling across the region.",
    color: "bg-blue-100 text-blue-700"
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    name: "Education",
    sdg: "SDG 4 (Quality Education)",
    focus: "Ed-tech, vocational training, and critical infrastructure for the future.",
    color: "bg-purple-100 text-purple-700"
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    name: "Healthcare",
    sdg: "SDG 3 (Good Health)",
    focus: "Affordable diagnostics, medical distribution, and community clinics.",
    color: "bg-red-100 text-red-700"
  },
  {
    icon: <Wind className="w-8 h-8" />,
    name: "Climate & Environment",
    sdg: "SDG 13 (Climate Action)",
    focus: "Renewable energy, reforestation, and carbon credit management.",
    color: "bg-teal-100 text-teal-700"
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    name: "Sanitation",
    sdg: "SDG 6 (Clean Water)",
    focus: "Waste management and clean water accessibility for growing cities.",
    color: "bg-sky-100 text-sky-700"
  }
];

const Sectors = () => {
  return (
    <section id="sectors" className="section bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Core Focus</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Innovative solutions for tomorrow's ventures.</h2>
            <p className="text-text-muted text-lg">
              We prioritize sectors that offer high social returns and long-term economic stability, 
              ensuring every venture aligns with the UN Sustainable Development Goals (SDGs).
            </p>
          </div>
          <button className="btn btn-primary h-14">View All Sectors <ArrowRight className="ml-2 w-5 h-5" /></button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-primary/5 bg-bg-light hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${sector.color}`}>
                {sector.icon}
              </div>
              <p className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-2">{sector.sdg}</p>
              <h3 className="text-2xl font-bold text-primary mb-4">{sector.name}</h3>
              <p className="text-text-muted mb-6">
                {sector.focus}
              </p>
              <a href="#" className="inline-flex items-center font-bold text-primary group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
