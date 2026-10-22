import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import SkillCard from '../skills/SkillCard';
import { skillsData } from '../../data/skills';
import './TechStack.css';

const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Databases', 'Tools'];

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAllCategories, setShowAllCategories] = useState(false);

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData.featured
      : skillsData.featured.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="tech-stack-section">
      <div className="container">
        <SectionTitle
          title="Tech Stack"
          subtitle="Technologies and tools I work with."
          linkText={showAllCategories ? 'Show Grid View' : 'View All Skills'}
          onLinkClick={() => setShowAllCategories(!showAllCategories)}
        />

        {/* Filter Tabs */}
        {!showAllCategories && (
          <div className="tech-tabs-row" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`tech-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
                role="tab"
                aria-selected={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Featured Tech Grid */}
        {!showAllCategories ? (
          <div className="tech-grid">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </div>
        ) : (
          /* Detailed Categorized View */
          <motion.div
            className="tech-categories-container"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {skillsData.categories.map((category) => (
              <div key={category.name} className="tech-cat-card">
                <h3 className="tech-cat-title">
                  <span>◆</span>
                  <span>{category.name}</span>
                </h3>
                <div className="tech-cat-items">
                  {category.items.map((item) => (
                    <span key={item} className="tech-cat-item-badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
