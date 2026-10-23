import React, { useState } from 'react';
import {
  User,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Copy,
  Check,
  Share2
} from 'lucide-react';
import {
  GithubIcon,
  XIcon,
  InstagramIcon,
  LeetCodeIcon
} from '../common/BrandIcons';
import { profileData } from '../../data/profile';
import './ContactInfo.css';

export default function ContactInfo() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: profileData.socials.github.url,
      icon: GithubIcon,
      isExternal: true
    },
    {
      name: "X",
      url: profileData.socials.x.url,
      icon: XIcon,
      isExternal: true
    },
    {
      name: "Instagram",
      url: profileData.socials.instagram.url,
      icon: InstagramIcon,
      isExternal: true
    },
    {
      name: "LeetCode",
      url: profileData.socials.leetcode.url,
      icon: LeetCodeIcon,
      isExternal: true
    },
    {
      name: "Email",
      url: `mailto:${profileData.email}`,
      icon: Mail,
      isExternal: false
    }
  ];

  return (
    <div className="contact-info-card">
      {/* Header */}
      <div className="contact-info-header">
        <div className="contact-info-icon-wrap">
          <User size={20} />
        </div>
        <div>
          <h2 className="contact-info-title">Contact Information</h2>
          <p className="contact-info-desc">
            Here are the best ways to reach me. I usually respond within 24–48 hours.
          </p>
        </div>
      </div>

      {/* Info List */}
      <div className="contact-info-list">
        {/* Email */}
        <div className="contact-info-item">
          <div className="contact-info-avatar">
            <Mail size={18} />
          </div>
          <div className="contact-info-text-group">
            <span className="contact-info-label">Email</span>
            <div className="contact-email-action-row">
              <a href={`mailto:${profileData.email}`} className="contact-info-val email-link">
                {profileData.email}
              </a>
              <button
                type="button"
                className="contact-copy-btn"
                onClick={handleCopyEmail}
                title={copied ? "Copied!" : "Copy email address"}
                aria-label="Copy email address"
              >
                {copied ? <Check size={14} className="copy-check" /> : <Copy size={14} />}
                <span className="copy-tooltip-tag">{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="contact-info-item">
          <div className="contact-info-avatar">
            <MapPin size={18} />
          </div>
          <div className="contact-info-text-group">
            <span className="contact-info-label">Location</span>
            <span className="contact-info-val">{profileData.location}</span>
          </div>
        </div>

        {/* Availability */}
        <div className="contact-info-item">
          <div className="contact-info-avatar">
            <Calendar size={18} />
          </div>
          <div className="contact-info-text-group">
            <span className="contact-info-label">Availability</span>
            <div className="contact-availability-row">
              <span className="contact-info-val">Open to opportunities</span>
              <span className="status-dot">●</span>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="contact-info-item">
          <div className="contact-info-avatar">
            <Clock size={18} />
          </div>
          <div className="contact-info-text-group">
            <span className="contact-info-label">Response Time</span>
            <span className="contact-info-val">Usually within 24–48 hours</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="contact-info-divider" />

      {/* Connect with me */}
      <div className="contact-connect-section">
        <div className="contact-connect-header">
          <div className="contact-connect-icon-wrap">
            <Share2 size={18} />
          </div>
          <div>
            <h3 className="contact-connect-title">Connect with me</h3>
            <p className="contact-connect-desc">
              Follow me on social platforms for updates and projects.
            </p>
          </div>
        </div>

        {/* 5 Social Icon Cards */}
        <div className="contact-social-grid">
          {socialLinks.map((item) => {
            const IconComp = item.icon;
            return (
              <a
                key={item.name}
                href={item.url}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className="contact-social-card"
                title={`${item.name} — Abrar Ahmad`}
                aria-label={item.name}
              >
                <div className="contact-social-icon-box">
                  <IconComp size={18} />
                </div>
                <span className="contact-social-label">{item.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
