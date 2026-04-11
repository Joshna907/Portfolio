'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { TbChevronRight } from 'react-icons/tb';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Vessify',
    logo: '/logos/vessify_logo.jpg',
    logoFit: 'object-cover',
    logoScale: 'scale-[1.25]',
    logoBg: 'bg-[#121212]',
    period: 'Jan 2026 - April 2026',
    points: [
      'Working primarily on backend development, designing and implementing scalable APIs and server-side logic using Node.js.',
      'Collaborating with frontend and product teams to integrate backend services with web applications.',
    ],
  },
  {
    role: 'Backend Developer Intern',
    company: 'Sunday Tech',
    logo: '/logos/sundaytech_logo.jpg',
    logoFit: 'object-contain',
    logoScale: 'scale-[0.85]',
    logoBg: 'bg-white',
    period: 'July 2024 - November 2024',
    points: [
      'Designed and developed RESTful APIs using Node.js and Express to support various application functionalities.',
      'Designed robust data models and queries using Sequelize ORM, ensuring efficient interaction with SQL databases.',
      'Implemented security best practices, input validation, authentication, and authorization, to safeguard API endpoints.',
    ],
  },
];

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <div className="flex flex-col sm:flex-row justify-between items-baseline gap-4 mb-14">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground">Experience</h2>
        <p className="text-text-muted font-mono text-[10px] uppercase tracking-[0.25em]">Professional Trajectory</p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="space-y-4"
      >
        {experiences.map((exp, i) => {
          const isExpanded = expandedIndex === i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`group relative p-6 md:p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${isExpanded
                  ? 'bg-surface/40 border-border-muted shadow-2xl backdrop-blur-sm'
                  : 'bg-surface/5 border-transparent hover:bg-surface/10 hover:border-border-subtle'
                }`}
              onClick={() => setExpandedIndex(isExpanded ? null : i)}
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div className="flex items-center gap-5">
                  <div className={`relative w-12 h-12 rounded-full border flex-shrink-0 flex items-center justify-center overflow-hidden transition-all duration-500 ${exp.logoBg} ${
                    isExpanded ? 'border-white/20' : 'border-border-subtle group-hover:border-white/10'
                  }`}>
                    <Image 
                      src={exp.logo} 
                      alt={exp.company}
                      fill
                      className={`transition-all duration-500 ${exp.logoFit} ${exp.logoScale} ${isExpanded ? 'scale-[1.1]' : ''}`}
                    />
                  </div>
                  <div>
                    <h3 className={`text-xl font-medium transition-colors duration-500 ${isExpanded ? 'text-foreground' : 'text-text-secondary group-hover:text-foreground'}`}>
                      {exp.company}
                    </h3>
                    <p className="text-sm font-mono text-text-muted mt-0.5 tracking-wide">{exp.role}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6">
                  <span className="text-[12px] md:text-xs text-text-muted font-mono uppercase tracking-widest whitespace-nowrap">
                    {exp.period}
                  </span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    className={`transition-colors duration-500 ${isExpanded ? 'text-accent-color' : 'text-text-muted group-hover:text-foreground'}`}
                  >
                    <TbChevronRight size={20} />
                  </motion.div>
                </div>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden border-t border-border-subtle"
                  >
                    <ul className="space-y-4 pt-6 pb-2">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="text-[15px] text-text-secondary leading-relaxed flex gap-4 font-light">
                          <span className="text-accent-color mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-color shadow-[0_0_8px_var(--accent-color)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
