import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { LinkedinIcon, GithubIcon, LeetCodeIcon, XIcon, InstagramIcon } from '../common/BrandIcons';
import { profileData } from '../../data/profile';
import './ContactCTA.css';

export default function ContactCTA({ onContactClick }) {
  const { email, socials } = profileData;

  return (
    <section id="contact" className="contact-banner-section">
      <div className="container">
        <motion.div
          className="contact-banner-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
        >
          {/* Subtle Decorative Wave SVG */}
          <svg
            className="contact-banner-wave"
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 150 C 100 50 200 250 400 150 L 400 300 L 0 300 Z"
              fill="#35E9A0"
            />
          </svg>

          <div className="contact-banner-content">
            <h2 className="contact-banner-heading">
              Let's build something meaningful.
            </h2>
            <p className="contact-banner-desc">
              Have a project idea, internship opportunity or just want to say hi? I'd love to hear from you.
            </p>

            <div className="contact-banner-actions">
              <Button
                variant="primary"
                onClick={onContactClick}
                icon={ArrowRight}
                iconPosition="right"
              >
                Get in Touch
              </Button>
            </div>

            <div className="contact-banner-info-row">
              <a href={`mailto:${email}`} className="contact-info-link">
                <Mail size={16} />
                <span>{email}</span>
              </a>

              <a
                href={socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-link"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={socials.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-link"
              >
                <LeetCodeIcon size={16} />
                <span>LeetCode</span>
              </a>

              <a
                href={socials.x.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-link"
              >
                <XIcon size={16} />
                <span>X</span>
              </a>

              <a
                href={socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-link"
              >
                <InstagramIcon size={16} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
