import React from 'react';
import { TechIcons } from './TechIcons';
import { Code } from 'lucide-react';
import './SkillCard.css';

const DefaultSkillIcon = () => <Code size={26} color="#35E9A0" />;

export default function SkillCard({ skill }) {
  const IconComponent =
    TechIcons[skill.icon] ||
    TechIcons[skill.name] ||
    DefaultSkillIcon;

  return (
    <div
      className="skill-card"
      title={skill.badge ? `${skill.name} (${skill.badge})` : skill.name}
    >
      <div className="skill-icon-box">
        <IconComponent />
      </div>
      <span className="skill-label">{skill.name}</span>
      {skill.badge && <span className="skill-badge-tag">{skill.badge}</span>}
    </div>
  );
}
