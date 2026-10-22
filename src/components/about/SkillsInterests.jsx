import React from 'react';
import {
  Server,
  Layout,
  Sparkles,
  Globe,
  Network,
  Zap,
  BookOpen,
  Rocket,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { TechIcons } from '../skills/TechIcons';
import { GithubIcon } from '../common/BrandIcons';
import { interestsData } from '../../data/interests';
import './SkillsInterests.css';

const interestIcons = {
  Server: Server,
  Layout: Layout,
  Sparkles: Sparkles,
  Globe: Globe,
  Network: Network,
  Github: GithubIcon
};

const driveIcons = {
  Zap: Zap,
  BookOpen: BookOpen,
  Rocket: Rocket
};

const top8Skills = [
  'Java',
  'JavaScript',
  'C++',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MySQL'
];

export default function SkillsInterests({ onNavigate }) {
  return (
    <section className="skills-interests-section">
      <div className="container">
        <SectionTitle
          title="Skills & Interests"
          subtitle="Technologies I work with and areas I enjoy exploring"
        />

        <div className="skills-interests-grid">
          {/* Card A: Core Skills */}
          <motion.div
            className="si-panel-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <h3 className="si-panel-heading">Core Skills</h3>
              <div className="core-skills-mini-grid">
                {top8Skills.map((tech) => {
                  const IconComp = TechIcons[tech] || TechIcons.Java;
                  return (
                    <div key={tech} className="core-mini-item" title={tech}>
                      <IconComp />
                      <span className="core-mini-label">{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <a
              href="#skills"
              className="si-view-all-link"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) {
                  onNavigate('home', 'skills');
                } else {
                  window.location.hash = '#skills';
                }
              }}
            >
              <span>View All Skills</span>
              <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Card B: Areas of Interest */}
          <motion.div
            className="si-panel-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div>
              <h3 className="si-panel-heading">Areas of Interest</h3>
              <div className="interests-box-grid">
                {interestsData.areasOfInterest.map((item) => {
                  const IconComp = interestIcons[item.icon] || Globe;
                  return (
                    <div key={item.name} className="interest-item-box">
                      <div className="interest-item-icon">
                        <IconComp size={20} />
                      </div>
                      <span className="interest-item-title">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Card C: What Drives Me */}
          <motion.div
            className="si-panel-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div>
              <h3 className="si-panel-heading">What Drives Me</h3>
              <div className="drives-list">
                {interestsData.whatDrivesMe.map((item) => {
                  const IconComp = driveIcons[item.icon] || Zap;
                  return (
                    <div key={item.title} className="drive-item">
                      <div className="drive-icon-box">
                        <IconComp size={18} />
                      </div>
                      <div className="drive-info">
                        <h4 className="drive-title">{item.title}</h4>
                        <p className="drive-desc">{item.description}</p>
                      </div>
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
