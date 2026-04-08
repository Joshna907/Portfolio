'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { TbX, TbExternalLink } from 'react-icons/tb';
import { SiLinkedin, SiGithub } from 'react-icons/si';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Overlay */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-[#0d0d0d] border border-white/10 rounded-xl shadow-[0_0_80px_rgba(0,0,0,0.8)] pointer-events-auto"
            >
              {/* macOS Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-[#0d0d0d]/90 backdrop-blur-md border-b border-white/5">
                <div className="flex gap-2">
                  <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 flex items-center justify-center transition-colors">
                    <TbX size={8} className="opacity-0 hover:opacity-100 text-red-900" />
                  </button>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-[#6b7280] tracking-widest uppercase ml-4">
                  Résumé — Jothsana Waikar
                </div>
                <div className="w-20" /> {/* Spacer */}
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-10 space-y-12 pb-20">
                {/* Header Info */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-white/5 pb-10">
                  <div>
                    <h1 className="text-2xl sm:text-4xl font-serif text-[#ededed] mb-2 leading-tight">Jothsana Raosaheb Waikar</h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1 text-[#a1a1aa] font-mono text-xs sm:text-[13px]">
                      <p>joshnawaikar@gmail.com</p>
                      <span className="hidden sm:inline text-white/10">•</span>
                      <p>9503434692</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a 
                      href="https://github.com/Joshna907" 
                      target="_blank" 
                      className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[#a1a1aa] hover:text-[#ededed] transition-all hover:-translate-y-1"
                      title="GitHub"
                    >
                      <SiGithub size={20} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/jothsana-waikar-a37a8423a/" 
                      target="_blank" 
                      className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[#a1a1aa] hover:text-[#ededed] transition-all hover:-translate-y-1"
                      title="LinkedIn"
                    >
                      <SiLinkedin size={19} />
                    </a>
                    <a 
                      href="#" 
                      target="_blank" 
                      className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[#a1a1aa] hover:text-[#ededed] transition-all hover:-translate-y-1 group"
                      title="Portfolio"
                    >
                      <TbExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Skills */}
                <section>
                  <h3 className="text-[11px] font-mono text-[#6b7280] uppercase tracking-widest mb-6 px-1">Skills</h3>
                  <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 bg-white/[0.02] p-6 rounded-xl border border-white/5">
                    <p className="text-sm font-medium text-[#ededed]">Languages</p>
                    <div className="flex flex-wrap gap-2">
                      {['C/C++', 'JavaScript', 'TypeScript', 'Solidity', 'HTML', 'CSS', 'Go (Golang)'].map((s) => (
                        <span key={s} className="text-xs px-3 py-1 bg-white/5 text-[#ededed] rounded-full border border-white/10">{s}</span>
                      ))}
                    </div>

                    <p className="text-sm font-medium text-[#ededed] mt-2 md:mt-0">Technologies & Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {['ReactJS', 'Next.js', 'Tailwind CSS', 'Node.js', 'GraphQL', 'PostgreSQL', 'Postman', 'Git'].map((s) => (
                        <span key={s} className="text-xs px-3 py-1 bg-white/5 text-[#ededed] rounded-full border border-white/10">{s}</span>
                      ))}
                    </div>

                    <p className="text-sm font-medium text-[#ededed] mt-2 md:mt-0">Web3 & Blockchain</p>
                    <div className="flex flex-wrap gap-2">
                      {['Ethereum', 'Hardhat', 'Truffle', 'MetaMask', 'Ethers.js', 'Web3.js', 'IPFS', 'Ganache'].map((s) => (
                        <span key={s} className="text-xs px-3 py-1 bg-white/5 text-[#ededed] rounded-full border border-white/10">{s}</span>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Experience */}
                <section>
                  <h3 className="text-[11px] font-mono text-[#6b7280] uppercase tracking-widest mb-6 border-b border-white/5 pb-2 px-1">Work Experience</h3>
                  <div className="space-y-8 px-1">
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-3">
                        <h4 className="text-lg font-medium text-[#ededed]">Vessify</h4>
                        <span className="text-xs font-mono text-[#6b7280]">Jan 2026 — April 2026</span>
                      </div>
                      <p className="text-sm text-[#a1a1aa] mb-3 font-mono">Full Stack Developer Intern</p>
                      <ul className="space-y-2.5">
                        <li className="text-[14px] text-[#9ca3af] flex gap-3"><span className="text-[#6b7280] mt-1.5 flex-shrink-0 text-[10px]">■</span> Working primarily on backend development, designing scalable APIs using Node.js.</li>
                        <li className="text-[14px] text-[#9ca3af] flex gap-3"><span className="text-[#6b7280] mt-1.5 flex-shrink-0 text-[10px]">■</span> Collaborating with frontend and product teams to integrate backend services.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-3">
                        <h4 className="text-lg font-medium text-[#ededed]">Sunday Tech</h4>
                        <span className="text-xs font-mono text-[#6b7280]">July 2024 — Nov 2024</span>
                      </div>
                      <p className="text-sm text-[#a1a1aa] mb-3 font-mono">Backend Developer Intern</p>
                      <ul className="space-y-2.5">
                        <li className="text-[14px] text-[#9ca3af] flex gap-3"><span className="text-[#6b7280] mt-1.5 flex-shrink-0 text-[10px]">■</span> Designed RESTful APIs using Node.js and Express for core functionality.</li>
                        <li className="text-[14px] text-[#9ca3af] flex gap-3"><span className="text-[#6b7280] mt-1.5 flex-shrink-0 text-[10px]">■</span> Engineered data models and queries using Sequelize ORM for SQL databases.</li>
                        <li className="text-[14px] text-[#9ca3af] flex gap-3"><span className="text-[#6b7280] mt-1.5 flex-shrink-0 text-[10px]">■</span> Implemented security best practices, auth, and input validation.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Education */}
                <section>
                  <h3 className="text-[11px] font-mono text-[#6b7280] uppercase tracking-widest mb-6 border-b border-white/5 pb-2 px-1">Education</h3>
                  <div className="px-1">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-3">
                      <h4 className="text-lg font-medium text-[#ededed]">Nanasaheb Mahadik College of Engineering</h4>
                      <span className="text-xs font-mono text-[#6b7280]">Nov 2022 — Jun 2026</span>
                    </div>
                    <p className="text-sm text-[#a1a1aa] mb-2 font-mono">B.E. in Computer Science and Engineering</p>
                    <p className="text-xs text-[#6b7280] font-mono mb-2">Relevant Coursework: OOP, Data Structures, Operating Systems</p>
                    <span className="text-sm text-[#ededed] font-medium bg-white/5 px-3 py-1 rounded inline-block border border-white/5">CGPA: 7.35 / 10</span>
                  </div>
                </section>

                {/* Project Work */}
                <section>
                  <h3 className="text-[11px] font-mono text-[#6b7280] uppercase tracking-widest mb-6 border-b border-white/5 pb-2 px-1">Project Work</h3>
                  <div className="space-y-8 px-1">
                    <div>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-1">
                        <h4 className="text-lg font-medium text-[#ededed] flex items-center gap-2">Maid Finder <span className="text-[10px] bg-white/5 text-[#6b7280] px-2 py-0.5 rounded border border-white/10 uppercase tracking-widest">Web3</span></h4>
                        <span className="text-xs italic text-[#6b7280]">Ethereum, Full Stack</span>
                      </div>
                      <ul className="space-y-2 mt-4">
                        <li className="text-[14px] text-[#9ca3af] flex gap-3"><span className="text-[#6b7280] mt-1.5 flex-shrink-0 text-[10px]">■</span> Built a decentralized platform connecting households with nearby maids using Ethereum smart contracts.</li>
                        <li className="text-[14px] text-[#9ca3af] flex gap-3"><span className="text-[#6b7280] mt-1.5 flex-shrink-0 text-[10px]">■</span> Integrated Web3.js and Metamask for wallet-based authentication and transparent transactions.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-1">
                        <h4 className="text-lg font-medium text-[#ededed]">Focusift</h4>
                        <span className="text-xs italic text-[#6b7280]">Next.js, TypeScript, PostgreSQL, Tailwind CSS</span>
                      </div>
                      <ul className="space-y-2 mt-4">
                        <li className="text-[14px] text-[#9ca3af] flex gap-3"><span className="text-[#6b7280] mt-1.5 flex-shrink-0 text-[10px]">■</span> Engineered a productivity web app to track focused work sessions using browser APIs.</li>
                        <li className="text-[14px] text-[#9ca3af] flex gap-3"><span className="text-[#6b7280] mt-1.5 flex-shrink-0 text-[10px]">■</span> Implemented interactive dashboards to visualize focus patterns and concentration trends.</li>
                        <li className="text-[14px] text-[#9ca3af] flex gap-3"><span className="text-[#6b7280] mt-1.5 flex-shrink-0 text-[10px]">■</span> Integrated a recommendation engine for effective focus techniques based on community feedback.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2 mb-1">
                        <h4 className="text-lg font-medium text-[#ededed]">Sahaay</h4>
                        <span className="text-xs italic text-[#6b7280]">Golang, Next.js, PostgreSQL</span>
                      </div>
                      <ul className="space-y-2 mt-4">
                        <li className="text-[14px] text-[#9ca3af] flex gap-3"><span className="text-[#6b7280] mt-1.5 flex-shrink-0 text-[10px]">■</span> Disaster support platform for missing person coordination.</li>
                        <li className="text-[14px] text-[#9ca3af] flex gap-3"><span className="text-[#6b7280] mt-1.5 flex-shrink-0 text-[10px]">■</span> Utilized multicast DNS (mDNS) for communication during natural disasters.</li>
                        <li className="text-[14px] text-[#9ca3af] flex gap-3"><span className="text-[#6b7280] mt-1.5 flex-shrink-0 text-[10px]">■</span> Robust stack: Go, Next.js, TypeScript, PostgreSQL, and Tailwind CSS.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Awards */}
                <section>
                  <h3 className="text-[11px] font-mono text-[#6b7280] uppercase tracking-widest mb-6 border-b border-white/5 pb-2 px-1">Awards & Certificates</h3>
                  <ul className="space-y-4 px-1">
                    <li className="text-[14px] text-[#9ca3af] flex gap-3">
                      <span className="text-[#6b7280] mt-1.5 flex-shrink-0 text-[10px]">■</span> 
                      <span><strong className="text-[#ededed]">1st Rank Holder, College:</strong> Secured top position consistently across semesters for academic excellence.</span>
                    </li>
                    <li className="text-[14px] text-[#9ca3af] flex gap-3">
                      <span className="text-[#6b7280] mt-1.5 flex-shrink-0 text-[10px]">■</span> 
                      <span><strong className="text-[#ededed]">1st Prize, Intercollege Avishkaar Tech Fest:</strong> Secured top position among multiple colleges for technical project and coding challenge.</span>
                    </li>
                    <li className="text-[14px] text-[#9ca3af] flex gap-3">
                      <span className="text-[#6b7280] mt-1.5 flex-shrink-0 text-[10px]">■</span> 
                      <span><strong className="text-[#ededed]">AIWOS Organization:</strong> Ranked among top 250 participants nationally and received bounty for MaidFinder.</span>
                    </li>
                  </ul>
                </section>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
