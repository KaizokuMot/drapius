import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-md' : 'py-6'}`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-accent font-bold text-xl">D</span>
          </div>
          <div className="flex flex-col">
            <span className="text-primary font-bold text-lg leading-none tracking-tight">DRAPIUS</span>
            <span className="text-primary text-[10px] font-semibold tracking-widest mt-1">CAPITAL</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="font-semibold text-primary hover:text-accent transition-colors">Home</a>
          <a href="#about" className="font-medium text-text-dark hover:text-primary transition-colors">About</a>
          <a href="#sectors" className="font-medium text-text-dark hover:text-primary transition-colors">Sectors</a>
          <a href="#portfolio" className="font-medium text-text-dark hover:text-primary transition-colors">Portfolio</a>
          <a href="#blog" className="font-medium text-text-dark hover:text-primary transition-colors">Blog</a>
          <a href="#contact" className="btn btn-primary ml-4">
            Contact Us <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-6 md:hidden">
          <a href="/" className="font-semibold text-primary" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#sectors" onClick={() => setIsMenuOpen(false)}>Sectors</a>
          <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
          <a href="#blog" onClick={() => setIsMenuOpen(false)}>Blog</a>
          <a href="#contact" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
