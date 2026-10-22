import React from 'react';
import { GraduationCap, CodeXml, Briefcase, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile';
import './QuickStats.css';

const statIcons = {
  GraduationCap: GraduationCap,
  CodeXml: CodeXml,
  Briefcase: Briefcase,
  Zap: Zap
};

export default function QuickStats() {
  const { stats } = profileData;

  return (
    <section className="stats-section" aria-label="Key Highlights and Statistics">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const IconComponent = statIcons[stat.icon] || Zap;
            const isCommunity = stat.id === 'communities';

            return (
              <motion.div
                key={stat.id}
                className={`stat-card ${isCommunity ? 'stat-card-community' : ''}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="stat-icon-wrapper">
                  <IconComponent size={22} />
                </div>
                <div className="stat-info">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>

                  {isCommunity && stat.subValues ? (
                    <div className="stat-community-split">
                      <span className="community-sub-badge">C1: 48K+</span>
                      <span className="community-sub-badge">C2: 23K+</span>
                    </div>
                  ) : (
                    stat.supporting && (
                      <span className="stat-supporting">{stat.supporting}</span>
                    )
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
