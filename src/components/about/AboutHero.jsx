import React from 'react';
import { Cpu, BookOpen, Users2, ShieldCheck, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { XIcon, InstagramIcon, GithubIcon, LeetCodeIcon } from '../common/BrandIcons';
import { profileData } from '../../data/profile';
import avatarImg from '../../assets/developer-avatar.png';
import './AboutHero.css';

export default function AboutHero() {
  const { socials } = profileData;

  const capabilities = [
    { label: "Problem Solver", icon: Cpu },
    { label: "Continuous Learner", icon: BookOpen },
    { label: "Team Player", icon: Users2 },
    { label: "Adaptable", icon: ShieldCheck }
  ];

  return (
    <section className="about-hero-section">
      <div className="container">
        <div className="about-hero-grid">
          {/* Left Column: Biography */}
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="about-eyebrow-badge">
              <span className="section-bullet">•</span>
              <span>ABOUT ME</span>
            </div>

            <h1 className="about-hero-heading">More About Me</h1>

            <h2 className="about-hero-subtitle">
              Get to know the person behind the code.
            </h2>

            <p className="about-hero-bio">
              I'm Abrar Ahmad, a Computer Science Engineering graduate from Galgotias University.
              I enjoy building practical software, solving real-world problems, and exploring new
              technologies. My focus is on backend development, full-stack applications, databases,
              and AI-powered solutions.
            </p>

            {/* Social Links Row */}
            <div className="about-hero-socials">
              <a
                href={socials.x.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-item"
                title="X"
                aria-label="X"
              >
                <XIcon size={16} />
                <span className="social-label">X</span>
              </a>

              <a
                href={socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-item"
                title="Instagram"
              >
                <InstagramIcon size={16} />
                <span className="social-label">Instagram</span>
              </a>

              <a
                href={socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-item"
                title="GitHub"
              >
                <GithubIcon size={16} />
                <span className="social-label">GitHub</span>
              </a>

              <a
                href={socials.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-item"
                title="LeetCode"
              >
                <LeetCodeIcon size={16} />
                <span className="social-label">LeetCode</span>
              </a>

              <a
                href={socials.email.url}
                className="social-link-item"
                title="Email"
              >
                <Mail size={16} />
                <span className="social-label">Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Portrait & Code Card + Capabilities */}
          <motion.div
            className="about-visual-wrapper"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="about-visual-stage">
              {/* Left Sub-column: Portrait with Glow & Hand-drawn annotation */}
              <div className="about-portrait-col">
                <div className="about-glow-ring" />

                {/* Annotation "Turning ideas into reality" */}
                <div className="about-annotation">
                  <span className="about-annotation-text">Turning ideas into reality</span>
                  <svg
                    className="about-annotation-svg"
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

                {/* Portrait Image */}
                <div className="about-portrait-box">
                  <img
                    src={avatarImg}
                    alt="Abrar Ahmad Portrait"
                    className="about-portrait-img"
                    width="260"
                    height="300"
                  />
                </div>
              </div>

              {/* Right Sub-column: Code Card on top, 4 vertical capabilities below */}
              <div className="about-meta-col">
                {/* Code Card */}
                <div className="about-code-card">
                  <div>
                    <span className="code-keyword">const</span>{' '}
                    <span className="code-variable">aboutMe</span> = &#123;
                  </div>
                  <div style={{ paddingLeft: '14px' }}>
                    <span className="code-property">name:</span>{' '}
                    <span className="code-string">"Abrar Ahmad"</span>,
                  </div>
                  <div style={{ paddingLeft: '14px' }}>
                    <span className="code-property">role:</span>{' '}
                    <span className="code-string">"Software Developer"</span>,
                  </div>
                  <div style={{ paddingLeft: '14px' }}>
                    <span className="code-property">location:</span>{' '}
                    <span className="code-string">"Greater Noida, India"</span>,
                  </div>
                  <div style={{ paddingLeft: '14px' }}>
                    <span className="code-property">passion:</span>{' '}
                    <span className="code-string">"Building useful products"</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* 4 Capabilities List - Stacked Vertically */}
                <div className="about-capabilities-vertical">
                  {capabilities.map((cap) => {
                    const IconComp = cap.icon;
                    return (
                      <div key={cap.label} className="about-cap-pill">
                        <span className="about-cap-icon-circle">
                          <IconComp size={15} />
                        </span>
                        <span className="about-cap-text">{cap.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
