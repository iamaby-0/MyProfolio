import React, { useState } from 'react';
import { X, Copy, Check, Send, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { profileData } from '../../data/profile';
import './ContactModal.css';

export default function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${profileData.email}?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div className="contact-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
        <motion.div
          className="contact-modal-window"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Header */}
          <div className="contact-modal-header">
            <div>
              <h2 className="contact-modal-title">
                <span className="contact-modal-title-diamond">◆</span>
                <span>Get in Touch</span>
              </h2>
              <p className="contact-modal-desc">
                Let's discuss opportunities, projects, or say hello.
              </p>
            </div>
            <button
              type="button"
              className="contact-modal-close"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="contact-modal-body">
            {/* Quick copy email */}
            <div className="contact-quick-copy">
              <span className="contact-email-text">{profileData.email}</span>
              <button
                type="button"
                className="contact-copy-btn"
                onClick={handleCopy}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {formSubmitted ? (
              <div className="contact-success-msg">
                Opening your email client to send the message to Abrar Ahmad...
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. sarah@example.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows="4"
                    placeholder="Tell me about your project or opportunity..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="form-submit-btn">
                  <Send size={15} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
