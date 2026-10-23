import React from 'react';
import { Mail, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile';
import './ContactCTA.css';

export default function ContactCTA({ onNavigate, onContactClick }) {
  const { email, location, availabilityText } = profileData;

  const handleGetInTouch = () => {
    if (onNavigate) {
      onNavigate('contact');
    } else if (onContactClick) {
      onContactClick();
    } else {
      window.location.hash = '#contact';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="contact-banner-section">
      <div className="container">
        <motion.div
          className="contact-banner-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
        >
          {/* Subtle Decorative Wave SVG */}
          <svg
            className="contact-banner-wave"
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 150 C 100 50 200 250 400 150 L 400 300 L 0 300 Z"
              fill="#35E9A0"
            />
          </svg>

          <div className="contact-banner-flex">
            {/* Left Column: Heading and Description */}
            <div className="contact-banner-left">
              <h2 className="contact-banner-heading">
                Let's build something meaningful.
              </h2>
              <p className="contact-banner-desc">
                Have a project idea, internship opportunity or just want to say hi? I'd love to hear from you.
              </p>
            </div>

            {/* Right Column: Metadata and Button */}
            <div className="contact-banner-right">
              <div className="contact-meta-col">
                <div className="contact-meta-row">
                  <Mail size={16} />
                  <a href={`mailto:${email}`}>{email}</a>
                </div>

                <div className="contact-meta-row">
                  <MapPin size={16} />
                  <span>{location}</span>
                </div>

                <div className="contact-meta-row">
                  <Calendar size={16} />
                  <span>{availabilityText}</span>
                </div>
              </div>

              <button
                type="button"
                className="contact-action-btn-large"
                onClick={handleGetInTouch}
              >
                <span>Get in Touch</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
