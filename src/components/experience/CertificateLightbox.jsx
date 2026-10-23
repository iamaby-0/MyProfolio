import React, { useEffect } from 'react';
import { X, ExternalLink, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './CertificateLightbox.css';

export default function CertificateLightbox({ isOpen, certificate, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  return (
    <AnimatePresence>
      <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Certificate Preview">
        <motion.div
          className="lightbox-dialog"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {/* Header */}
          <div className="lightbox-header">
            <div className="lightbox-title-box">
              <div className="lightbox-icon-wrap">
                <Award size={18} />
              </div>
              <div>
                <h3 className="lightbox-title">{certificate.title}</h3>
                <span className="lightbox-id-text">
                  Certificate ID: <code>{certificate.certificateId}</code>
                </span>
              </div>
            </div>

            <button
              type="button"
              className="lightbox-close-btn"
              onClick={onClose}
              aria-label="Close Certificate Preview"
            >
              <X size={20} />
            </button>
          </div>

          {/* Certificate Image Frame */}
          <div className="lightbox-image-container">
            <img
              src={certificate.certificateImage}
              alt={`${certificate.title} Certificate — ${certificate.organization}`}
              className="lightbox-img"
            />
          </div>

          {/* Footer Actions */}
          <div className="lightbox-footer">
            <div className="lightbox-meta-note">
              <span>Verified AICTE & EduSkills Virtual Internship</span>
            </div>

            <div className="lightbox-actions-group">
              <a
                href={certificate.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="lightbox-drive-btn"
              >
                <span>Open in Google Drive</span>
                <ExternalLink size={15} />
              </a>

              <button
                type="button"
                className="lightbox-dismiss-btn"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
