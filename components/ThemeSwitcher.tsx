'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TbPaint } from 'react-icons/tb';

export const themes = [
  { id: 'default', name: 'OBSIDIAN', color: '#ffffff' },
  { id: 'storm', name: 'STORM', color: '#fafafa' },
  { id: 'sakura', name: 'SAKURA', color: '#f472b6' },
  { id: 'midday', name: 'ICE', color: '#7dd3fc' },
];

export function ThemeDots({ activeTheme, onThemeChange }: { activeTheme: string, onThemeChange: (id: string) => void }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const item = {
    hidden: { scale: 0, x: -10, rotate: -20 },
    show: { 
      scale: 1, 
      x: 0, 
      rotate: 0,
      transition: { type: "spring", stiffness: 400, damping: 20 }
    }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex items-center gap-3 md:gap-4 shrink-0 px-3 sm:px-4"
    >
      {themes.map((theme) => {
        const isActive = activeTheme === theme.id;
        return (
          <motion.button
            key={theme.id}
            variants={item}
            onClick={() => onThemeChange(theme.id)}
            className="group relative flex items-center justify-center p-0.5 sm:p-1 outline-none"
          >
            <motion.div 
              animate={{ 
                scale: isActive ? 1.3 : 1, 
                opacity: isActive ? 1 : 0.4,
              }}
              whileHover={{ 
                scale: 1.5, 
                opacity: 1,
                rotate: 15,
                transition: { type: "spring", stiffness: 500, damping: 12 }
              }}
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full transition-all duration-500 cursor-pointer relative ${
                isActive ? 'animate-pulse-subtle' : ''
              }`}
              style={{ 
                backgroundColor: theme.color,
                boxShadow: isActive ? `0 0 20px 5px ${theme.color}66` : 'none'
              }} 
            >
              {isActive && (
                <motion.div 
                  layoutId="active-ring"
                  className="absolute -inset-1.5 rounded-full border-2 border-foreground/30"
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 18 
                  }}
                />
              )}
            </motion.div>
            
            {/* Tooltip */}
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-[#1a1a1a] border border-white/10 text-[10px] px-2.5 py-1.5 rounded-xl whitespace-nowrap pointer-events-none uppercase tracking-widest text-foreground shadow-2xl z-[100] backdrop-blur-md">
              {theme.name}
            </span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState('default');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('portfolio-theme') || 'default';
    setActiveTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const changeTheme = (id: string) => {
    setActiveTheme(id);
    document.documentElement.setAttribute('data-theme', id);
    localStorage.setItem('portfolio-theme', id);
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-8 bg-surface/60 backdrop-blur-xl px-6 py-2.5 rounded-full shadow-2xl transition-all hover:bg-surface/80 group/theme border border-white/5">
      <div className="flex items-center gap-2 select-none shrink-0 border-r border-white/10 pr-4">
        <TbPaint size={14} className="text-text-muted opacity-60 group-hover/theme:opacity-100 transition-opacity" />
        <span className="text-[10px] font-mono text-text-muted uppercase tracking-[0.25em] font-bold">THEME</span>
      </div>
      
      <ThemeDots activeTheme={activeTheme} onThemeChange={changeTheme} />
    </div>
  );
}
