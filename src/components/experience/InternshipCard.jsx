import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Copy,
  Check,
  Eye,
  ExternalLink,
  ZoomIn,
  Sparkles,
  Building2
} from 'lucide-react';
import { motion } from 'framer-motion';
import './InternshipCard.css';

export default function InternshipCard({ internship, index, onViewCertificate }) {
  const [copied, setCopied] = useState(false);

  const handleCopyId = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(internship.certificateId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      className="internship-timeline-item"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
    >
      {/* Timeline Left Anchor Column with Date Pill */}
      <div className="timeline-marker-col">
        <div className="timeline-date-pill">
          {internship.periodPill}
        </div>
        <div className="timeline-line-track">
          <div className="timeline-node-dot" />
        </div>
      </div>

      {/* Main Internship Card */}
      <div className="internship-card">
        <div className="internship-grid">
          {/* Left Column: Details */}
          <div className="internship-details-col">
            {/* Header: Organization & Status */}
            <div className="internship-org-row">
              <div className="internship-org-info">
                <div className="internship-org-avatar">
                  <Building2 size={16} />
                </div>
                <span className="internship-org-name">{internship.organization}</span>
              </div>

              <div className="internship-status-badge">
                <span className="status-dot">●</span>
                <span>{internship.status}</span>
              </div>
            </div>

            {/* Title & Role */}
            <div className="internship-title-group">
              <h2 className="internship-title">{internship.title}</h2>
              <span className="internship-subtitle">{internship.subtitle}</span>
            </div>

            {/* Meta Row: Duration and Date Range */}
            <div className="internship-meta-row">
              <div className="internship-meta-item">
                <Clock size={15} className="meta-icon" />
                <span>{internship.duration}</span>
              </div>
              <div className="internship-meta-item">
                <Calendar size={15} className="meta-icon" />
                <span>{internship.period}</span>
              </div>
            </div>

            {/* Description */}
            <p className="internship-desc">{internship.description}</p>

            {/* Key Highlights */}
            <div className="internship-highlights-box">
              <div className="highlights-header">
                <Sparkles size={14} className="highlights-icon" />
                <span>Key Highlights</span>
              </div>
              <div className="highlights-tags-row">
                {internship.highlights.map((tag) => (
                  <span key={tag} className="highlight-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificate ID & Copy Action */}
            <div className="internship-cert-id-row">
              <span className="cert-id-label">Certificate ID :</span>
              <code className="cert-id-code">{internship.certificateId}</code>
              <button
                type="button"
                className="cert-id-copy-btn"
                onClick={handleCopyId}
                title={copied ? "Copied to clipboard!" : "Copy Certificate ID"}
                aria-label="Copy Certificate ID"
              >
                {copied ? <Check size={14} className="copy-check" /> : <Copy size={14} />}
                <span className="copy-tooltip">{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Certificate Preview & Actions */}
          <div className="internship-cert-col">
            <div
              className="cert-preview-wrapper"
              onClick={() => onViewCertificate(internship)}
              title="Click to view full certificate"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onViewCertificate(internship);
                }
              }}
            >
              <img
                src={internship.certificateImage}
                alt={`${internship.title} Certificate`}
                className="cert-preview-img"
              />
              <div className="cert-preview-zoom-badge">
                <ZoomIn size={16} />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="cert-actions-row">
              <button
                type="button"
                className="cert-action-btn btn-view"
                onClick={() => onViewCertificate(internship)}
              >
                <Eye size={15} />
                <span>View Certificate</span>
                <ExternalLink size={13} className="btn-link-icon" />
              </button>

              <a
                href={internship.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-action-btn btn-open"
              >
                <span>Open in New Tab</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
