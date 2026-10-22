import React from 'react';
import { GraduationCap, Briefcase, ArrowRight, BookOpen, School } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { educationData } from '../../data/education';
import { experienceData } from '../../data/experience';
import './EducationExperience.css';

const eduIcons = [GraduationCap, BookOpen, School];

export default function EducationExperience({ isAboutPage = false }) {
  const internship = experienceData[0];

  return (
    <section id="experience" className={`edu-exp-section ${isAboutPage ? 'about-variant' : ''}`}>
      <div className="container">
        {!isAboutPage && (
          <SectionTitle
            title="Education"
            subtitle="Academic milestones and practical full-stack software engineering experience."
          />
        )}

        <div className="edu-exp-grid">
          {/* Education Card */}
          <motion.div
            className="edu-exp-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
          >
            <div className="card-top-header" style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="card-header-dot">◆</span>
                <h3 className="card-top-title">Education</h3>
              </div>

              <a
                href="#education"
                className="section-link"
                style={{ fontSize: '0.84rem' }}
                onClick={(e) => e.preventDefault()}
              >
                <span>View Details</span>
                <ArrowRight size={14} />
              </a>
            </div>

            <div className="edu-items-list">
              {educationData.map((edu, idx) => {
                const IconComp = eduIcons[idx] || GraduationCap;
                return (
                  <div key={idx} className="edu-item-row">
                    <div className="edu-item-icon-circle">
                      <IconComp size={18} />
                    </div>

                    <div className="edu-content">
                      <h4 className="edu-degree">{edu.degree}</h4>
                      <p className="edu-institution">{edu.institution}</p>
                      <div className="edu-details">
                        <span>{edu.duration}</span>
                        {edu.score && (
                          <>
                            <span className="edu-divider">|</span>
                            <span className="edu-score-text">
                              {edu.score.includes('CGPA') ? edu.score : `${edu.score}`}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            className="edu-exp-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="card-top-header" style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="card-header-dot">◆</span>
                <h3 className="card-top-title">Experience</h3>
              </div>

              <a
                href="#experience"
                className="section-link"
                style={{ fontSize: '0.84rem' }}
                onClick={(e) => e.preventDefault()}
              >
                <span>View Details</span>
                <ArrowRight size={14} />
              </a>
            </div>

            <div className="exp-body">
              <div className="exp-header-row">
                <div className="exp-header-icon-circle">
                  <Briefcase size={18} />
                </div>
                <div>
                  <h4 className="exp-role-title">{internship.role}</h4>
                  <div className="exp-org-row">
                    <span className="exp-org">{internship.organization}</span>
                  </div>
                  <p className="exp-dates">
                    {internship.duration} <span className="edu-divider">|</span> {internship.location}
                  </p>
                </div>
              </div>

              <ul className="exp-bullet-list">
                {internship.points.map((point, index) => (
                  <li key={index} className="exp-bullet-item">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
