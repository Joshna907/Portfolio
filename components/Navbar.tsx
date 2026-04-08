'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TbUser, TbFileText, TbCode, TbArticle, TbMail, TbStack, TbBuildingCommunity } from 'react-icons/tb';
import { VscGithub } from 'react-icons/vsc';
import { SiLinkedin, SiX } from 'react-icons/si';
import { FaMedium } from 'react-icons/fa6';
import ResumeModal from './ResumeModal';

const navItems = [
  { label: 'Who Am I', href: '#', icon: <TbUser size={22} />, isModal: false, id: 'hero' },
  { label: 'Experience', href: '#experience', icon: <TbBuildingCommunity size={22} />, isModal: false, id: 'experience' },
  { label: 'Tools', href: '#tools', icon: <TbStack size={22} />, isModal: false, id: 'tools' },
  { label: 'Resume', href: '#', icon: <TbFileText size={22} />, isModal: true, id: 'resume' },
  { label: 'Projects', href: '#projects', icon: <TbCode size={22} />, isModal: false, id: 'projects' },
  { label: 'Writing', href: '#blogs', icon: <TbArticle size={22} />, isModal: false, id: 'blogs' },
  { label: 'Contact', href: '#contact', icon: <TbMail size={22} />, isModal: false, id: 'contact' },
];

const socialItems = [
  { label: 'GitHub', href: 'https://github.com/Joshna907', icon: <VscGithub size={19} /> },
  { label: 'Medium', href: 'https://medium.com/@joshnawaikar', icon: <FaMedium size={18} /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jothsana-waikar-a37a8423a/', icon: <SiLinkedin size={18} /> },
  { label: 'X', href: 'https://x.com/JothsanaW', icon: <SiX size={17} /> },
];

export default function Navbar() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    const sectionIds = ['experience', 'tools', 'projects', 'blogs', 'contact'];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const homeEl = document.querySelector('section');
    if (homeEl) {
      observer.observe(homeEl);
    }

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isModal?: boolean) => {
    e.preventDefault();
    if (isModal) {
      setIsResumeOpen(true);
      return;
    }
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -40; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="fixed bottom-4 sm:bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-auto max-w-full">
        <motion.nav 
          initial={{ y: 80, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.4 
          }}
          className="flex items-center justify-center gap-0.5 sm:gap-1 md:gap-2 p-1.5 sm:p-2 bg-white/[0.03] backdrop-blur-xl rounded-[20px] sm:rounded-[24px] border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] overflow-x-auto scrollbar-hidden"
        >
          {navItems.map((item) => {
            const isActive = isResumeOpen ? (item.isModal) : (activeSection === item.id);
            
            return (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href, item.isModal)}
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
                  animate={{ scale: isActive ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="[&>svg]:w-[18px] [&>svg]:h-[18px] sm:[&>svg]:w-[20px] sm:[&>svg]:h-[20px] md:[&>svg]:w-[22px] md:[&>svg]:h-[22px]"
                >
                  {item.icon}
                </motion.div>

                {/* Active Indicator Dot */}
                <div className="absolute -bottom-1 sm:-bottom-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        layoutId="nav-dot"
                        initial={{ scale: 0, opacity: 0, y: 5 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0, opacity: 0, y: 5 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                        className="w-1 h-1 rounded-full bg-[#fff] shadow-[0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.4)]"
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Tooltip — Hidden on mobile */}
                <span className="hidden sm:block absolute -top-14 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom bg-[#1a1a1a] text-[11px] font-medium text-[#fff] px-3 py-2 rounded-xl border border-white/10 shadow-2xl whitespace-nowrap pointer-events-none backdrop-blur-md">
                  {item.label}
                </span>
              </motion.a>
            );
          })}

          {/* Faint Divider — Hidden on very small screens */}
          <div className="hidden sm:block w-[1px] h-6 sm:h-8 bg-white/10 mx-1 sm:mx-2 flex-shrink-0" />

          {/* Socials — Hidden on mobile, visible from sm up */}
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
              className="hidden sm:flex group relative p-2 sm:p-2.5 md:p-3 text-[#a1a1aa] hover:text-[#fff] rounded-xl sm:rounded-2xl items-center justify-center cursor-pointer transition-all duration-300 flex-shrink-0"
            >
              {social.icon}
              
              {/* Tooltip */}
              <span className="absolute -top-14 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom bg-[#1a1a1a] text-[11px] font-medium text-[#fff] px-3 py-2 rounded-xl border border-white/10 shadow-2xl whitespace-nowrap pointer-events-none backdrop-blur-md">
                {social.label}
              </span>
            </motion.a>
          ))}
        </motion.nav>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
