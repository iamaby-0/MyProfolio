import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../projects/ProjectCard';
import { projectsData } from '../../data/projects';
import { profileData } from '../../data/profile';
import './FeaturedProjects.css';

export default function FeaturedProjects({ onNavigate }) {
  const handleViewAll = () => {
    if (onNavigate) {
      onNavigate('projects');
    } else {
      window.location.hash = '#projects';
    }
  };

  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <section id="projects" className="featured-projects-section">
      <div className="container">
        <SectionTitle
          title="Featured Projects"
          subtitle="Selected applications showcasing my work in full-stack development, backend engineering and AI integration."
          linkText="View All Projects"
          onLinkClick={handleViewAll}
        />

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
