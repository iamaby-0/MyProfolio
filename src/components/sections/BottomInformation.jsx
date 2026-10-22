import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Award,
  Send,
  Users,
  Globe,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { motion } from 'framer-motion';
import { educationData } from '../../data/education';
import { experienceData } from '../../data/experience';
import { achievementsData } from '../../data/achievements';
import { profileData } from '../../data/profile';
import './BottomInformation.css';

const achievementIcons = {
  Send: Send,
  Users: Users,
  Globe: Globe,
  Award: Award
};

export default function BottomInformation({ onContactClick }) {
  const currentExperience = experienceData[0];

  return (
    <section id="about" className="bottom-info-section">
      <div className="container">
        <div className="bottom-info-grid">
          {/* Card 1: Education */}
          <motion.div
            className="info-card"
            id="education"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
          >
            <div className="info-card-header">
              <h3 className="info-card-title">
                <span className="info-card-icon">
                  <GraduationCap size={20} />
                </span>
                <span>Education</span>
              </h3>
            </div>

            <div className="education-timeline">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className={`education-item ${!edu.isPrimary ? 'secondary' : ''}`}
                >
                  <div className="education-item-icon">
                    {edu.isPrimary ? (
                      <GraduationCap size={16} />
                    ) : (
                      <BookOpen size={15} />
                    )}
                  </div>
                  <div className="education-item-content">
                    <h4 className="education-degree">{edu.degree}</h4>
                    <p className="education-institution">{edu.institution}</p>
                    <p className="education-meta">
                      {edu.duration} {edu.score ? `• ${edu.score}` : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Professional Experience */}
          <motion.div
            className="info-card"
            id="experience"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            <div className="info-card-header">
              <h3 className="info-card-title">
                <span className="info-card-icon">
                  <Briefcase size={20} />
                </span>
                <span>Experience</span>
              </h3>
            </div>

            <div className="experience-role-header">
              <h4 className="experience-role">{currentExperience.role}</h4>
              <p className="experience-company">{currentExperience.organization}</p>
              <p className="experience-meta">
                {currentExperience.duration} | {currentExperience.location}
              </p>
            </div>

            <ul className="experience-bullets">
              {currentExperience.points.map((pt, i) => (
                <li key={i} className="experience-bullet-item">
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 3: Achievements */}
          <motion.div
            className="info-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.16 }}
          >
            <div className="info-card-header">
              <h3 className="info-card-title">
                <span className="info-card-icon">
                  <Award size={20} />
                </span>
                <span>Achievements</span>
              </h3>
            </div>

            <div className="achievements-list">
              {achievementsData.map((item, idx) => {
                const IconComponent = achievementIcons[item.icon] || Sparkles;
                return (
                  <div key={idx} className="achievement-item">
                    <div className="achievement-icon-box">
                      <IconComponent size={16} />
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">{item.title}</h4>
                      <p className="achievement-desc">{item.description}</p>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="achievement-link"
                        >
                          {item.linkLabel || item.link}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Card 4: Contact CTA */}
          <motion.div
            className="info-card contact-cta-card"
            id="contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.24 }}
          >
            <div>
              <h3 className="contact-cta-heading">
                Let's build something meaningful.
              </h3>
              <p className="contact-cta-desc">
                Have a project idea, opportunity, or just want to say hi? I'd love to hear from you.
              </p>
            </div>

            <div>
              <button
                type="button"
                className="contact-cta-btn"
                onClick={onContactClick}
              >
                <span>Get in Touch</span>
                <ArrowRight size={16} />
              </button>

              <div className="contact-details-list">
                <div className="contact-detail-row">
                  <Mail size={14} />
                  <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
                </div>
                <div className="contact-detail-row">
                  <MapPin size={14} />
                  <span>{profileData.location}</span>
                </div>
                <div className="contact-detail-row">
                  <Clock size={14} />
                  <span>{profileData.availabilityText}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
