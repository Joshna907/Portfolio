'use client';

import { motion } from 'framer-motion';
import { TbExternalLink, TbPlayerPlay } from 'react-icons/tb';
import { VscGithub } from 'react-icons/vsc';

const projects = [
  {
    name: 'Sahaay',
    tech: 'Golang / Next.js / PostgreSQL / mDNS',
    description: 'A disaster support platform for coordinated missing person tracking. Built using multicast DNS (mDNS).',
    repoUrl: 'https://github.com/Joshna907/Sahaay',
    video: '/videos/Sahaay.mp4',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop',
    tag: 'Rescue Tech'
  },
  {
    name: 'Focusift',
    tech: 'Next.js / TypeScript / Prisma / PostgreSQL',
    description: 'A deep-work productivity suite that tracks focused sessions. Includes interactive dashboards to visualize concentration trends.',
    liveUrl: 'https://focusift.onrender.com/',
    repoUrl: 'https://github.com/Joshna907/Focusift',
    video: '/videos/focusift.mp4',
    image: '/images/Focusift.JPG',
    tag: 'Productivity'
  },
  {
    name: 'Maid Finder',
    tech: 'Solidity / Ethereum / Web3.js / React',
    description: 'Decentralized platform connecting household needs with service providers using smart contracts.',
    liveUrl: 'https://maid-finder-delta.vercel.app',
    repoUrl: 'https://github.com/Joshna907/maid-finder-project',
    video: '/videos/maidfinder.mp4',
    image: '/images/Maidfinder.JPG',
    tag: 'Web3 / dApp'
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex flex-col sm:flex-row justify-between items-baseline gap-4 mb-14">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground">Featured Projects</h2>
        <p className="text-text-muted font-mono text-[10px] uppercase tracking-[0.25em]">Selected Works</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1, 
              delay: i * 0.1, 
              ease: [0.21, 0.45, 0.32, 0.9] 
            }}
            className="group flex flex-col gap-6"
          >
            {/* Visual Frame — Supports Image and Video */}
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border-subtle bg-[#0a0a0a] shadow-2xl">
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={project.image}
                  className="w-full h-full object-cover object-left-top transition-all duration-1000 group-hover:scale-[1.05]"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-left-top transition-all duration-1000 group-hover:scale-[1.05]"
                />
              )}
              
              {/* Play Indicator for Video */}
              {project.video && (
                <div className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <TbPlayerPlay size={14} className="text-white/80" />
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Info */}
            <div className="space-y-4 px-1">
              <div className="space-y-1">
                <h3 className="text-xl md:text-2xl font-serif text-foreground group-hover:text-accent-color transition-colors leading-tight">
                  {project.name}
                </h3>
                <p className="text-[11px] md:text-xs text-[#a1a1aa] font-mono uppercase tracking-[0.2em]">
                  {project.tech}
                </p>
              </div>

              <p className="text-text-secondary text-[14px] md:text-[15px] leading-relaxed font-light line-clamp-2">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex items-center gap-6 pt-1">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-[13px] text-foreground hover:text-accent-color transition-colors font-medium border-b border-white/5 hover:border-accent-color/40 pb-0.5"
                  >
                    <TbExternalLink size={16} />
                    Live Preview
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    className="flex items-center gap-2 text-[13px] text-text-muted hover:text-accent-color transition-colors font-medium border-b border-transparent hover:border-accent-color/20 pb-0.5"
                  >
                    <VscGithub size={16} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
