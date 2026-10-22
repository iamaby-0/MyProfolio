import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function SectionTitle({
  title,
  subtitle,
  linkText,
  linkHref,
  onLinkClick,
  className = ''
}) {
  return (
    <div className={`section-header ${className}`}>
      <div className="section-header-left">
        <h2 className="section-title">
          <span className="section-bullet">◆</span>
          {title}
        </h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>

      {(linkText && (linkHref || onLinkClick)) && (
        <a
          href={linkHref || '#'}
          onClick={(e) => {
            if (onLinkClick) {
              e.preventDefault();
              onLinkClick();
            }
          }}
          className="section-link"
        >
          <span>{linkText}</span>
          <ArrowRight size={15} />
        </a>
      )}
    </div>
  );
}
