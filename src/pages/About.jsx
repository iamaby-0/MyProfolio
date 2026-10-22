import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutHero from '../components/about/AboutHero';
import QuickStats from '../components/sections/QuickStats';
import JourneyTimeline from '../components/about/JourneyTimeline';
import EducationExperience from '../components/sections/EducationExperience';
import SkillsInterests from '../components/about/SkillsInterests';
import Hobbies from '../components/about/Hobbies';
import ContactCTA from '../components/sections/ContactCTA';
import ContactModal from '../components/common/ContactModal';

export default function About({ onNavigate }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContact = () => setIsContactModalOpen(true);
  const closeContact = () => setIsContactModalOpen(false);

  return (
    <div className="about-page-root">
      {/* Section 1: Shared Navigation Bar */}
      <Navbar
        currentPage="about"
        onNavigate={onNavigate}
        onContactClick={openContact}
      />

      <main>
        {/* Section 2: About Hero */}
        <AboutHero />

        {/* Section 3: Quick Statistics */}
        <QuickStats />

        {/* Section 4: My Journey Timeline */}
        <JourneyTimeline />

        {/* Section 5: Education and Experience Cards */}
        <EducationExperience isAboutPage={true} />

        {/* Section 6: Skills and Interests */}
        <SkillsInterests onNavigate={onNavigate} />

        {/* Section 7: Hobbies and Personal Interests */}
        <Hobbies />

        {/* Section 8: Contact CTA */}
        <ContactCTA onContactClick={openContact} />
      </main>

      {/* Section 9: Shared Footer */}
      <Footer
        currentPage="about"
        onNavigate={onNavigate}
        onContactClick={openContact}
      />

      {/* Interactive Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContact} />
    </div>
  );
}
