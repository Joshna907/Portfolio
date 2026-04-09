'use client';

import { motion } from 'framer-motion';
import { TbCalendar, TbClock } from 'react-icons/tb';

const posts = [
  {
    title: 'The PostgreSQL mistake that opens the door to hackers',
    excerpt: 'how a simple configuration oversight in postgresql can leave your database exposed to external threats and how to fix it.',
    date: 'December 12, 2024',
    readTime: '5 min read',
    url: 'https://medium.com/@joshnawaikar/the-postgresql-mistake-that-opens-the-door-to-hackers-32a294adbb72',
    tags: ['postgresql', 'security', 'backend'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop'
  },
  {
    title: "Go's Internal Compiler Optimizations: Escape Analysis",
    excerpt: 'exploring how the go compiler decides whether a variable should live on the stack or the heap, and why it matters for performance.',
    date: 'February 15, 2025',
    readTime: '7 min read',
    url: 'https://medium.com/@joshnawaikar/gos-internal-compiler-optimizations-escape-analysis-da37bd51bad5',
    tags: ['golang', 'compilers', 'performance'],
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2689&auto=format&fit=crop'
  }
];

export default function BlogPosts() {
  return (
    <section id="blogs" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-between items-baseline gap-4 mb-16 sm:mb-20"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground">Writing</h2>
        <p className="text-text-muted font-mono text-[10px] uppercase tracking-[0.3em] font-bold opacity-70">Deep Dives & Insights</p>
      </motion.div>

      <div className="flex flex-col gap-12 sm:gap-16">
        {posts.map((post, idx) => (
          <motion.a
            key={post.url}
            href={post.url}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: idx * 0.1,
              ease: "easeOut"
            }}
            className="group flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-14 items-start"
          >
            {/* Thumbnail */}
            <div className="shrink-0 w-full sm:w-32 h-44 sm:h-20 md:w-56 md:h-36 rounded-2xl overflow-hidden border border-border-subtle bg-surface/20 shadow-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 min-w-0">
              <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold text-foreground group-hover:text-accent-color transition-colors duration-300 leading-[1.2] tracking-tight">
                {post.title}
              </h3>
              
              <div className="flex items-center gap-5 text-[10px] md:text-[11px] text-accent-color/60 font-mono font-bold uppercase tracking-wider">
                <div className="flex items-center gap-1.5">
                  <TbCalendar size={13} />
                  {post.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <TbClock size={13} />
                  {post.readTime}
                </div>
              </div>

              <p className="text-text-muted/90 text-[14px] md:text-[15px] leading-relaxed max-w-2xl mt-1 opacity-80 font-light">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-[10px] md:text-[11px] text-text-muted/60 font-mono tracking-[0.1em] font-bold uppercase">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
