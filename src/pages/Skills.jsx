import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SkillsHero from '../components/skills/SkillsHero';
import SkillCategoryCard from '../components/skills/SkillCategoryCard';
import SkillsCTA from '../components/skills/SkillsCTA';
import ContactModal from '../components/common/ContactModal';
import { skillCategories } from '../data/skills';
import './Skills.css';

export default function Skills({ onNavigate }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContact = () => setIsContactModalOpen(true);
  const closeContact = () => setIsContactModalOpen(false);

  return (
    <div className="skills-page-root">
      {/* Section 1: Shared Navbar */}
      <Navbar
        currentPage="skills"
        onNavigate={onNavigate}
        onContactClick={openContact}
      />

      <main>
        {/* Section 2: Skills Hero & Statistics */}
        <SkillsHero />

        {/* Section 3: 6 Category Cards Grid */}
        <section className="skills-categories-section">
          <div className="container">
            <div className="skills-categories-grid">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <SkillCategoryCard category={category} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Contact Call to Action */}
        <SkillsCTA onContactClick={openContact} />
      </main>

      {/* Section 5: Shared Footer */}
      <Footer
        currentPage="skills"
        onNavigate={onNavigate}
        onContactClick={openContact}
      />

      {/* Interactive Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContact} />
    </div>
  );
}
