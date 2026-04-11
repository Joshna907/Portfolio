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

    // Simple validation
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all required fields.');
      return;
    }

    setStatus('sending');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'c1284e2b-d51e-4340-a53f-56009b6f646f',
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          from_name: 'Portfolio Contact Form',
          subject: `New Message from ${form.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('sent');
        setForm({ name: '', phone: '', email: '', message: '' });
        
        // Reset to idle after 5 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        console.error('Submission failed:', result.message);
        setStatus('idle');
        alert('Something went wrong. Please try again or email me directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('idle');
      alert('Network error. Please check your connection and try again.');
    }
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
            className={`group relative w-full h-12 text-[15px] font-bold rounded-xl overflow-hidden transition-all duration-500 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed ${
              status === 'sent' 
                ? 'bg-gradient-to-b from-green-400 to-green-600 text-white shadow-[0_0_20px_rgba(74,222,128,0.2)]' 
                : 'bg-gradient-to-b from-white via-[#f8f8f8] to-[#e8e8e8] text-black shadow-[0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,1)]'
            }`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {status === 'idle' && 'Submit'}
              {status === 'sending' && (
                <>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full"
                  />
                  Sending...
                </>
              )}
              {status === 'sent' && '✓ Sent!'}
            </span>
            
            {/* Real Shine sweep */}
            <div className="absolute inset-0 z-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
            
            {!status && (
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
