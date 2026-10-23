import React from 'react';
import {
  Code,
  Server,
  Database,
  Monitor,
  Wrench,
  BookOpen
} from 'lucide-react';
import SkillCard from './SkillCard';
import './SkillCategoryCard.css';

const categoryIcons = {
  Code,
  Server,
  Database,
  Monitor,
  Wrench,
  BookOpen
};

export default function SkillCategoryCard({ category }) {
  const IconComponent = categoryIcons[category.icon] || Code;

  return (
    <div className="skill-cat-card" data-cat={category.id}>
      {/* Category Header */}
      <div className="skill-cat-header">
        <div className="skill-cat-title-row">
          <div className="skill-cat-title-left">
            <div className="skill-cat-icon-wrap">
              <IconComponent size={20} className="skill-cat-icon" />
            </div>
            <h2 className="skill-cat-title">{category.title}</h2>
          </div>
          {category.count && (
            <span className="skill-cat-count-pill">{category.count}</span>
          )}
        </div>
        <p className="skill-cat-desc">{category.description}</p>
      </div>

      {/* Internal Grid of Skills */}
      <div
        className={`skill-cat-grid ${
          category.gridColumns === 4 ? 'grid-cols-4-custom' : 'grid-cols-3-custom'
        }`}
      >
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
