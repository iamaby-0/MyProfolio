import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import { projectStats } from '../../data/projects';
import laptopImg from '../../assets/projects-hero-laptop.jpg';
import './ProjectsHero.css';

const statIcons = {
  "major-projects": FolderGit2,
  "technologies": Layers,
  "ai-integration": Sparkles,
  "open-source": GithubIcon
};

export default function ProjectsHero() {
  return (
    <section className="projects-hero-section">
      <div className="container">
        <div className="projects-hero-grid">
          {/* Left Column: Heading, Subtitle & Stats */}
          <motion.div
            className="projects-hero-left"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="projects-eyebrow">
              <span className="projects-eyebrow-dot">●</span>
              <span>MY PROJECTS</span>
            </div>

            <h1 className="projects-hero-heading">
              Projects I've <span className="highlight-mint">Built</span>
            </h1>

            <p className="projects-hero-desc">
              A collection of my personal and academic projects showcasing my skills in full-stack
              development, backend engineering and AI integration.
            </p>

            {/* 4 Compact Statistics Underneath */}
            <div className="projects-stats-row">
              {projectStats.map((stat, idx) => {
                const IconComp = statIcons[stat.id] || FolderGit2;
                return (
                  <motion.div
                    key={stat.id}
                    className="projects-stat-card"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                  >
                    <div className="projects-stat-icon-circle">
                      <IconComp size={18} />
                    </div>
                    <div className="projects-stat-info">
                      <span className="projects-stat-value">{stat.value}</span>
                      <span className="projects-stat-label">{stat.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Interactive Decorative Visual */}
          <motion.div
            className="projects-hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="projects-laptop-stage">
              {/* Handwritten Annotation Message */}
              <div className="projects-hero-annotation">
                <span className="projects-annotation-text">Building ideas into real products</span>
                <svg
                  className="projects-annotation-arrow"
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

              {/* Floating Technology Pills */}
              <div className="floating-tech-pill pill-react">
                <span className="pill-dot">●</span>
                <span>React</span>
              </div>

              <div className="floating-tech-pill pill-node">
                <span className="pill-dot">●</span>
                <span>Node.js</span>
              </div>

              <div className="floating-tech-pill pill-mongo">
                <span className="pill-dot">●</span>
                <span>MongoDB</span>
              </div>

              {/* Code Snippet Card */}
              <div className="projects-code-card">
                <div>
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-variable">projects</span> = [
                </div>
                <div style={{ paddingLeft: '14px' }}>
                  <span className="code-string">"Real World"</span>,
                </div>
                <div style={{ paddingLeft: '14px' }}>
                  <span className="code-string">"Problem Solving"</span>,
                </div>
                <div style={{ paddingLeft: '14px' }}>
                  <span className="code-string">"Continuous Learning"</span>,
                </div>
                <div>]</div>
              </div>

              {/* Laptop Graphic Canvas */}
              <div className="projects-laptop-wrapper">
                <div className="laptop-ambient-glow" />
                <img
                  src={laptopImg}
                  alt="Projects Code Development Preview"
                  className="projects-laptop-img"
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
