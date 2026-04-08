'use client';

import { useState, useEffect } from 'react';
import { TbPaint } from 'react-icons/tb';

const themes = [
  { id: 'default', name: 'OBSIDIAN', color: '#ffffff' },
  { id: 'storm', name: 'STORM', color: '#fafafa' },
  { id: 'sakura', name: 'SAKURA', color: '#f472b6' },
  { id: 'midday', name: 'ICE', color: '#7dd3fc' },
];

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
      
      <div className="flex items-center gap-4 shrink-0">
        {themes.map((theme) => {
          const isActive = activeTheme === theme.id;
          return (
            <button
              key={theme.id}
              onClick={() => changeTheme(theme.id)}
              className="group relative flex items-center justify-center p-1"
            >
              <div 
                className={`w-3.5 h-3.5 rounded-full transition-all duration-500 cursor-pointer ${
                  isActive ? 'scale-125' : 'hover:scale-150 opacity-30 hover:opacity-100'
                }`}
                style={{ 
                  backgroundColor: theme.color,
                  boxShadow: isActive ? `0 0 16px 4px ${theme.color}` : 'none'
                }} 
              />
              
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-surface border border-border-muted text-[10px] px-2.5 py-1 rounded-md whitespace-nowrap pointer-events-none uppercase tracking-tighter text-foreground shadow-2xl z-50">
                {theme.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
