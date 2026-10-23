import React from 'react';
import { GraduationCap, Briefcase, ArrowRight, BookOpen, School, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { educationData } from '../../data/education';
import { internshipsData } from '../../data/experience';
import './EducationExperience.css';

const eduIcons = [GraduationCap, BookOpen, School];

export default function EducationExperience({ isAboutPage = false, onNavigate }) {
  const handleViewExperience = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('experience');
    } else {
      window.location.hash = '#experience';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className={`edu-exp-section ${isAboutPage ? 'about-variant' : ''}`}>
      <div className="container">
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
              <div className="card-header-brand">
                <span className="card-header-icon-box">
                  <GraduationCap size={18} />
                </span>
                <h3 className="card-top-title">Education</h3>
              </div>

              {isAboutPage && (
                <a
                  href="#journey"
                  className="section-link"
                  style={{ fontSize: '0.88rem' }}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector('.journey-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </a>
              )}
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
                            <span className="edu-score-text">{edu.score}</span>
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
              <div className="card-header-brand">
                <span className="card-header-icon-box">
                  <Briefcase size={18} />
                </span>
                <h3 className="card-top-title">Experience</h3>
              </div>

              <a
                href="#experience"
                className="section-link"
                style={{ fontSize: '0.88rem' }}
                onClick={handleViewExperience}
              >
                <span>View Details</span>
                <ArrowRight size={14} />
              </a>
            </div>

            <div className="exp-items-list">
              {internshipsData.map((internship, index) => (
                <div key={internship.id} className={`exp-entry ${index > 0 ? 'exp-entry-subsequent' : ''}`}>
                  <div className="exp-header-row">
                    <div className="exp-header-icon-circle">
                      <Briefcase size={18} />
                    </div>
                    <div className="exp-header-text">
                      <h4 className="exp-role-title">
                        {internship.title} <span className="exp-role-type">intern</span>
                      </h4>
                      <div className="exp-org-row">
                        <span className="exp-org">{internship.organization}</span>
                      </div>
                      <p className="exp-dates">
                        {internship.period} <span className="edu-divider">|</span> {internship.duration} · {internship.status}
                      </p>
                    </div>
                  </div>

                  <ul className="exp-bullet-list">
                    {index === 0 ? (
                      <>
                        <li className="exp-bullet-item">
                          Completed a 10-week virtual internship in Java Full Stack Development through the AICTE–EduSkills program.
                        </li>
                        <li className="exp-bullet-item">
                          Gained hands-on knowledge of Java, RESTful APIs, OOP, and relational databases.
                        </li>
                        <li className="exp-bullet-item">
                          Received verified official certificate from AICTE and EduSkills Academy.
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="exp-bullet-item">
                          Completed a 10-week virtual internship focused on full stack web development.
                        </li>
                        <li className="exp-bullet-item">
                          Gained practical skills in HTML, CSS, JavaScript, Node.js and database systems.
                        </li>
                        <li className="exp-bullet-item">
                          Received verified official certificate from AICTE and EduSkills.
                        </li>
                      </>
                    )}
                  </ul>

                  {internship.certificateLink && (
                    <a
                      href={internship.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="exp-cert-badge-link"
                      title="View Verified Certificate"
                    >
                      <ExternalLink size={13} />
                      <span>Verified Certificate</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
