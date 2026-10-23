import React from 'react';
import { Send, Lightbulb, BookOpen, Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import './AboutPreview.css';

export default function AboutPreview({ onContactClick, onNavigateAbout }) {
  const pillars = [
    {
      title: "Problem Solver",
      desc: "I enjoy tackling programming challenges and developing practical solutions.",
      icon: Lightbulb
    },
    {
      title: "Continuous Learner",
      desc: "Always exploring new technologies and improving my skills.",
      icon: BookOpen
    },
    {
      title: "Builder",
      desc: "I enjoy turning ideas into useful applications that create real value.",
      icon: Rocket
    }
  ];

  return (
    <section id="about" className="about-preview-section">
      <div className="container">
        <SectionTitle
          title="A Little About Me"
        />

        <div className="about-preview-split">
          {/* Left Intro Card */}
          <motion.div
            className="about-intro-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <div className="about-intro-icon-box">
                <Send size={22} />
              </div>
              <p className="about-intro-body">
                I'm a Computer Science Engineering graduate who enjoys building practical software,
                solving technical problems and exploring new technologies. My work focuses on backend
                development, full-stack applications and AI-powered solutions.
              </p>
            </div>

            <button
              type="button"
              className="about-more-btn"
              onClick={onNavigateAbout || onContactClick}
            >
              <span>More About Me</span>
              <ArrowRight size={14} />
            </button>
          </motion.div>

          {/* Right 3 Pillars Grid */}
          <div className="about-pillars-grid">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  className="about-pillar-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div className="about-pillar-icon">
                    <IconComp size={22} />
                  </div>
                  <h3 className="about-pillar-title">{pillar.title}</h3>
                  <p className="about-pillar-desc">{pillar.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
