import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { journeyMilestones } from '../../data/journey';
import './JourneyTimeline.css';

export default function JourneyTimeline() {
  return (
    <section className="journey-section">
      <div className="container">
        <SectionTitle
          title="My Journey"
          subtitle="A timeline of my academic and professional journey"
        />

        <div className="timeline-track-container">
          <div className="timeline-horizontal-line" />

          <div className="timeline-horizontal-grid">
            {journeyMilestones.map((item, index) => (
              <motion.div
                key={item.year}
                className="timeline-step-item"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <div className="timeline-badge-wrapper">
                  <span className="timeline-year-pill">{item.year}</span>
                  <div className="timeline-circle-marker" />
                </div>

                <div className="timeline-step-card">
                  <h4 className="timeline-step-title">{item.title}</h4>
                  <p className="timeline-step-desc">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
