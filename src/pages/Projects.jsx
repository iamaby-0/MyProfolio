import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SearchX, RotateCcw } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProjectsHero from '../components/projects/ProjectsHero';
import ProjectToolbar from '../components/projects/ProjectToolbar';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectsCTA from '../components/projects/ProjectsCTA';
import ContactModal from '../components/common/ContactModal';
import { projectsData } from '../data/projects';
import './Projects.css';

export default function Projects({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContact = () => setIsContactModalOpen(true);
  const closeContact = () => setIsContactModalOpen(false);

  // Combined search and category filtering
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // Category match
      const matchesCategory =
        activeCategory === 'All' ||
        (project.categories && project.categories.includes(activeCategory));

      // Search match
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase().trim();

      const titleMatch = project.title.toLowerCase().includes(query);
      const descMatch = project.description.toLowerCase().includes(query);
      const techMatch =
        project.technologies &&
        project.technologies.some((t) => t.toLowerCase().includes(query));
      const categoryMatch =
        project.categories &&
        project.categories.some((c) => c.toLowerCase().includes(query));

      return titleMatch || descMatch || techMatch || categoryMatch;
    });
  }, [activeCategory, searchQuery]);

  const handleClearFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="projects-page-root">
      {/* Section 1: Shared Navbar */}
      <Navbar
        currentPage="projects"
        onNavigate={onNavigate}
        onContactClick={openContact}
      />

      <main>
        {/* Section 2: Projects Hero & Section 3: Project Statistics */}
        <ProjectsHero />

        {/* Section 4: Filter & Search Toolbar + Section 5: Projects Grid */}
        <section className="projects-grid-section">
          <div className="container">
            <ProjectToolbar
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onClearSearch={() => setSearchQuery('')}
            />

            {filteredProjects.length > 0 ? (
              <div className="projects-main-grid">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="projects-empty-state">
                <div className="empty-state-icon-box">
                  <SearchX size={26} />
                </div>
                <h3 className="empty-state-title">No projects found</h3>
                <p className="empty-state-desc">
                  Try another search or choose a different category to explore my work.
                </p>
                <button
                  type="button"
                  className="empty-state-clear-btn"
                  onClick={handleClearFilters}
                >
                  <RotateCcw size={14} />
                  <span>Clear Filters</span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Section 6: Collaboration CTA */}
        <ProjectsCTA onContactClick={openContact} />
      </main>

      {/* Section 7: Shared Footer */}
      <Footer
        currentPage="projects"
        onNavigate={onNavigate}
        onContactClick={openContact}
      />

      {/* Interactive Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContact} />
    </div>
  );
}
