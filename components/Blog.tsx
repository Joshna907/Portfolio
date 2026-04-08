'use client';

import { motion } from 'framer-motion';
import { TbExternalLink, TbCalendar, TbBook } from 'react-icons/tb';

const blogs = [
  {
    title: 'The PostgreSQL mistake that opens the door to hackers',
    description: 'How a simple configuration oversight in PostgreSQL can leave your database exposed to external threats and how to fix it.',
    date: 'Dec 12, 2024',
    readTime: '5 min read',
    url: 'https://medium.com/@joshnawaikar/the-postgresql-mistake-that-opens-the-door-to-hackers-32a294adbb72',
    tags: ['#postgresql', '#security', '#backend', '#database'],
  },
  // Add more blogs here as they come
];

export default function Blog() {
  return (
    <section id="blogs" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
      <div className="flex flex-col sm:flex-row justify-between items-baseline gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground">Writing</h2>
        <p className="text-[#6b7280] font-mono text-xs uppercase tracking-widest">Thought & Technical Rabbit Holes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {blogs.map((blog, idx) => (
          <motion.a
            key={blog.url}
            href={blog.url}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative block bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-text-muted group-hover:text-accent-color uppercase tracking-widest transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl md:text-2xl font-medium text-foreground group-hover:text-accent-color transition-colors leading-tight">
                  {blog.title}
                </h3>
                
                <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-2xl">
                  {blog.description}
                </p>

                <div className="flex items-center gap-6 pt-2">
                  <div className="flex items-center gap-2 text-text-muted text-[11px] font-mono">
                    <TbCalendar size={14} />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-2 text-text-muted text-[11px] font-mono">
                    <TbBook size={14} />
                    {blog.readTime}
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-white/5 rounded-xl text-[#6b7280] group-hover:text-accent-color group-hover:bg-white/10 transition-all duration-300 border border-white/5">
                  <TbExternalLink size={20} />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
