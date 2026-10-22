import React from 'react';
import SocialLinks from '../common/SocialLinks';
import { profileData } from '../../data/profile';
import './Footer.css';

export default function Footer({ onContactClick }) {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id) => {
    if (id === 'contact' && onContactClick) {
      onContactClick();
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const logoParts = (profileData.logo || 'Aby.Dev').split('.');
  const logoBrand = logoParts[0];
  const logoExt = logoParts[1] || 'Dev';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="nav-logo" onClick={() => handleScroll('home')}>
              <span className="nav-logo-brand">{logoBrand}</span>
              <span className="nav-logo-ext">.{logoExt}</span>
            </a>
            <p className="footer-tagline">
              Building useful software, one problem at a time.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="footer-nav" aria-label="Footer Navigation">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>About</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll('projects'); }}>Projects</a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); handleScroll('skills'); }}>Skills</a>
            <a href="#experience" onClick={(e) => { e.preventDefault(); handleScroll('experience'); }}>Experience</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>Contact</a>
          </nav>

          {/* Social Icons */}
          <SocialLinks compact showLabels={false} />
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Abrar Ahmad. All rights reserved.
          </p>

          <div className="footer-status-pill">
            <span className="status-dot"></span>
            <span>Open to software development opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
