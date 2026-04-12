import React from 'react';
import { Link2, Globe, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import './Home.css';

const team = [
  {
    name: "Drake Makanga",
    role: "General Manager",
    bio: "Leading the company’s strategic direction and high-level stakeholder engagement, Drake ensures that all operations align with the firm’s long-term vision.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Pius Walugembe",
    role: "Head of Operations",
    bio: "Pius oversees the day-to-day execution of projects, ensuring that logistics, timelines, and implementation standards meet rigorous international partner demands.",
    image: "https://images.unsplash.com/photo-1519085184528-ce7ad1962972?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Dixon Kalanzi",
    role: "Head of I.T and Data Management",
    bio: "Spearheading digital infrastructure, utilizing data analytics to track performance and ensuring investment sourcing is backed by cutting-edge technology.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
  }
];

const Team = () => {
  return (
    <section id="team" className="section bg-bg-light">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">The Experts</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Real-world success with the best expertise in the field.</h2>
          <p className="text-text-muted text-lg">
            Our leadership combines local market intelligence with technical expertise to ensure every project is viable and scalable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-[400px] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary"><Link2 size={18} /></a>
                    <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary"><Globe size={18} /></a>
                    <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary"><Mail size={18} /></a>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-text-muted text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
