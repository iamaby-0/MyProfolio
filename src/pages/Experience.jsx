import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ExperienceHero from '../components/experience/ExperienceHero';
import InternshipCard from '../components/experience/InternshipCard';
import ExperienceJourney from '../components/experience/ExperienceJourney';
import ExperienceCTA from '../components/experience/ExperienceCTA';
import CertificateLightbox from '../components/experience/CertificateLightbox';
import ContactModal from '../components/common/ContactModal';
import { internshipsData } from '../data/experience';
import './Experience.css';

export default function Experience({ onNavigate }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openContact = () => setIsContactModalOpen(true);
  const closeContact = () => setIsContactModalOpen(false);

  const handleViewCertificate = (internship) => {
    setSelectedCertificate(internship);
  };

  const handleCloseLightbox = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="experience-page-root">
      {/* Section 1: Shared Navbar */}
      <Navbar
        currentPage="experience"
        onNavigate={onNavigate}
        onContactClick={openContact}
      />

      <main>
        {/* Section 2: Experience Hero & Summary Statistics */}
        <ExperienceHero />

        {/* Section 3: Internship Timeline */}
        <section className="internships-section">
          <div className="container">
            {/* Section Header */}
            <div className="internships-section-header">
              <div className="internships-title-row">
                <div className="internships-icon-wrap">
                  <Briefcase size={20} />
                </div>
                <h2 className="internships-section-title">Internship Experience</h2>
              </div>
              <p className="internships-section-subtitle">
                Here are the virtual internships I have completed through AICTE – EduSkills.
              </p>
            </div>

            {/* Timeline List of Internships */}
            <div className="internships-timeline-container">
              {internshipsData.map((internship, index) => (
                <InternshipCard
                  key={internship.id}
                  internship={internship}
                  index={index}
                  onViewCertificate={handleViewCertificate}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Development Journey */}
        <ExperienceJourney />

        {/* Section 5: Contact CTA Banner */}
        <ExperienceCTA onContactClick={openContact} />
      </main>

      {/* Section 6: Shared Footer */}
      <Footer
        currentPage="experience"
        onNavigate={onNavigate}
        onContactClick={openContact}
      />

      {/* Lightbox for Full Certificate View */}
      <CertificateLightbox
        isOpen={Boolean(selectedCertificate)}
        certificate={selectedCertificate}
        onClose={handleCloseLightbox}
      />

      {/* Interactive Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContact} />
    </div>
  );
}
