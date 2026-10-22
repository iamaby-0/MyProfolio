import React from 'react';
import { Cpu, BookOpen, Hammer, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import './AboutPreview.css';

export default function AboutPreview({ onContactClick }) {
  const features = [
    {
      title: "Problem Solver",
      desc: "Enjoys tackling programming challenges and developing practical, resilient solutions.",
      icon: Cpu
    },
    {
      title: "Continuous Learner",
      desc: "Continuously improves technical skills and explores new tools, frameworks, and architectures.",
      icon: BookOpen
    },
    {
      title: "Builder",
      desc: "Enjoys transforming ideas into useful applications with clean, maintainable code.",
      icon: Hammer
    }
  ];

  return (
    <section id="about" className="about-preview-section">
      <div className="container">
        <SectionTitle
          title="A Little About Me"
          subtitle="Engineering philosophy and foundational mindset."
        />

        <motion.div
          className="about-preview-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
        >
          <p className="about-intro-text">
            "I'm a Computer Science Engineering graduate who enjoys building practical software,
            solving technical problems and exploring new technologies. My work focuses on backend
            development, full-stack applications and AI-powered solutions."
          </p>

          <div className="about-features-grid">
            {features.map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <div key={idx} className="about-feature-box">
                  <div className="about-feature-icon">
                    <IconComp size={20} />
                  </div>
                  <h4 className="about-feature-title">{feature.title}</h4>
                  <p className="about-feature-desc">{feature.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="about-bottom-actions">
            <Button
              variant="outline-mint"
              onClick={onContactClick}
              icon={ArrowRight}
              iconPosition="right"
            >
              Learn More About Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
