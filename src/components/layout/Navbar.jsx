import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import "./navbar.css"

const navClass = ({ isActive }) =>
  isActive ? 'font-semibold text-primary' : 'font-medium text-text-dark hover:text-primary transition-colors';

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
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-md' : 'py-6'}`}>
        <div className="nav-bar container flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="logo-text text-primary font-bold text-lg leading-none tracking-tight">DRAPIUS</span>
              <span className="logo-sub-text text-primary text-[10px] font-semibold tracking-widest">CAPITAL</span>
            </div>
          </Link>

          <div className="desktop-menu items-center gap-8">
            <NavLink to="/" end className={navClass}>Home</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <Link to="/" className="font-medium text-text-dark hover:text-primary transition-colors">Awega SCI+</Link>
            <NavLink to="/sectors" className={navClass}>Sectors</NavLink>
            <NavLink to="/portfolio" className={navClass}>Portfolio</NavLink>
            <NavLink to="/blog" className={navClass}>Blog</NavLink>
            <Link to="/#contact" className="contact-us-btn btn btn-primary ml-4">
              Contact Us <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <button className="mobile-menu-btn text-primary p-2 rounded-md hover:bg-slate-100 transition" style={{display: isMenuOpen ? 'none' : 'block'}} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mobile-drawer-overlay md:hidden">
          <button className="drawer-backdrop" onClick={() => setIsMenuOpen(false)} aria-label="Close menu" />
          <div className="mobile-drawer-panel">
            <div className="flex items-center justify-between">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <span className="logo-text text-primary font-bold text-lg leading-none tracking-tight">DRAPIUS</span>
                <span className="logo-sub-text text-primary text-[10px] font-semibold tracking-widest block">CAPITAL</span>
              </Link>
              <button type="button" className="text-primary p-2 rounded-md hover:bg-slate-100 transition" onClick={() => setIsMenuOpen(false)}>
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-lg">
              <NavLink to="/" end className={navClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink to="/about" className={navClass} onClick={() => setIsMenuOpen(false)}>About</NavLink>
              <Link to="/" className="font-medium text-text-dark" onClick={() => setIsMenuOpen(false)}>Awega SCI+</Link>
              <NavLink to="/sectors" className={navClass} onClick={() => setIsMenuOpen(false)}>Sectors</NavLink>
              <NavLink to="/portfolio" className={navClass} onClick={() => setIsMenuOpen(false)}>Portfolio</NavLink>
              <NavLink to="/blog" className={navClass} onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
            </nav>

            <Link to="/#contact" className="btn btn-primary w-full text-center py-3" onClick={() => setIsMenuOpen(false)}>
              Contact Us <ArrowUpRight className="ml-2 w-4 h-4 inline-block" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
