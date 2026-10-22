import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { profileData } from '../../data/profile';
import './Navbar.css';

const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' }
];

export default function Navbar({ currentPage = 'home', onNavigate, onContactClick }) {
  const [activeSection, setActiveSection] = useState(currentPage);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (currentPage === 'about' || currentPage === 'projects') {
      setActiveSection(currentPage);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (item.id === 'home') {
      if (onNavigate) {
        onNavigate('home');
      } else {
        window.location.hash = '#home';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.id === 'about') {
      if (onNavigate) {
        onNavigate('about');
      } else {
        window.location.hash = '#about';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.id === 'projects') {
      if (onNavigate) {
        onNavigate('projects');
      } else {
        window.location.hash = '#projects';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.id === 'contact' && onContactClick) {
      onContactClick();
    }

    if (currentPage !== 'home' && onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(item.id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resumeLink = profileData.resumeDriveUrl || profileData.resumePath;

  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, navItems[0])}>
          <span className="nav-logo-brand">{profileData.logo ? profileData.logo.split('.')[0] : 'Aby'}</span>
          <span className="nav-logo-ext">.{profileData.logo ? profileData.logo.split('.')[1] || 'Dev' : 'Dev'}</span>
        </a>

        {/* Center Desktop Links */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links-desktop">
            {navItems.map((item) => {
              const isActive =
                currentPage === 'about'
                  ? item.id === 'about'
                  : currentPage === 'projects'
                  ? item.id === 'projects'
                  : activeSection === item.id;

              return (
                <li
                  key={item.id}
                  className={`nav-link-item ${isActive ? 'active' : ''}`}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA */}
        <div className="nav-actions">
          <a
            href={resumeLink}
            className="nav-resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={15} />
            <span>Download Resume</span>
          </a>

          <button
            type="button"
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`nav-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav-mobile-links">
          {navItems.map((item) => {
            const isActive =
              currentPage === 'about'
                ? item.id === 'about'
                : currentPage === 'projects'
                ? item.id === 'projects'
                : activeSection === item.id;

            return (
              <li
                key={item.id}
                className={`nav-mobile-item ${isActive ? 'active' : ''}`}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="nav-mobile-actions">
          <a
            href={resumeLink}
            className="nav-resume-btn"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Download size={16} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
