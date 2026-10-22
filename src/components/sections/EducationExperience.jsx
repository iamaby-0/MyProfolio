import React from 'react';
import { GraduationCap, Briefcase, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { educationData } from '../../data/education';
import { experienceData } from '../../data/experience';
import './EducationExperience.css';

export default function EducationExperience() {
  const internship = experienceData[0];

  return (
    <section id="experience" className="edu-exp-section">
      <div className="container">
        <SectionTitle
          title="Education & Experience"
          subtitle="Academic milestones and practical full-stack software engineering experience."
        />

        <div className="edu-exp-grid">
          {/* Education Card */}
          <motion.div
            className="edu-exp-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
          >
            <div className="card-top-header">
              <div className="card-top-icon">
                <GraduationCap size={20} />
              </div>
              <h3 className="card-top-title">Education</h3>
            </div>

            <div className="edu-timeline">
              {educationData.map((edu, idx) => (
                <div key={idx} className="edu-timeline-item">
                  <div className="edu-dot-line">
                    <div className={`edu-dot ${!edu.isPrimary ? 'muted' : ''}`} />
                    {idx < educationData.length - 1 && <div className="edu-line" />}
                  </div>

                  <div className="edu-content">
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <p className="edu-institution">{edu.institution}</p>
                    <div className="edu-details">
                      <span>{edu.duration}</span>
                      {edu.score && (
                        <span className="edu-badge-score">{edu.score}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
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
            <div className="card-top-header">
              <div className="card-top-icon">
                <Briefcase size={20} />
              </div>
              <h3 className="card-top-title">Experience</h3>
            </div>

            <div className="exp-body">
              <div>
                <h4 className="exp-role-title">{internship.role}</h4>
                <div className="exp-org-row">
                  <span className="exp-org">{internship.organization}</span>
                  <span className="exp-dates">{internship.duration}</span>
                </div>
                <p className="exp-location">{internship.location}</p>
              </div>

              <ul className="exp-bullet-list">
                {internship.points.map((point, index) => (
                  <li key={index} className="exp-bullet-item">
                    {point}
                  </li>
                ))}
              </ul>

              <div className="exp-cert-badge">
                <CheckCircle2 size={15} />
                <span>AICTE & EduSkills Verified Certification</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
