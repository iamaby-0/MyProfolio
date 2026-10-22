import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  // Determine initial page from hash
  const getInitialPage = () => {
    const hash = window.location.hash.toLowerCase();
    if (hash.startsWith('#about')) {
      return 'about';
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);

  // Sync document title and meta description with current page
  useEffect(() => {
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }

    if (currentPage === 'about') {
      document.title = 'About Me | Aby.Dev — Abrar Ahmad';
      metaDesc.content =
        'Learn about Abrar Ahmad, the developer behind Aby.Dev, including his Computer Science education, full-stack internship, technical skills, projects and interests.';
    } else {
      document.title = 'Aby.Dev — Abrar Ahmad | Software Developer';
      metaDesc.content =
        'Personal developer portfolio of Abrar Ahmad (Aby.Dev) — Java & Backend-Focused Software Developer, Galgotias University CSE Graduate, AICTE Full Stack Intern.';
    }
  }, [currentPage]);

  // Listen to hash changes (e.g. browser back/forward or direct link)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#about')) {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Programmatic navigation handler
  const handleNavigate = (page, sectionId) => {
    if (page === 'about') {
      setCurrentPage('about');
      window.location.hash = '#about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('home');
      if (sectionId) {
        window.location.hash = `#${sectionId}`;
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 60);
      } else {
        window.location.hash = '#home';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="app-container">
      {currentPage === 'about' ? (
        <About onNavigate={handleNavigate} />
      ) : (
        <Home onNavigate={handleNavigate} />
      )}
    </div>
  );
}

export default App;

