import React from 'react';
import { ArrowRight, Download, Code2, Cpu, BookOpen, Users2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import SocialLinks from '../common/SocialLinks';
import { profileData } from '../../data/profile';
import avatarImg from '../../assets/developer-avatar.jpg';
import './Hero.css';

const qualityIcons = {
  Code2: Code2,
  Cpu: Cpu,
  BookOpen: BookOpen,
  Users2: Users2
};

export default function Hero({ onProjectsClick }) {
  const {
    eyebrow,
    heading,
    highlightedName,
    supportingRole,
    summary,
    qualities,
    codeSnippet,
    resumePath,
    resumeDriveUrl
  } = profileData;

  const headingBefore = heading.replace(highlightedName, '');

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Introduction */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* Top Indicator */}
            <div className="hero-badge-row">
              <span className="hero-badge">
                <span className="hero-badge-diamond">◆</span>
                {eyebrow || 'SOFTWARE DEVELOPER • INDIA'}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-heading">
              {headingBefore}
              <span className="hero-heading-name">{highlightedName}</span>
            </h1>

            {/* Subtitle */}
            <h2 className="hero-subtitle">
              {supportingRole}
            </h2>

            {/* Professional Summary */}
            <p className="hero-summary">{summary}</p>

            {/* Primary & Secondary CTAs */}
            <div className="hero-cta-group">
              <Button
                variant="primary"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  if (onProjectsClick) onProjectsClick();
                  const elem = document.getElementById('projects');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                icon={ArrowRight}
                iconPosition="right"
              >
                View My Projects
              </Button>

              <Button
                variant="secondary"
                href={resumePath || resumeDriveUrl}
                download="Abrar_Ahmad_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                icon={Download}
                iconPosition="left"
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links Row */}
            <div className="hero-socials-wrapper">
              <SocialLinks showLabels={true} />
            </div>
          </motion.div>

          {/* Right Column: Developer Visual Area */}
          <motion.div
            className="hero-visual-wrapper"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="hero-portrait-stage">
              {/* Mint Glow Background Rings */}
              <div className="hero-glow-ring"></div>
              <div className="hero-glow-ring outer"></div>

              {/* Hand-drawn style annotation */}
              <div className="hero-annotation">
                <span className="hero-annotation-text">Turning ideas into reality</span>
                <svg
                  className="hero-annotation-svg"
                  viewBox="0 0 60 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 5 30 Q 30 10 50 25"
                    stroke="#35E9A0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 44 26 L 52 26 L 49 18"
                    stroke="#35E9A0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Developer Portrait */}
              <div className="hero-portrait-container">
                <img
                  src={avatarImg}
                  alt="Abrar Ahmad Developer Avatar"
                  className="hero-portrait-img"
                  loading="eager"
                  width="280"
                  height="310"
                />
              </div>

              {/* Code Snippet Card */}
              <div className="hero-code-card">
                <div>
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-variable">developer</span> = &#123;
                </div>
                <div style={{ paddingLeft: '14px' }}>
                  <span className="code-property">name:</span>{' '}
                  <span className="code-string">"{codeSnippet.name}"</span>,
                </div>
                <div style={{ paddingLeft: '14px' }}>
                  <span className="code-property">role:</span>{' '}
                  <span className="code-string">"{codeSnippet.role}"</span>,
                </div>
                <div style={{ paddingLeft: '14px' }}>
                  <span className="code-property">skills:</span> [
                  <span className="code-string">"{codeSnippet.skills[0]}"</span>,{' '}
                  <span className="code-string">"{codeSnippet.skills[1]}"</span>,{' '}
                  <span className="code-string">"{codeSnippet.skills[2]}"</span>],
                </div>
                <div style={{ paddingLeft: '14px' }}>
                  <span className="code-property">goal:</span>{' '}
                  <span className="code-string">"{codeSnippet.goal}"</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Professional Qualities List */}
              <div className="hero-qualities">
                {qualities.map((q) => {
                  const IconComp = qualityIcons[q.icon] || Code2;
                  return (
                    <div key={q.label} className="hero-quality-pill">
                      <span className="hero-quality-icon">
                        <IconComp size={15} />
                      </span>
                      <span>{q.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
