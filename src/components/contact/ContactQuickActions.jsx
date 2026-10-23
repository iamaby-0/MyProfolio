import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Briefcase, Users, MessageSquare, ArrowRight } from 'lucide-react';
import { contactQuickActions } from '../../data/contact';
import './ContactQuickActions.css';

const actionIcons = {
  Mail,
  Briefcase,
  Users,
  MessageSquare
};

export default function ContactQuickActions({ onSelectAction }) {
  const handleClick = (e, item) => {
    if (item.type === 'email') {
      // Allow default mailto behavior
      return;
    }

    e.preventDefault();
    if (onSelectAction) {
      onSelectAction(item.subject);
    }
  };

  return (
    <section className="contact-quick-section">
      <div className="container">
        <div className="contact-quick-grid">
          {contactQuickActions.map((item, index) => {
            const IconComp = actionIcons[item.icon] || Mail;
            const isEmail = item.type === 'email';

            return (
              <motion.div
                key={item.id}
                className="contact-quick-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <div className="quick-card-icon-circle">
                  <IconComp size={20} />
                </div>

                <div className="quick-card-content">
                  <h3 className="quick-card-title">{item.title}</h3>
                  <p className="quick-card-desc">{item.description}</p>

                  <a
                    href={isEmail ? item.href : '#contact-form'}
                    className="quick-card-action-link"
                    onClick={(e) => handleClick(e, item)}
                  >
                    <span>{item.actionLabel}</span>
                    <ArrowRight size={14} className="quick-arrow" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
