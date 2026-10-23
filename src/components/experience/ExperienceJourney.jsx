import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, BookOpen, TrendingUp } from 'lucide-react';
import { developmentJourneyData } from '../../data/experience';
import './ExperienceJourney.css';

const journeyIcons = {
  Code,
  Globe,
  BookOpen
};

export default function ExperienceJourney() {
  return (
    <section className="exp-journey-section">
      <div className="container">
        {/* Section Header */}
        <div className="exp-journey-header">
          <div className="exp-journey-title-row">
            <div className="exp-journey-icon-wrap">
              <TrendingUp size={20} />
            </div>
            <h2 className="exp-journey-title">My Development Journey</h2>
          </div>
          <p className="exp-journey-desc">
            Continuously strengthening my software development foundation through structured learning and practical development.
          </p>
        </div>

        {/* 3 Neutral Cards */}
        <div className="exp-journey-grid">
          {developmentJourneyData.map((item, index) => {
            const IconComp = journeyIcons[item.icon] || Code;
            return (
              <motion.div
                key={item.id}
                className="exp-journey-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="exp-journey-icon-box">
                  <IconComp size={22} />
                </div>
                <div className="exp-journey-info">
                  <h3 className="exp-journey-card-title">{item.title}</h3>
                  <p className="exp-journey-card-desc">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
