import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  TrendingUp,
  BookOpen,
  Wrench,
  Sprout
} from 'lucide-react';
import { experienceHeroStats } from '../../data/experience';
import laptopImg from '../../assets/projects-hero-laptop.jpg';
import './ExperienceHero.css';

const statIcons = {
  internships: GraduationCap,
  duration: Calendar,
  focus: TrendingUp
};

export default function ExperienceHero() {
  return (
    <section className="exp-hero-section">
      <div className="container">
        <div className="exp-hero-grid">
          {/* Left Column: Heading, Subtitle, Description & 3 Stats */}
          <motion.div
            className="exp-hero-left"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="exp-eyebrow">
              <span className="exp-eyebrow-dot">●</span>
              <span>MY JOURNEY</span>
            </div>

            <h1 className="exp-hero-heading">
              Experience & <span className="highlight-mint">Internships</span>
            </h1>

            <p className="exp-hero-subtitle">
              Building my foundation in software development through structured virtual internships, hands-on learning, and continuous technical growth.
            </p>

            <p className="exp-hero-desc">
              My internship experience includes Java full-stack development and web full-stack development through the AICTE – EduSkills virtual internship program, where I gained practical knowledge and built real-world development skills.
            </p>

            {/* 3 Summary Cards */}
            <div className="exp-stats-row">
              {experienceHeroStats.map((stat, idx) => {
                const IconComp = statIcons[stat.id] || GraduationCap;
                return (
                  <motion.div
                    key={stat.id}
                    className="exp-stat-card"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                  >
                    <div className="exp-stat-icon-circle">
                      <IconComp size={20} />
                    </div>
                    <div className="exp-stat-info">
                      <span className="exp-stat-value">{stat.value}</span>
                      <span className="exp-stat-title">{stat.title}</span>
                      <span className="exp-stat-sub">{stat.subtitle}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Interactive Decorative Visual */}
          <motion.div
            className="exp-hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="exp-laptop-stage">
              {/* Handwritten Annotation */}
              <div className="exp-hero-annotation">
                <span className="exp-annotation-text">Turning Learning into Real Opportunities</span>
                <svg
                  className="exp-annotation-arrow"
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

              {/* Floating Pills on Left of Laptop */}
              <div className="exp-floating-pill pill-learn">
                <BookOpen size={14} className="exp-pill-icon" />
                <span>Learn</span>
              </div>

              <div className="exp-floating-pill pill-build">
                <Wrench size={14} className="exp-pill-icon" />
                <span>Build</span>
              </div>

              <div className="exp-floating-pill pill-grow">
                <Sprout size={14} className="exp-pill-icon" />
                <span>Grow</span>
              </div>

              {/* Floating Technology Badges below laptop */}
              <div className="exp-tech-stack-badges">
                <span className="exp-stack-badge">Java</span>
                <span className="exp-stack-badge">Web Development</span>
                <span className="exp-stack-badge">Problem Solving</span>
              </div>

              {/* Code Snippet Card matching screenshot */}
              <div className="exp-code-editor-card">
                <div className="exp-code-header">
                  <span className="exp-dot dot-red" />
                  <span className="exp-dot dot-yellow" />
                  <span className="exp-dot dot-green" />
                  <span className="exp-filename">developer.js</span>
                </div>
                <div className="exp-code-body">
                  <div>
                    <span className="code-kw">const</span>{' '}
                    <span className="code-var">developer</span> = &#123;
                  </div>
                  <div className="code-indent">
                    <span className="code-prop">name:</span>{' '}
                    <span className="code-str">"Abrar Ahmad"</span>,
                  </div>
                  <div className="code-indent">
                    <span className="code-prop">role:</span>{' '}
                    <span className="code-str">"Java & Full Stack Developer"</span>,
                  </div>
                  <div className="code-indent">
                    <span className="code-prop">learn:</span> [
                    <span className="code-str">"Build"</span>,{' '}
                    <span className="code-str">"Learn"</span>,{' '}
                    <span className="code-str">"Improve"</span>],
                  </div>
                  <div className="code-indent">
                    <span className="code-prop">goal:</span>{' '}
                    <span className="code-str">"Real-world Impact"</span>
                  </div>
                  <div>&#125;;</div>
                </div>
              </div>

              {/* Laptop Graphic Canvas */}
              <div className="exp-laptop-wrapper">
                <div className="exp-laptop-ambient-glow" />
                <img
                  src={laptopImg}
                  alt="Abrar Ahmad Developer Laptop Preview"
                  className="exp-laptop-img"
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
