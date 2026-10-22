import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LeetCodeIcon, XIcon, InstagramIcon } from './BrandIcons';
import { profileData } from '../../data/profile';
import './SocialLinks.css';

export default function SocialLinks({ compact = false, showLabels = true, className = '' }) {
  const { socials } = profileData;

  const links = [
    {
      id: 'x',
      name: 'X',
      url: socials.x.url,
      icon: XIcon,
      label: null // icon only in hero row
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: socials.instagram.url,
      icon: InstagramIcon,
      label: 'Instagram'
    },
    {
      id: 'github',
      name: 'GitHub',
      url: socials.github.url,
      icon: GithubIcon,
      label: 'GitHub'
    },
    {
      id: 'leetcode',
      name: 'LeetCode',
      url: socials.leetcode.url,
      icon: LeetCodeIcon,
      label: 'LeetCode'
    }
  ];

  return (
    <div className={`social-links ${compact ? 'compact' : ''} ${className}`}>
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-item"
            aria-label={link.name}
            title={link.name}
          >
            <IconComponent size={16} />
            {showLabels && !compact && link.label && (
              <span className="social-label">{link.label}</span>
            )}
          </a>
        );
      })}
    </div>
  );
}
