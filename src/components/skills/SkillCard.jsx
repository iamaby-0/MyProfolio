import React from 'react';
import { TechIcons } from './TechIcons';
import { Code } from 'lucide-react';
import './SkillCard.css';

export default function SkillCard({ skill }) {
  const IconComponent = TechIcons[skill.name] || (() => <Code size={26} color={skill.color || '#35E9A0'} />);

  return (
    <div className="skill-card" title={`${skill.name} (${skill.category || 'Technology'})`}>
      <div className="skill-icon-box">
        <IconComponent />
      </div>
      <span className="skill-label">{skill.name}</span>
    </div>
  );
}
