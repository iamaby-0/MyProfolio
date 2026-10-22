import React from 'react';
import { Send, Users, Award, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { communitiesData } from '../../data/communities';
import './Achievements.css';

export default function Achievements() {
  const otherAchievements = [
    {
      title: "B.Tech Computer Science Engineering",
      desc: "Graduated with 8.51/10 CGPA from Galgotias University (2022–2026).",
      icon: Award
    },
    {
      title: "Full Stack Certification",
      desc: "AICTE & EduSkills Foundation verified Full Stack Web Development Internship credential.",
      icon: CheckCircle2
    },
    {
      title: "Blogger: HyperOSThemes.com",
      desc: "Publisher covering mobile UI customization, themes and software tweaks.",
      icon: Globe,
      link: "https://hyperosthemes.com",
      linkLabel: "Visit hyperosthemes.com"
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <SectionTitle
          title="Achievements & Communities"
          subtitle="Tech community building, published content, and verified academic milestones."
        />

        {/* Telegram Communities (Two Separate Cards: 48K+ & 23K+) */}
        <div className="communities-grid">
          {communitiesData.map((community, index) => (
            <motion.div
              key={community.id}
              className="community-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div>
                <div className="community-header">
                  <div className="community-icon-box">
                    <Send size={22} />
                  </div>
                  <span className="community-badge">{community.role}</span>
                </div>

                <div className="community-count">{community.members}</div>
                <h4 className="community-name">{community.name}</h4>
                <p className="community-desc">{community.description}</p>
              </div>

              {community.link && (
                <a
                  href={community.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="community-link"
                >
                  <span>{community.linkText || 'Join Community →'}</span>
                  <ArrowRight size={15} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Verified Achievements */}
        <div className="other-achievements-grid">
          {otherAchievements.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                className="achieve-mini-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
              >
                <div className="achieve-mini-icon">
                  <IconComp size={18} />
                </div>
                <div className="achieve-mini-info">
                  <h4 className="achieve-mini-title">{item.title}</h4>
                  <p className="achieve-mini-desc">{item.desc}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achieve-mini-link"
                    >
                      {item.linkLabel}
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
