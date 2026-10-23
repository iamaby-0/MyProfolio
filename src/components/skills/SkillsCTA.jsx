import React from 'react';
import { Rocket, Mail, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile';
import './SkillsCTA.css';

export default function SkillsCTA({ onContactClick }) {
  const { email, location, availabilityText } = profileData;

  return (
    <section className="skills-cta-section">
      <div className="container">
        <motion.div
          className="skills-cta-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
        >
          {/* Subtle Ambient Decorative Wave Lines */}
          <svg
            className="skills-cta-wave"
            viewBox="0 0 500 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 120 C 150 40 300 220 500 100 L 500 250 L 0 250 Z"
              fill="#35E9A0"
            />
          </svg>

          <div className="skills-cta-flex">
            {/* Left Content: Rocket Icon + Text */}
            <div className="skills-cta-left">
              <div className="skills-cta-icon-circle">
                <Rocket size={26} />
              </div>

              <div className="skills-cta-text-group">
                <h2 className="skills-cta-heading">
                  Let's build something amazing together.
                </h2>
                <p className="skills-cta-desc">
                  I'm always open to new opportunities, collaborations, and interesting projects. Feel free to reach out—I'd love to connect!
                </p>
              </div>
            </div>

            {/* Right Content: Metadata + Get in Touch Button */}
            <div className="skills-cta-right">
              <div className="skills-cta-meta-col">
                <div className="skills-cta-meta-row">
                  <Mail size={16} className="skills-meta-icon" />
                  <a href={`mailto:${email}`} className="skills-meta-link">
                    {email}
                  </a>
                </div>

                <div className="skills-cta-meta-row">
                  <MapPin size={16} className="skills-meta-icon" />
                  <span>{location}</span>
                </div>

                <div className="skills-cta-meta-row">
                  <Calendar size={16} className="skills-meta-icon" />
                  <span>{availabilityText || 'Available for opportunities'}</span>
                </div>
              </div>

              <button
                type="button"
                className="skills-cta-btn"
                onClick={onContactClick}
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
