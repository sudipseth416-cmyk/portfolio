'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Sparkles, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './icons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#6366f1', '#a855f7', '#f43f5e'],
    });

    const mailtoSubject = encodeURIComponent(form.subject || 'Portfolio Contact');
    const mailtoBody = encodeURIComponent(
      `Hello Sudip,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    
    window.location.href = `mailto:sudipseth416@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/5 px-3 py-1 text-xs font-medium text-rose-400 mb-3"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Connection</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold sm:text-4xl tracking-tight"
          >
            📩 Contact Me
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass p-8 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Let&apos;s Build Together</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-8">
                Have a question, feedback, or a project concept in mind? Feel free to reach out. I am open to discussing collaborations, internships, and data-centric ideas.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-mono">Email Address</span>
                    <a href="mailto:sudipseth416@gmail.com" className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors">
                      sudipseth416@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-cyan-400 group-hover:scale-110 transition-transform">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-mono">Location</span>
                    <span className="text-sm font-semibold text-slate-200">
                      West Bengal, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Dock */}
            <div className="mt-12 pt-8 border-t border-white/5">
              <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-mono mb-4">Connect Socially</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/sudipseth416-cmyk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/5 text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sudip-seth-491066325"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/5 text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/soft_glitch_2007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/5 text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass p-8 rounded-2xl relative"
          >
            {submitted ? (
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 bg-[#030712]/90 backdrop-blur-md rounded-2xl z-20">
                <CheckCircle className="h-16 w-16 text-cyan-400 mb-4 animate-bounce" />
                <h3 className="text-xl font-bold text-white mb-2">Message Pre-filled!</h3>
                <p className="text-sm text-slate-400 max-w-sm">
                  Your mail client has been opened with your message. Please click send in your application to dispatch the mail!
                </p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-xs font-mono text-slate-400 mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="glass border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs font-mono text-slate-400 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="glass border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject" className="text-xs font-mono text-slate-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="glass border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs font-mono text-slate-400 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="glass border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Tell me about your thoughts..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 py-3 text-sm font-semibold text-black hover:opacity-90 active:scale-[0.98] transition-all duration-300"
              >
                <span>Launch Message</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
