import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, XIcon, InstagramIcon } from './BrandIcons';
import { profileData } from '../../data/profile';
import './SocialLinks.css';

export default function SocialLinks({ compact = false, showLabels = true, className = '' }) {
  const { socials } = profileData;

  const links = [
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
    },
    {
      id: 'x',
      name: 'X (Twitter)',
      url: socials.x.url,
      icon: XIcon,
      label: 'X'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: socials.instagram.url,
      icon: InstagramIcon,
      label: 'Instagram'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: socials.linkedin.url,
      icon: LinkedinIcon,
      label: 'LinkedIn'
    },
    {
      id: 'email',
      name: 'Email',
      url: socials.email.url,
      icon: Mail,
      label: 'abrarahmad.se@gmail.com'
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
            target={link.id !== 'email' ? '_blank' : undefined}
            rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
            className="social-link-item"
            aria-label={link.name}
            title={link.name}
          >
            <IconComponent size={16} />
            {showLabels && !compact && <span className="social-label">{link.label}</span>}
          </a>
        );
      })}
    </div>
  );
}
