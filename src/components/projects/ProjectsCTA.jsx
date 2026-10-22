import React from 'react';
import { Rocket, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile';
import './ProjectsCTA.css';

export default function ProjectsCTA({ onContactClick }) {
  const { email, location, availabilityText } = profileData;

  return (
    <section className="projects-cta-section">
      <div className="container">
        <motion.div
          className="projects-cta-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
        >
          {/* Subtle Decorative Wave Ambient Lines */}
          <svg
            className="projects-cta-wave"
            viewBox="0 0 500 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 120 C 150 40 300 220 500 100 L 500 250 L 0 250 Z"
              fill="#35E9A0"
            />
          </svg>

          <div className="projects-cta-flex">
            {/* Left Content: Rocket Icon + Text */}
            <div className="projects-cta-left">
              <div className="projects-cta-icon-circle">
                <Rocket size={24} />
              </div>

              <div className="projects-cta-text-group">
                <h2 className="projects-cta-heading">
                  Have a project idea?
                </h2>
                <p className="projects-cta-desc">
                  I'm always open to new opportunities, collaborations or interesting ideas.
                  Let's build something meaningful together.
                </p>
              </div>
            </div>

            {/* Right Content: Metadata + Get in Touch Button */}
            <div className="projects-cta-right">
              <div className="projects-cta-meta-col">
                <div className="projects-cta-meta-row">
                  <Mail size={16} />
                  <a href={`mailto:${email}`}>{email}</a>
                </div>

                <div className="projects-cta-meta-row">
                  <MapPin size={16} />
                  <span>{location}</span>
                </div>

                <div className="projects-cta-meta-row">
                  <Clock size={16} />
                  <span>{availabilityText}</span>
                </div>
              </div>

              <button
                type="button"
                className="projects-cta-btn"
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
