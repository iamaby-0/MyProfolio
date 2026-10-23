import React from 'react';
import {
  BookOpen,
  CheckCircle2,
  Award,
  GraduationCap,
  Briefcase,
  Trophy
} from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { journeyMilestones } from '../../data/journey';
import './JourneyTimeline.css';

const milestoneIcons = {
  BookOpen: BookOpen,
  CheckCircle: CheckCircle2,
  Award: Award,
  GraduationCap: GraduationCap,
  Briefcase: Briefcase,
  Trophy: Trophy
};

export default function JourneyTimeline() {
  return (
    <section className="journey-section">
      <div className="container">
        <SectionTitle
          title="My Journey"
          subtitle="A timeline of my academic and professional learning journey"
        />

        <div className="timeline-track-container">
          <div className="timeline-horizontal-line" />

          <div className="timeline-horizontal-grid">
            {journeyMilestones.map((item, index) => {
              const IconComp = milestoneIcons[item.icon] || GraduationCap;
              return (
                <motion.div
                  key={item.id || `${item.year}-${index}`}
                  className="timeline-step-item"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                >
                  <div className="timeline-badge-wrapper">
                    <span className="timeline-year-pill">{item.year}</span>
                    <div className="timeline-circle-marker" title={item.title}>
                      <IconComp size={13} />
                    </div>
                  </div>

                  <div className="timeline-step-card">
                    <h4 className="timeline-step-title">{item.title}</h4>
                    <p className="timeline-step-desc">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
