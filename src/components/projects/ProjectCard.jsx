import React from 'react';
import { ArrowRight, ExternalLink, Star } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import { TechIcons } from '../skills/TechIcons';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const {
    title,
    description,
    thumbnail,
    featured,
    technologies,
    tags,
    liveUrl,
    githubUrl,
    actionLabel
  } = project;

  const techList = technologies || tags || [];
  const primaryUrl = liveUrl || githubUrl;
  const isWebsite = !githubUrl && liveUrl;

  return (
    <article className="project-card">
      {/* 16:9 Thumbnail with subtle hover zoom */}
      <div className="project-thumb-wrapper">
        {featured && (
          <div className="project-featured-badge">
            <Star size={11} fill="currentColor" />
            <span>Featured</span>
          </div>
        )}

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
          {primaryUrl && (
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title}`}
              className="project-ext-icon"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>

        <p className="project-description">{description}</p>

        {/* Technology Badges */}
        <div className="project-tags">
          {techList.map((tech) => {
            const IconComp = TechIcons[tech];
            return (
              <span key={tech} className="project-tag">
                {IconComp && (
                  <span className="project-tag-icon">
                    <IconComp />
                  </span>
                )}
                <span>{tech}</span>
              </span>
            );
          })}
        </div>

        {/* Aligned Action Buttons */}
        <div className="project-actions">
          {primaryUrl && (
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn-demo"
            >
              <span>{actionLabel || (liveUrl ? 'Live Demo →' : 'View Source →')}</span>
            </a>
          )}

          {githubUrl && !isWebsite && liveUrl && (
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

