import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import QuickStats from '../components/sections/QuickStats';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import TechStack from '../components/sections/TechStack';
import EducationExperience from '../components/sections/EducationExperience';
import Achievements from '../components/sections/Achievements';
import AboutPreview from '../components/sections/AboutPreview';
import ContactCTA from '../components/sections/ContactCTA';
import ContactModal from '../components/common/ContactModal';

export default function Home({ onNavigate }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContact = () => setIsContactModalOpen(true);
  const closeContact = () => setIsContactModalOpen(false);

  return (
    <div className="homepage-root">
      {/* Section 1: Sticky Navigation Bar */}
      <Navbar
        currentPage="home"
        onNavigate={onNavigate}
        onContactClick={openContact}
      />

      <main>
        {/* Section 2: Hero Section */}
        <Hero
          onContactClick={openContact}
          onProjectsClick={() => {
            const el = document.getElementById('projects');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Section 3: Quick Statistics */}
        <QuickStats />

        {/* Section 4: Featured Projects */}
        <FeaturedProjects />

        {/* Section 5: Technology Stack */}
        <TechStack />

        {/* Section 6: Education and Experience Preview */}
        <EducationExperience />

        {/* Section 7: Achievements and Telegram Communities */}
        <Achievements />

        {/* Section 8: About Me Preview */}
        <AboutPreview
          onContactClick={openContact}
          onNavigateAbout={() => onNavigate && onNavigate('about')}
        />

        {/* Section 9: Contact Call to Action */}
        <ContactCTA onContactClick={openContact} />
      </main>

      {/* Section 10: Footer */}
      <Footer
        currentPage="home"
        onNavigate={onNavigate}
        onContactClick={openContact}
      />

      {/* Interactive Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContact} />
    </div>
  );
}
