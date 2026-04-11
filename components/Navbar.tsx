'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TbUser, TbFileText, TbCode, TbArticle, TbMail, TbStack, TbBuildingCommunity, TbPaint } from 'react-icons/tb';
import { VscGithub } from 'react-icons/vsc';
import { SiLinkedin, SiX } from 'react-icons/si';
import ResumeModal from './ResumeModal';
import { ThemeDots } from './ThemeSwitcher';

const navItems = [
  { label: 'Resume', href: '#', icon: <TbFileText size={22} />, isModal: true, id: 'resume' },
];

const socialItems = [
  { label: 'GitHub', href: 'https://github.com/Joshna907', icon: <VscGithub size={19} /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jothsana-waikar-a37a8423a/', icon: <SiLinkedin size={18} /> },
  { label: 'X', href: 'https://x.com/JothsanaW', icon: <SiX size={17} /> },
];

export default function Navbar() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('default');
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'default';
    setActiveTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const changeTheme = (id: string) => {
    setActiveTheme(id);
    document.documentElement.setAttribute('data-theme', id);
    localStorage.setItem('portfolio-theme', id);
  };

  const renderNavItem = (item: typeof navItems[0]) => {
    const isActive = isResumeOpen ? (item.isModal) : false;
    return (
      <motion.a
        key={item.label}
        href={item.href}
        onClick={(e) => {
          e.preventDefault();
          if (item.isModal) setIsResumeOpen(true);
        }}
        whileHover={{ 
          y: -8, 
          scale: 1.2,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
        whileTap={{ scale: 0.8 }}
        className={`group relative p-2 sm:p-2.5 md:p-3 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0 ${
          isActive ? 'text-[#fff] bg-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]' : 'text-[#a1a1aa] hover:text-[#fff]'
        }`}
      >
        <motion.div
          className="[&>svg]:w-[18px] [&>svg]:h-[18px] sm:[&>svg]:w-[20px] sm:[&>svg]:h-[20px] md:[&>svg]:w-[22px] md:[&>svg]:h-[22px]"
        >
          {item.icon}
        </motion.div>

        {/* Tooltip — Hidden on mobile */}
        <span className="hidden sm:block absolute -top-14 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom bg-[#1a1a1a] text-[11px] font-medium text-[#fff] px-3 py-2 rounded-xl border border-white/10 shadow-2xl whitespace-nowrap pointer-events-none backdrop-blur-md">
          {item.label}
        </span>
      </motion.a>
    );
  };

  return (
    <>
      <div className="fixed bottom-4 sm:bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 z-50 w-auto">
        <motion.nav 
          initial={{ y: 80, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.4 
          }}
          className="flex items-center justify-center gap-1 sm:gap-2 p-1.5 sm:p-2 bg-white/[0.03] backdrop-blur-xl rounded-[20px] sm:rounded-[24px] border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)]"
        >
          {/* Resume */}
          {renderNavItem(navItems[0])}

          <div className="w-[1px] h-6 sm:h-8 bg-white/10 mx-1 sm:mx-2 flex-shrink-0" />

          {/* Socials & Theme Toggle */}
          <div className="flex items-center">
            {socialItems.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  y: -8, 
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.8 }}
                className="group relative p-2 sm:p-2.5 md:p-3 text-[#a1a1aa] hover:text-[#fff] rounded-xl sm:rounded-2xl items-center justify-center cursor-pointer transition-all duration-300 flex-shrink-0"
              >
                {social.icon}
                
                {/* Tooltip */}
                <span className="absolute -top-14 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom bg-[#1a1a1a] text-[11px] font-medium text-[#fff] px-3 py-2 rounded-xl border border-white/10 shadow-2xl whitespace-nowrap pointer-events-none backdrop-blur-md">
                  {social.label}
                </span>
              </motion.a>
            ))}

            <div className="w-[1px] h-6 sm:h-8 bg-white/10 mx-1 sm:mx-2 flex-shrink-0" />
            
            {/* Theme Toggle Section */}
            <div className="flex items-center">
              <motion.button
                onClick={() => setIsThemeOpen(!isThemeOpen)}
                whileHover={{ 
                  y: -8, 
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.8 }}
                className={`relative p-2 sm:p-2.5 md:p-3 rounded-xl sm:rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 ${isThemeOpen ? 'text-[#fff] bg-white/[0.08]' : 'text-[#a1a1aa] hover:text-[#fff]'}`}
              >
                <motion.div
                  animate={{ rotate: isThemeOpen ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <TbPaint size={20} />
                </motion.div>
                
                {/* Tooltip */}
                <span className="absolute -top-14 opacity-0 hover:opacity-100 scale-90 hover:scale-100 transition-all duration-300 bg-[#1a1a1a] text-[11px] font-medium text-[#fff] px-3 py-2 rounded-xl border border-white/10 whitespace-nowrap pointer-events-none">
                  Themes
                </span>
              </motion.button>

              <AnimatePresence>
                {isThemeOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0, x: -10 }}
                    animate={{ width: 'auto', opacity: 1, x: 0 }}
                    exit={{ width: 0, opacity: 0, x: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="overflow-hidden"
                  >
                    <ThemeDots activeTheme={activeTheme} onThemeChange={changeTheme} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.nav>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
