import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Cpu,
  BookOpen,
  TrendingUp,
  Terminal,
  Sparkles,
  Boxes
} from 'lucide-react';
import { skillsHeroStats } from '../../data/skills';
import laptopImg from '../../assets/projects-hero-laptop.jpg';
import './SkillsHero.css';

const statIcons = {
  technologies: Code2,
  fullstack: Cpu,
  'core-cs': BookOpen,
  continuous: TrendingUp
};

export default function SkillsHero() {
  return (
    <section className="skills-hero-section">
      <div className="container">
        <div className="skills-hero-grid">
          {/* Left Column: Heading, Subtitle, Description & Stats */}
          <motion.div
            className="skills-hero-left"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="skills-eyebrow">
              <span className="skills-eyebrow-dot">●</span>
              <span>MY SKILLS</span>
            </div>

            <h1 className="skills-hero-heading">
              Technical <span className="highlight-mint">Skills & Tools</span>
            </h1>

            <p className="skills-hero-subtitle">
              Technologies, tools and concepts I use to build real-world applications.
            </p>

            <p className="skills-hero-desc">
              I focus on Java and backend development, RESTful APIs, database systems, and AI integrations. I enjoy building scalable applications, designing reliable services, and learning modern technologies to solve real-world problems.
            </p>

            {/* 4 Compact Statistics Cards */}
            <div className="skills-stats-row">
              {skillsHeroStats.map((stat, idx) => {
                const IconComp = statIcons[stat.id] || Code2;
                return (
                  <motion.div
                    key={stat.id}
                    className="skills-stat-card"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                  >
                    <div className="skills-stat-icon-circle">
                      <IconComp size={18} />
                    </div>
                    <div className="skills-stat-info">
                      <span className="skills-stat-value">{stat.value}</span>
                      <span className="skills-stat-label">{stat.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Code Editor, Laptop Illustration & Floating Badges */}
          <motion.div
            className="skills-hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="skills-laptop-stage">
              {/* Handwritten Decorative Annotation */}
              <div className="skills-hero-annotation">
                <span className="skills-annotation-text">Building Ideas into Real Products</span>
                <svg
                  className="skills-annotation-arrow"
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

              {/* Floating Technology Pills on Left of Laptop */}
              <div className="skills-floating-pill pill-backend">
                <Terminal size={14} className="pill-icon" />
                <span>Backend Development</span>
              </div>

              <div className="skills-floating-pill pill-ai">
                <Sparkles size={14} className="pill-icon" />
                <span>AI Integration</span>
              </div>

              <div className="skills-floating-pill pill-systems">
                <Boxes size={14} className="pill-icon" />
                <span>Scalable Systems</span>
              </div>

              {/* Central Code Snippet Overlay matching reference */}
              <div className="skills-code-editor-card">
                <div className="code-editor-header">
                  <span className="editor-dot dot-red" />
                  <span className="editor-dot dot-yellow" />
                  <span className="editor-dot dot-green" />
                  <span className="editor-filename">developer.js</span>
                </div>
                <div className="code-editor-body">
                  <div>
                    <span className="code-kw">const</span>{' '}
                    <span className="code-var">developer</span> = &#123;
                  </div>
                  <div className="code-indent">
                    <span className="code-prop">name:</span>{' '}
                    <span className="code-str">"Abrar Ahmad"</span>,
                  </div>
                  <div className="code-indent">
                    <span className="code-prop">skills:</span> [
                    <span className="code-str">"Java"</span>,{' '}
                    <span className="code-str">"Node.js"</span>,{' '}
                    <span className="code-str">"React"</span>],
                  </div>
                  <div className="code-indent">
                    <span className="code-prop">focus:</span>{' '}
                    <span className="code-str">"Building real-world solutions"</span>,
                  </div>
                  <div className="code-indent">
                    <span className="code-prop">goal:</span>{' '}
                    <span className="code-str">"Learn, Build, Grow"</span>
                  </div>
                  <div>&#125;;</div>
                </div>
              </div>

              {/* Laptop Graphic Canvas */}
              <div className="skills-laptop-wrapper">
                <div className="skills-laptop-ambient-glow" />
                <img
                  src={laptopImg}
                  alt="Developer Code Environment"
                  className="skills-laptop-img"
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
