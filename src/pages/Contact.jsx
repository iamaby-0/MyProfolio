import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ContactHero from '../components/contact/ContactHero';
import ContactQuickActions from '../components/contact/ContactQuickActions';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import LocationCard from '../components/contact/LocationCard';
import ContactFAQ from '../components/contact/ContactFAQ';
import ContactCTA from '../components/contact/ContactCTA';
import './Contact.css';

export default function Contact({ onNavigate }) {
  const [prefilledSubject, setPrefilledSubject] = useState('');
  const nameInputRef = useRef(null);

  // Set document title and meta tag
  useEffect(() => {
    document.title = 'Contact | Aby.Dev — Abrar Ahmad';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      "Contact Abrar Ahmad (Aby.Dev) — Java & Backend-Focused Software Developer. Reach out for software engineering opportunities, project collaborations, or technical inquiries.";
  }, []);

  const handleScrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        if (nameInputRef.current) {
          nameInputRef.current.focus();
        }
      }, 500);
    }
  };

  const handleQuickAction = (action) => {
    if (action.subject) {
      setPrefilledSubject(action.subject);
      handleScrollToForm();
    }
  };

  const handleSelectSubject = (subject) => {
    setPrefilledSubject(subject);
    handleScrollToForm();
  };

  return (
    <div className="contact-page-root">
      {/* Shared Navigation Bar with Contact active */}
      <Navbar
        currentPage="contact"
        onNavigate={onNavigate}
      />

      <main className="contact-page-main">
        {/* Hero Section with Laptop Illustration */}
        <ContactHero onSelectSubject={handleSelectSubject} />

        {/* 4 Quick Action Cards */}
        <section className="contact-quick-actions-section" aria-label="Quick contact actions">
          <div className="container">
            <ContactQuickActions onSelectAction={handleQuickAction} />
          </div>
        </section>

        {/* Main 2-Column Section: Contact Information & Send a Message */}
        <section className="contact-main-grid-section" aria-label="Contact information and message form">
          <div className="container">
            <div className="contact-main-two-col">
              <div className="contact-col-info">
                <ContactInfo />
              </div>
              <div className="contact-col-form">
                <ContactForm
                  prefilledSubject={prefilledSubject}
                  nameInputRef={nameInputRef}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Location & FAQ Section */}
        <section className="contact-secondary-grid-section" aria-label="Location and frequently asked questions">
          <div className="container">
            <div className="contact-secondary-two-col">
              <div className="contact-col-location">
                <LocationCard />
              </div>
              <div className="contact-col-faq">
                <ContactFAQ />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Call-to-Action Banner */}
        <section className="contact-bottom-cta-section" aria-label="Bottom call to action">
          <div className="container">
            <ContactCTA onGetInTouchClick={handleScrollToForm} />
          </div>
        </section>
      </main>

      {/* Shared Footer with Contact highlighted */}
      <Footer
        currentPage="contact"
        onNavigate={onNavigate}
      />
    </div>
  );
}
