import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import SkillCard from '../skills/SkillCard';
import './TechStack.css';

// Exact 12 primary technologies matching reference screenshot row
const homeTechList = [
  { name: 'Java', icon: 'Java', color: '#E76F00' },
  { name: 'JavaScript', icon: 'JavaScript', color: '#F7DF1E' },
  { name: 'C++', icon: 'C++', color: '#00599C' },
  { name: 'React.js', icon: 'React.js', color: '#61DAFB' },
  { name: 'Node.js', icon: 'Node.js', color: '#339933' },
  { name: 'Express.js', icon: 'Express.js', color: '#A5B4B8' },
  { name: 'MongoDB', icon: 'MongoDB', color: '#47A248' },
  { name: 'MySQL', icon: 'MySQL', color: '#4479A1' },
  { name: 'Git', icon: 'Git', color: '#F05032' },
  { name: 'GitHub', icon: 'GitHub', color: '#F1F5F4' },
  { name: 'VS Code', icon: 'VS Code', color: '#007ACC' },
  { name: 'Android Studio', icon: 'Android Studio', color: '#3DDC84' }
];

export default function TechStack({ onNavigate }) {
  const handleViewAllSkills = () => {
    if (onNavigate) {
      onNavigate('skills');
    } else {
      window.location.hash = '#skills';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="tech-stack-section">
      <div className="container">
        <SectionTitle
          title="Tech Stack"
          subtitle="Technologies and tools I use to build software."
          linkText="View All Skills"
          onLinkClick={handleViewAllSkills}
        />

        <div className="tech-grid">
          {homeTechList.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
