import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, GraduationCap, HeartPulse, Wind, Droplets, Rocket, ArrowRight } from 'lucide-react';
import './Home.css';
import "./sectors.css"
import { motion } from 'framer-motion';
import { sectors as sectorsData, sectorsIntro } from '../../content/drapiusContent';

const sectorConfig = {
  Agriculture: { icon: Leaf, color: 'bg-green-100 text-green-700' },
  Entrepreneurship: { icon: Rocket, color: 'bg-blue-100 text-blue-700' },
  Education: { icon: GraduationCap, color: 'bg-purple-100 text-purple-700' },
  Healthcare: { icon: HeartPulse, color: 'bg-red-100 text-red-700' },
  'Climate & Environment': { icon: Wind, color: 'bg-teal-100 text-teal-700' },
  Sanitation: { icon: Droplets, color: 'bg-sky-100 text-sky-700' },
};

const sectors = sectorsData.map((s) => {
  const cfg = sectorConfig[s.name];
  const Icon = cfg.icon;
  return {
    ...s,
    icon: <Icon className="w-8 h-8" />,
    color: cfg.color,
  };
});

const Sectors = () => {
  return (
    <section id="sectors" className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-text-muted text-lg">
              {sectorsIntro}
            </p>
          </div>
          <Link to="/sectors" className="btn btn-primary h-14 inline-flex items-center">View All Sectors <ArrowRight className="ml-2 w-5 h-5" /></Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <motion.div 
              key={sector.name}
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
              <Link to="/sectors" className="inline-flex items-center font-bold text-primary group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
