import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { contactFaqItems } from '../../data/contact';
import './ContactFAQ.css';

export default function ContactFAQ() {
  // First item open by default as in the reference design
  const [openIndices, setOpenIndices] = useState([0]);

  const toggleAccordion = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="contact-faq-card">
      {/* Header */}
      <div className="contact-faq-header">
        <div className="contact-faq-icon-wrap">
          <HelpCircle size={20} />
        </div>
        <div className="contact-faq-header-text">
          <h2 className="contact-faq-title">Quick Answers</h2>
          <p className="contact-faq-subtitle">Some common questions.</p>
        </div>
      </div>

      {/* Accordion list */}
      <div className="contact-faq-list">
        {contactFaqItems.map((item, idx) => {
          const isOpen = openIndices.includes(idx);
          const questionId = `faq-q-${item.id}`;
          const answerId = `faq-a-${item.id}`;

          return (
            <div
              key={item.id}
              className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}
            >
              <button
                type="button"
                className="faq-accordion-trigger"
                onClick={() => toggleAccordion(idx)}
                aria-expanded={isOpen}
                aria-controls={answerId}
                id={questionId}
              >
                <div className="faq-trigger-left">
                  <span className="faq-item-icon-tag">
                    <MessageSquare size={14} />
                  </span>
                  <span className="faq-question-text">{item.question}</span>
                </div>
                <ChevronDown
                  size={18}
                  className={`faq-chevron-icon ${isOpen ? 'rotated' : ''}`}
                  aria-hidden="true"
                />
              </button>

              <div
                id={answerId}
                role="region"
                aria-labelledby={questionId}
                className={`faq-accordion-content ${isOpen ? 'expanded' : 'collapsed'}`}
              >
                <div className="faq-accordion-body">
                  <p className="faq-answer-text">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
