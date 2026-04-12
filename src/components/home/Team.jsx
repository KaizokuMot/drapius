import React from 'react';
import { Link2, Globe, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import './Home.css';
import PIUS from "../../assets/ppp3.png"
import DRAKE from "../../assets/drake.jpeg"
import DEV from "../../assets/dx2.png"
import { leadershipTeam, leadershipIntro } from '../../content/drapiusContent';

const images = [DRAKE, PIUS, DEV];

const team = leadershipTeam.map((member, index) => ({
  ...member,
  image: images[index],
}));

const Team = () => {
  return (
    <section id="team" className="section bg-bg-light">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Leadership Team</h2>
          <p className="text-text-muted text-lg">
            {leadershipIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div 
              key={member.name}
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
