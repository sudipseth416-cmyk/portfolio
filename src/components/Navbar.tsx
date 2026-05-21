'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Terminal, Sparkles } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer to highlight active nav item
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? 'py-4 bg-[#030712]/50 backdrop-blur-md border-b border-white/5'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Logo/Brand */}
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-lg font-bold tracking-wider text-cyan-400 group"
        >
          <Terminal className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
          <span>SUDIP<span className="text-white">.SETH</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 rounded-full bg-white/5 p-1 backdrop-blur-md border border-white/5">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-cyan-400 bg-white/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Action / Cmd+K Helper */}
        <div className="hidden md:flex items-center gap-3">
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-slate-400">
            <span className="text-xs">⌘</span>K
          </kbd>
          <a
            href="#contact"
            className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 text-xs font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/5 transition-all"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-[#030712]/95 backdrop-blur-lg border-t border-white/5 px-8 py-12 flex flex-col gap-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-semibold text-slate-300 hover:text-cyan-400 transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-6 w-full text-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition-all"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
