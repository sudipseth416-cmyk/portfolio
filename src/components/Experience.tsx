'use client';

import { motion } from 'framer-motion';
import { Calendar, Award, BookOpen, GraduationCap } from 'lucide-react';

const timelineData = [
  {
    date: '2025 - Present',
    title: 'Data Science & AI Exploration',
    sub: 'Self-Learning Journey',
    desc: 'Self-directed learning covering Python, statistics, core data structures, algorithms, and training basic machine learning models. Built multiple custom projects to implement learned principles.',
    icon: BookOpen,
    color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400',
  },
  {
    date: '2024',
    title: 'Python Bootcamp',
    sub: 'LetsUpgrade Certification',
    desc: 'Completed intensive bootcamp focused on core Python programming, syntax architectures, object-oriented concepts, and problem solving workflows.',
    icon: Award,
    color: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30 text-indigo-400',
  },
  {
    date: '2023 - Present',
    title: 'Logic & Problem Solving Fundamentals',
    sub: 'Academic & Platform Journey',
    desc: 'Began practicing programming languages (Python, C, HTML) and algorithms. Actively solving programming puzzles on platforms like HackerRank and CodeChef to solidify logic building.',
    icon: GraduationCap,
    color: 'from-purple-500/20 to-rose-500/20 border-purple-500/30 text-purple-400',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 px-3 py-1 text-xs font-medium text-purple-400 mb-3"
          >
            <Calendar className="h-3.5 w-3.5" />
            <span>Timeline</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold sm:text-4xl tracking-tight"
          >
            📚 Experience & Timeline
          </motion.h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 h-full w-[2px] bg-slate-800 transform sm:-translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  className={`flex flex-col sm:flex-row items-start justify-between relative ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Circle Node Icon */}
                  <div className="absolute left-4 sm:left-1/2 top-1.5 h-9 w-9 rounded-full bg-[#030712] border-2 border-slate-700 flex items-center justify-center transform -translate-x-1/2 z-20">
                    <Icon className="h-4 w-4 text-cyan-400" />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`w-full sm:w-[44%] pl-12 sm:pl-0 relative`}
                  >
                    <div className={`glass p-6 rounded-2xl bg-gradient-to-br ${item.color} border hover:border-cyan-500/30 transition-colors`}>
                      <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-400 block mb-2">
                        {item.date}
                      </span>
                      <h3 className="text-base font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <h4 className="text-xs font-semibold text-slate-400 mb-4">
                        {item.sub}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>

                  {/* Spacer for Desktop alignment */}
                  <div className="hidden sm:block w-[44%]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
