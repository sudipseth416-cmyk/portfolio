'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './icons';
import Image from 'next/image';

const roles = [
  'Future Data Scientist 🚀',
  'Python Developer 💻',
  'AI Enthusiast 🤖',
  'ML Explorer 🧠',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting ? prev.slice(0, -1) : fullText.slice(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-24 md:py-32 cyber-grid">
      {/* Background radial overlays */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#030712]/80 to-[#030712]" />
      
      <div className="absolute top-[20%] left-[10%] h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[120px] animate-pulse-slow" />

      <div className="mx-auto max-w-7xl px-6 w-full relative z-10 grid grid-cols-1 gap-12 md:grid-cols-12 items-center">
        {/* Left Column: Text Content */}
        <div className="md:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-400 mb-6"
          >
            <Sparkles className="h-3 w-3 animate-spin" style={{ animationDuration: '3s' }} />
            <span>Welcome to my Digital Space</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent text-glow">
              Sudip Seth
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 mt-3 text-lg sm:text-xl font-mono text-slate-400 flex items-center"
          >
            <span>I am a&nbsp;</span>
            <span className="text-cyan-400 font-bold border-r-2 border-cyan-400 pr-1 animate-pulse">
              {currentText}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            I design and build beginner-friendly tech applications, focusing on AI, Data Science, and Machine Learning. Eager to solve problems, develop logic, and push limits.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-black transition-all hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
            >
              <span>Explore My Work</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-cyan-500/40"
            >
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex items-center gap-6"
          >
            <a
              href="https://github.com/sudipseth416-cmyk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sudip-seth-491066325"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/soft_glitch_2007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
            >
              <InstagramIcon className="h-6 w-6" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Profile Picture */}
        <div className="md:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            className="relative"
          >
            {/* Spinning decorative neon glow borders */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 opacity-75 blur-md animate-pulse" />
            
            {/* Floating Image Container */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="relative h-[240px] w-[240px] sm:h-[280px] sm:w-[280px] rounded-full border-4 border-cyan-400 overflow-hidden shadow-[0_0_35px_rgba(6,182,212,0.4)]"
            >
              <Image
                src="/picture.jpeg"
                alt="Sudip Seth"
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
