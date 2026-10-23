import React from 'react';
import { Send, Globe, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import './Achievements.css';

export default function Achievements() {
  const cards = [
    {
      id: "telegram-1",
      metric: "48K+ Members",
      subLabel: "Telegram Community",
      desc: "Managed and grew a 48K+ member Telegram community, delivering regular tech updates and driving engagement.",
      link: "https://t.me/themes4miui",
      btnText: "Join Community →",
      icon: Send,
      isTelegram: true
    },
    {
      id: "telegram-2",
      metric: "23K+ Members",
      subLabel: "Telegram Community",
      desc: "Managed and grew a 23K+ member Telegram community, sharing tech resources and helping learners.",
      link: "https://t.me/MiuithemesX",
      btnText: "Join Community →",
      icon: Send,
      isTelegram: true
    },
    {
      id: "academic-cgpa",
      metric: "8.51 CGPA",
      subLabel: "B. Tech CSE",
      desc: "Graduated with 8.51 CGPA in B.Tech Computer Science Engineering from Galgotias University.",
      link: null,
      btnText: null,
      icon: GraduationCap,
      isTelegram: false
    },
    {
      id: "blogger",
      metric: "Google Blogger",
      subLabel: "hyperosthemes.com",
      desc: "Created and manage HyperOSThemes.com, sharing themes, resources and tech content.",
      link: "https://hyperosthemes.com/",
      btnText: "Visit Website →",
      icon: Globe,
      isTelegram: false
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <SectionTitle
          title="Achievements & Communities"
          linkText="View All"
          onLinkClick={() => window.open('https://hyperosthemes.com/', '_blank')}
        />

        <div className="achievements-grid-4">
          {cards.map((card, index) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={card.id}
                className="achievement-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="achieve-card-top">
                  <div className={`achieve-icon-wrapper ${card.isTelegram ? 'telegram' : ''}`}>
                    <IconComp size={20} />
                  </div>

                  <div>
                    <div className="achieve-main-metric">{card.metric}</div>
                    <div className="achieve-sub-badge">{card.subLabel}</div>
                  </div>

                  <p className="achieve-card-desc">{card.desc}</p>
                </div>

                {card.link && card.btnText && (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achieve-action-btn"
                  >
                    <span>{card.btnText}</span>
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
