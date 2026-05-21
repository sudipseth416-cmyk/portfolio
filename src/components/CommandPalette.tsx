'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Code, Briefcase, Calendar, Mail, FileText, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import confetti from 'canvas-confetti';

interface CommandItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  action: () => void;
  category: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigateTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const triggerEasterEgg = () => {
    setIsOpen(false);
    confetti({
      particleCount: 100,
      spread: 60,
      colors: ['#06b6d4', '#6366f1', '#a855f7'],
    });
  };

  const commands: CommandItem[] = [
    {
      icon: User,
      title: 'Navigate to About',
      desc: 'Jump directly to the bio and statistics section',
      action: () => navigateTo('about'),
      category: 'Navigation',
    },
    {
      icon: Code,
      title: 'Navigate to Skills',
      desc: 'Jump directly to the tech proficiencies section',
      action: () => navigateTo('skills'),
      category: 'Navigation',
    },
    {
      icon: Briefcase,
      title: 'Navigate to Projects',
      desc: 'Jump directly to my bento grid project showcase',
      action: () => navigateTo('projects'),
      category: 'Navigation',
    },
    {
      icon: Calendar,
      title: 'Navigate to Experience',
      desc: 'Jump directly to my timeline and certification journey',
      action: () => navigateTo('experience'),
      category: 'Navigation',
    },
    {
      icon: Mail,
      title: 'Navigate to Contact',
      desc: 'Jump directly to the connection panel',
      action: () => navigateTo('contact'),
      category: 'Navigation',
    },
    {
      icon: FileText,
      title: 'Download Resume',
      desc: 'Open my resume in a new browser tab',
      action: () => {
        setIsOpen(false);
        window.open('/resume.pdf', '_blank');
      },
      category: 'Actions',
    },
    {
      icon: GithubIcon,
      title: 'View GitHub Profile',
      desc: 'Open my repositories page',
      action: () => {
        setIsOpen(false);
        window.open('https://github.com/sudipseth416-cmyk', '_blank');
      },
      category: 'Links',
    },
    {
      icon: LinkedinIcon,
      title: 'Connect on LinkedIn',
      desc: 'Open my professional network profile',
      action: () => {
        setIsOpen(false);
        window.open('https://www.linkedin.com/in/sudip-seth-491066325', '_blank');
      },
      category: 'Links',
    },
    {
      icon: Sparkles,
      title: 'Trigger Particle Burst',
      desc: 'Activate a colorful canvas-confetti particle spray',
      action: triggerEasterEgg,
      category: 'Actions',
    },
  ];

  const filteredCommands = commands.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.desc.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Floating help tip */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:block">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full glass hover:border-cyan-500/40 text-[10px] text-slate-400 hover:text-white font-mono transition-all duration-300"
        >
          <span>Press</span>
          <kbd className="px-1.5 py-0.5 rounded border border-white/10 bg-white/5">⌘ K</kbd>
          <span>to navigate</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 sm:pt-32">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#030712]/80 backdrop-blur-sm"
            />

            {/* Palette Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl rounded-2xl glass border border-white/10 shadow-2xl overflow-hidden bg-[#0a0f1d]"
            >
              {/* Search input bar */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5">
                <Search className="h-4 w-4 text-cyan-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-white focus:outline-none placeholder-slate-500"
                  autoFocus
                />
              </div>

              {/* Items List */}
              <div className="max-h-[300px] overflow-y-auto py-2">
                {filteredCommands.length > 0 ? (
                  <div className="flex flex-col">
                    {['Navigation', 'Actions', 'Links'].map((cat) => {
                      const catItems = filteredCommands.filter((c) => c.category === cat);
                      if (catItems.length === 0) return null;

                      return (
                        <div key={cat} className="flex flex-col">
                          <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-500 px-5 py-2">
                            {cat}
                          </span>
                          {catItems.map((cmd) => {
                            const CmdIcon = cmd.icon;
                            return (
                              <button
                                key={cmd.title}
                                onClick={cmd.action}
                                className="w-full flex items-center gap-4 px-5 py-3 hover:bg-white/5 text-left group transition-colors"
                              >
                                <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all">
                                  <CmdIcon className="h-4 w-4" />
                                </div>
                                <div>
                                  <span className="block text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                                    {cmd.title}
                                  </span>
                                  <span className="block text-[10px] text-slate-400">
                                    {cmd.desc}
                                  </span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="px-5 py-8 text-center text-xs text-slate-500 font-medium">
                    No commands matched your query.
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-5 py-2.5 bg-white/5 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                <div className="flex items-center gap-3">
                  <span>
                    <kbd className="px-1.5 py-0.5 rounded border border-white/10 bg-white/5 font-mono mr-1">↵</kbd>
                    select
                  </span>
                  <span>
                    <kbd className="px-1.5 py-0.5 rounded border border-white/10 bg-white/5 font-mono mr-1">esc</kbd>
                    close
                  </span>
                </div>
                <span>Sudip Seth Palette v1.0</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
