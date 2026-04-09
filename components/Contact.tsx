'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  SiGithub,
  SiLinkedin,
  SiX,
} from 'react-icons/si';
import { FaMedium } from 'react-icons/fa6';

const socials = [
  { icon: SiGithub, href: 'https://github.com/Joshna907', label: 'GitHub' },
  { icon: FaMedium, href: 'https://medium.com/@joshnawaikar', label: 'Medium' },
  { icon: SiLinkedin, href: 'https://www.linkedin.com/in/jothsana-waikar-a37a8423a/', label: 'LinkedIn' },
  { icon: SiX, href: 'https://x.com/JothsanaW', label: 'X' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== 'idle') return;

    setStatus('sending');
    
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', phone: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-xl sm:text-2xl font-medium text-white">Get in Touch</h2>
          <p className="text-[#9ca3af] leading-relaxed text-sm">
            If you have any inquiries, please feel free to reach out. You can
            contact me via email at{' '}
            <a
              href="mailto:joshnawaikar@gmail.com"
              className="text-white hover:underline underline-offset-4"
            >
              joshnawaikar@gmail.com
            </a>
          </p>

          <div className="space-y-3">
            <p className="text-sm text-[#6b7280]">Follow me</p>
            <div className="flex flex-wrap gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-[#9ca3af] hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-transparent border-white/10 text-white placeholder:text-[#6b7280] focus-visible:ring-white/20 focus-visible:border-white/30 rounded-sm"
            />
            <Input
              name="phone"
              placeholder="Phone No"
              value={form.phone}
              onChange={handleChange}
              className="bg-transparent border-white/10 text-white placeholder:text-[#6b7280] focus-visible:ring-white/20 focus-visible:border-white/30 rounded-sm"
            />
          </div>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="bg-transparent border-white/10 text-white placeholder:text-[#6b7280] focus-visible:ring-white/20 focus-visible:border-white/30 rounded-sm"
          />
          <Textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
            className="bg-transparent border-white/10 text-white placeholder:text-[#6b7280] focus-visible:ring-white/20 focus-visible:border-white/30 rounded-sm resize-none"
          />
          <button
            type="submit"
            disabled={status !== 'idle'}
            className="relative w-full h-12 text-[15px] font-semibold rounded-lg overflow-hidden transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-b from-white via-[#f8f8f8] to-[#e8e8e8] text-black shadow-[0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,1)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.15),inset_0_1px_0_rgba(255,255,255,1)] hover:from-white hover:via-white hover:to-[#f0f0f0] active:from-[#e0e0e0] active:to-[#d0d0d0] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
          >
            <span className="relative z-10">
              {status === 'idle' ? 'Submit' : status === 'sending' ? 'Sending...' : '✓ Sent!'}
            </span>
            {/* Shine sweep */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent translate-x-[-200%] hover:translate-x-[200%] transition-transform duration-700 pointer-events-none" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
