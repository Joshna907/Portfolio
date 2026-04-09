'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiCplusplus,
  SiMongodb,
  SiPostgresql,
  SiNodedotjs,
  SiHtml5,
  SiJavascript,
  SiGo,
  SiGraphql,
  SiSolidity,
  SiPrisma,
} from 'react-icons/si';
import { FaEthereum, FaWallet } from 'react-icons/fa';
import ThemeSwitcher from './ThemeSwitcher';

const toolsRow1 = [
  { icon: <SiHtml5 color="#E34F26" />, name: 'HTML' },
  { icon: <SiJavascript color="#F7DF1E" />, name: 'JavaScript' },
  { icon: <SiTypescript color="#3178C6" />, name: 'TypeScript' },
  { icon: <SiReact color="#61DAFB" />, name: 'React.js' },
  { icon: <SiNextdotjs color="#ffffff" />, name: 'Next.js' },
  { icon: <SiTailwindcss color="#06B6D4" />, name: 'Tailwind' },
  { icon: <SiCplusplus color="#00599C" />, name: 'C++' },
  { icon: <SiSolidity color="#646cff" />, name: 'Solidity' },
];

const toolsRow2 = [
  { icon: <FaEthereum color="#3C3C3D" />, name: 'Ethereum' },
  { icon: <FaWallet color="#F6851B" />, name: 'MetaMask' },
  { icon: <SiGo color="#00ADD8" />, name: 'Golang' },
  { icon: <SiNodedotjs color="#339933" />, name: 'Node.js' },
  { icon: <SiMongodb color="#47A248" />, name: 'MongoDB' },
  { icon: <SiPostgresql color="#4169E1" />, name: 'PostgreSQL' },
  { icon: <SiGraphql color="#E10098" />, name: 'GraphQL' },
  { icon: <SiPrisma color="#2D3748" />, name: 'Prisma' },
];

function ToolPill({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="group flex items-center gap-2 sm:gap-2.5 bg-[#141414]/90 hover:bg-[#1a1a1a] border border-white/5 hover:border-white/10 py-2 px-3.5 sm:py-2.5 sm:px-5 rounded-full transition-all duration-300 cursor-default flex-shrink-0 shadow-lg backdrop-blur-md">
      <span className="text-sm sm:text-base md:text-lg transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      <span className="text-[11px] sm:text-[13px] md:text-[14px] text-text-secondary font-medium group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({
  tools,
  direction = 'left',
  duration = 25,
}: {
  tools: { icon: React.ReactNode; name: string }[];
  direction?: 'left' | 'right';
  duration?: number;
}) {
  const items = [...tools, ...tools, ...tools, ...tools];
  return (
    <div className="relative overflow-hidden w-full py-1">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 z-10 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        className="flex gap-3 sm:gap-4 md:gap-5 w-max"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration,
            ease: 'linear',
          },
        }}
      >
        {items.map((tool, i) => (
          <ToolPill key={`${tool.name}-${i}`} icon={tool.icon} name={tool.name} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative text-foreground py-6 sm:py-8 md:py-16 selection:bg-foreground selection:text-background min-h-screen overflow-hidden">
      {/* Fixed Theme Controls */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-10 md:right-10 z-[200] scale-[0.75] sm:scale-[0.85] md:scale-100 origin-top-right"
      >
        <ThemeSwitcher />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8 mt-2 order-2 lg:order-1"
        >
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight text-foreground leading-[0.95]">
              Jothsana, 23
            </h1>
            <p className="text-[15px] sm:text-[17px] md:text-[19px] text-text-secondary font-light leading-[1.6] max-w-xl">
              I&apos;m a full-stack engineer who builds fast and actually cares about how things work under the hood.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5 text-[14px] sm:text-[15px] md:text-[16px] text-text-secondary leading-[1.7] max-w-xl">
            <p>
              I&apos;m a developer from Mumbai who loves building things that people use, whether it&apos;s websites, d-apps, or tools that solve real problems.
            </p>
            <p className="text-foreground pt-1 sm:pt-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted transition-colors mr-3">Available</span>
              Full-Time or Freelance. <span 
                onClick={scrollToContact}
                className="font-bold underline decoration-accent-color/30 underline-offset-8 cursor-pointer hover:text-accent-color transition-colors"
              >
                Let&apos;s talk.
              </span>
            </p>
          </div>
        </motion.div>

        {/* Right Column — Photo Booth */}
        <div className="space-y-12 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 0.95, rotate: -3.5 }}
            whileHover={{ rotate: 0, scale: 1, transition: { duration: 0.4 } }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group mx-auto lg:mx-0 max-w-[260px] sm:max-w-[320px] lg:max-w-[380px] lg:ml-auto"
          >
            <div className="absolute -inset-4 sm:-inset-6 md:-inset-10 bg-white/5 blur-2xl md:blur-3xl rounded-full pointer-events-none group-hover:bg-white/10 transition-colors duration-500" />

            <div className="relative bg-[#1a1a1a] p-1.5 rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/10">
              <div className="flex gap-1.5 mb-2 px-2 pt-1 border-b border-white/5 pb-2 bg-[#1a1a1a]">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/20" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/20" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/20" />
                <span className="text-[8px] sm:text-[10px] text-gray-500 ml-2 font-mono uppercase tracking-widest">Photo Booth</span>
              </div>

              <div className="relative aspect-square grayscale transition-all duration-700 bg-zinc-900 rounded-lg overflow-hidden border border-white/5">
                <Image
                  src="/images/ghibli.png"
                  alt="Portrait"
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                  priority
                />

                <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-6 bg-black/40 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-white/10">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-white/20" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-white/20" />
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/40 flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10" />
                  </div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-white/20" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-white/20" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tools — Infinite Scrolling Marquee */}
      <div id="tools" className="relative z-10 mt-6 lg:mt-10 max-w-6xl mx-auto px-4 sm:px-6 pb-2">
        <h2 className="text-lg sm:text-xl md:text-[22px] text-foreground mb-6 sm:mb-8 text-center lg:text-left">Tools that I have used</h2>

        <div className="space-y-1">
          <MarqueeRow tools={toolsRow1} direction="left" duration={90} />
          <MarqueeRow tools={toolsRow2} direction="right" duration={85} />
        </div>
      </div>
    </section>
  );
}
