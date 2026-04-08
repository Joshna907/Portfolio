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
    <section id="blogs" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <motion.h2 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-xl md:text-2xl font-serif text-foreground mb-10 sm:mb-12"
      >
        Most recent posts
      </motion.h2>

      <div className="flex flex-col gap-10 sm:gap-12 md:gap-14">
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
            className="group flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 items-start"
          >
            {/* Thumbnail */}
            <div className="shrink-0 w-full sm:w-24 h-40 sm:h-16 md:w-44 md:h-28 rounded-lg overflow-hidden border border-border-subtle bg-surface/20">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1.5 min-w-0">
              <h3 className="text-[16px] sm:text-[17px] md:text-[21px] font-medium text-foreground group-hover:text-accent-color transition-colors duration-300 leading-tight">
                {post.title}
              </h3>
              
              <div className="flex items-center gap-4 text-[10px] md:text-xs text-text-muted/60 lowercase">
                <div className="flex items-center gap-1.5">
                  <TbCalendar size={13} />
                  {post.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <TbClock size={13} />
                  {post.readTime}
                </div>
              </div>

              <p className="text-text-muted/80 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed max-w-2xl mt-0.5">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-[11px] md:text-xs text-text-muted/60 font-mono tracking-tight">
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
