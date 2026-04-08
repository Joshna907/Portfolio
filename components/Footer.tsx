'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="py-8 pb-32 sm:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#6b7280]">
          © {new Date().getFullYear()} Developed with {mounted ? <span className="text-red-500">♥</span> : ''} by Jothsana
        </p>
        <div className="flex items-center gap-4">
          <a href="https://medium.com/@joshnawaikar" target="_blank" rel="noopener noreferrer" className="text-xs text-[#6b7280] hover:text-white transition-colors duration-200 uppercase tracking-widest font-medium">MEDIUM</a>
          <span className="text-[#6b7280]">/</span>
          <a href="#" className="text-xs text-[#6b7280] hover:text-white transition-colors duration-200 uppercase tracking-widest font-medium">RSS FEED</a>
          <span className="text-[#6b7280]">/</span>
          <a href="#" className="text-xs text-[#6b7280] hover:text-white transition-colors duration-200 uppercase tracking-widest font-medium">SITE MAP</a>
        </div>
      </div>
    </footer>
  );
}
