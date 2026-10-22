import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../projects/ProjectCard';
import { projectsData } from '../../data/projects';
import { profileData } from '../../data/profile';
import './FeaturedProjects.css';

export default function FeaturedProjects() {
  const handleViewAll = () => {
    window.open(profileData.socials.github.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="featured-projects-section">
      <div className="container">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of applications I've built and the problems they solve."
          linkText="View All Projects"
          onLinkClick={handleViewAll}
        />

        <div className="projects-grid">
          {projectsData.map((project, index) => (
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
