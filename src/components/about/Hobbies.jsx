import React from 'react';
import { Gamepad2, Film, Plane, Dumbbell } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { interestsData } from '../../data/interests';
import './Hobbies.css';

const hobbyIcons = {
  Gamepad2: Gamepad2,
  Film: Film,
  Plane: Plane,
  Dumbbell: Dumbbell
};

export default function Hobbies() {
  return (
    <section className="hobbies-section">
      <div className="container">
        <SectionTitle
          title="Hobbies & Interests"
          subtitle="Things I enjoy outside of coding"
        />

        <div className="hobbies-grid">
          {interestsData.hobbies.map((item, index) => {
            const IconComp = hobbyIcons[item.icon] || Gamepad2;
            return (
              <motion.div
                key={item.title}
                className="hobby-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <div className="hobby-icon-box">
                  <IconComp size={22} />
                </div>
                <div className="hobby-info">
                  <h4 className="hobby-title">{item.title}</h4>
                  <p className="hobby-desc">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
