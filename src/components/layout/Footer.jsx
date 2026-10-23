import React from 'react';
import SocialLinks from '../common/SocialLinks';
import { profileData } from '../../data/profile';
import './Footer.css';

export default function Footer({ currentPage = 'home', onNavigate, onContactClick }) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, id) => {
    e.preventDefault();

    if (id === 'contact') {
      if (onContactClick) onContactClick();
      return;
    }

    if (id === 'home') {
      if (onNavigate) {
        onNavigate('home');
      } else {
        window.location.hash = '#home';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (id === 'about') {
      if (onNavigate) {
        onNavigate('about');
      } else {
        window.location.hash = '#about';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (id === 'projects') {
      if (onNavigate) {
        onNavigate('projects');
      } else {
        window.location.hash = '#projects';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (id === 'skills') {
      if (onNavigate) {
        onNavigate('skills');
      } else {
        window.location.hash = '#skills';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (id === 'experience') {
      if (onNavigate) {
        onNavigate('experience');
      } else {
        window.location.hash = '#experience';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // Anchor sections on homepage: contact
    if (currentPage !== 'home' && onNavigate) {
      onNavigate('home', id);
    } else {
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const logoParts = (profileData.logo || 'Aby.Dev').split('.');
  const logoBrand = logoParts[0];
  const logoExt = logoParts[1] || 'Dev';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content-row">
          {/* Left Brand & Tagline */}
          <div className="footer-brand">
            <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, 'home')}>
              <span className="nav-logo-brand">{logoBrand}</span>
              <span className="nav-logo-ext">.{logoExt}</span>
            </a>
            <span className="footer-tagline">
              Building useful software, one problem at a time.
            </span>
          </div>

          {/* Center Navigation Links */}
          <nav className="footer-nav" aria-label="Footer Navigation">
            <a href="#home" className={currentPage === 'home' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'home')}>Home</a>
            <a href="#about" className={currentPage === 'about' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'about')}>About</a>
            <a href="#projects" className={currentPage === 'projects' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
            <a href="#skills" className={currentPage === 'skills' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
            <a href="#experience" className={currentPage === 'experience' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'experience')}>Experience</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </nav>

          {/* Right Social Icons and Copyright */}
          <div className="footer-right">
            <SocialLinks compact showLabels={false} />
            <span className="footer-copyright">
              © {currentYear} Abrar Ahmad. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
