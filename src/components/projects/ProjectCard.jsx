import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const { title, description, thumbnail, tags, liveUrl, githubUrl } = project;

  return (
    <article className="project-card">
      {/* 16:9 Thumbnail with subtle hover zoom */}
      <div className="project-thumb-wrapper">
        <img
          src={thumbnail}
          alt={`${title} Interface Preview`}
          className="project-thumb"
          loading="lazy"
        />
        <div className="project-thumb-overlay" />
      </div>

      {/* Card Content */}
      <div className="project-body">
        <div className="project-header-row">
          <h3 className="project-title">{title}</h3>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} live demo`}
              className="project-ext-icon"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>

        <p className="project-description">{description}</p>

        {/* Technology Badges */}
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Aligned Action Buttons */}
        <div className="project-actions">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn-demo"
            >
              <span>Live Demo</span>
              <ArrowRight size={14} />
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn-github"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
