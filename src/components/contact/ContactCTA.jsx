import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';
import './ContactCTA.css';

export default function ContactCTA({ onGetInTouchClick }) {
  return (
    <section className="contact-cta-section" aria-label="Project inquiry call to action">
      <div className="contact-cta-card">
        {/* Subtle Ambient Decorative Wave Lines */}
        <svg
          className="contact-cta-wave"
          viewBox="0 0 500 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M 0 100 C 150 20 300 180 500 80 L 500 200 L 0 200 Z"
            fill="url(#contact-cta-gradient)"
          />
          <defs>
            <linearGradient id="contact-cta-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#35E9A0" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#4FFFB0" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#35E9A0" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>

        <div className="contact-cta-content">
          {/* Left: Rocket Icon + Text */}
          <div className="contact-cta-left">
            <div className="contact-cta-icon-circle">
              <Rocket size={24} />
            </div>

            <div className="contact-cta-text-group">
              <h2 className="contact-cta-heading">
                Have an exciting project in mind?
              </h2>
              <p className="contact-cta-desc">
                Let's turn your ideas into reality. I'm just a message away!
              </p>
            </div>
          </div>

          {/* Right: Button */}
          <div className="contact-cta-right">
            <button
              type="button"
              className="contact-cta-btn"
              onClick={onGetInTouchClick}
              aria-label="Get in touch - scroll to contact form"
            >
              <span>Get in Touch</span>
              <ArrowRight size={16} className="contact-cta-arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
