'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
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
    
    // Simulate API call for feedback
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', phone: '', email: '', message: '' });
      
      // Reset back to idle after a few seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-medium text-white">Get in Touch</h2>
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
          <div className="grid grid-cols-2 gap-3">
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
          <Button
            type="submit"
            disabled={status !== 'idle'}
            className="w-full bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-200 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'idle' ? 'Submit' : status === 'sending' ? 'Sending...' : 'Sent!'}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
