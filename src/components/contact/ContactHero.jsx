import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, MessageSquare } from 'lucide-react';
import laptopImg from '../../assets/projects-hero-laptop.jpg';
import './ContactHero.css';

export default function ContactHero({ onSelectSubject }) {
  return (
    <section className="contact-hero-section">
      <div className="container">
        <div className="contact-hero-grid">
          {/* Left Column: Heading & Description */}
          <motion.div
            className="contact-hero-left"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="contact-eyebrow">
              <span className="contact-eyebrow-dot">●</span>
              <span>GET IN TOUCH</span>
            </div>

            <h1 className="contact-hero-heading">
              Let's Build Something <br />
              Amazing <span className="highlight-mint">Together.</span>
            </h1>

            <p className="contact-hero-desc">
              I'm always open to new opportunities, collaborations or interesting projects.
              Whether you have a project in mind, a job opportunity, or just want to connect,
              feel free to reach out — I'd love to hear from you!
            </p>
          </motion.div>

          {/* Right Column: Technology-themed Laptop & Code Snippet Illustration */}
          <motion.div
            className="contact-hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="contact-laptop-stage">
              {/* Handwritten Annotation */}
              <div className="contact-hero-annotation">
                <span className="contact-annotation-text">Good Ideas Start Here!</span>
                <svg
                  className="contact-annotation-arrow"
                  viewBox="0 0 60 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 5 15 Q 25 35 48 20"
                    stroke="#35E9A0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 40 18 L 48 20 L 46 28"
                    stroke="#35E9A0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Floating Technology Pills around Laptop */}
              <button
                type="button"
                className="contact-floating-pill pill-jobs"
                onClick={() => onSelectSubject && onSelectSubject('Job Opportunity')}
                title="Prefill Job Opportunity"
              >
                <Briefcase size={14} className="contact-pill-icon" />
                <span>Job Opportunities</span>
              </button>

              <button
                type="button"
                className="contact-floating-pill pill-collab"
                onClick={() => onSelectSubject && onSelectSubject('Project Collaboration')}
                title="Prefill Project Collaboration"
              >
                <Users size={14} className="contact-pill-icon" />
                <span>Collaborations</span>
              </button>

              <button
                type="button"
                className="contact-floating-pill pill-discussion"
                onClick={() => onSelectSubject && onSelectSubject('General Inquiry')}
                title="Prefill Project Discussion"
              >
                <MessageSquare size={14} className="contact-pill-icon" />
                <span>Project Discussion</span>
              </button>

              {/* Code Snippet Card matching reference */}
              <div className="contact-code-editor-card">
                <div className="contact-code-header">
                  <span className="contact-dot dot-red" />
                  <span className="contact-dot dot-yellow" />
                  <span className="contact-dot dot-green" />
                  <span className="contact-filename">message.js</span>
                </div>
                <div className="contact-code-body">
                  <div>
                    <span className="code-kw">const</span>{' '}
                    <span className="code-var">message</span> = &#123;
                  </div>
                  <div className="code-indent">
                    <span className="code-prop">from:</span>{' '}
                    <span className="code-str">"You"</span>,
                  </div>
                  <div className="code-indent">
                    <span className="code-prop">to:</span>{' '}
                    <span className="code-str">"Aby.Dev"</span>,
                  </div>
                  <div className="code-indent">
                    <span className="code-prop">subject:</span>{' '}
                    <span className="code-str">"Let's Collaborate"</span>,
                  </div>
                  <div className="code-indent">
                    <span className="code-prop">message:</span>{' '}
                    <span className="code-str">"Build something great!"</span>
                  </div>
                  <div>&#125;;</div>
                </div>
              </div>

              {/* Laptop Graphic Canvas */}
              <div className="contact-laptop-wrapper">
                <div className="contact-laptop-ambient-glow" />
                <img
                  src={laptopImg}
                  alt="Aby.Dev Contact Laptop Preview"
                  className="contact-laptop-img"
                  width="440"
                  height="260"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
