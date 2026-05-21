'use client';

import { motion } from 'framer-motion';
import { User, Rocket, Cpu, Award } from 'lucide-react';

const stats = [
  { value: '3+', label: 'Personal Projects' },
  { value: '500+', label: 'Hours Coding' },
  { value: '2+', label: 'Certifications' },
  { value: '100%', label: 'Commitment' },
];

const cards = [
  {
    icon: Cpu,
    title: 'Interests & Focus',
    text: 'Deeply interested in Data Science and Machine Learning. I enjoy analyzing datasets, drawing insights, and training predictive models.',
    color: 'from-cyan-500/20 to-indigo-500/20',
    borderColor: 'group-hover:border-cyan-500/40',
  },
  {
    icon: Rocket,
    title: 'Quick Learner',
    text: 'Possess a highly adaptive mindset, allowing me to grasp new paradigms, libraries, and logic structures quickly and efficiently.',
    color: 'from-indigo-500/20 to-purple-500/20',
    borderColor: 'group-hover:border-indigo-500/40',
  },
  {
    icon: Award,
    title: 'Motivated & Disciplined',
    text: 'Consistency is my superpower. I code daily, solve logical puzzles, and work to expand my technical boundary.',
    color: 'from-purple-500/20 to-rose-500/20',
    borderColor: 'group-hover:border-purple-500/40',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 px-3 py-1 text-xs font-medium text-purple-400 mb-3"
          >
            <User className="h-3.5 w-3.5" />
            <span>Identity</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold sm:text-4xl tracking-tight"
          >
            🚀 About Me
          </motion.h2>
        </div>

        {/* Main Grid: Bio & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 glass p-8 rounded-2xl relative group"
          >
            <div className="absolute top-0 right-0 h-24 w-24 bg-cyan-500/10 blur-xl rounded-full" />
            <h3 className="text-xl font-bold text-cyan-400 mb-4">My Journey</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              I am passionate about technology and continuously exploring Data Science, Machine Learning, and Artificial Intelligence. I began my programming journey by tackling coding challenges, building core algorithms, and developing robust problem-solving logic.
            </p>
            <p className="text-slate-300 leading-relaxed">
              For me, coding is not just about writing syntax; it is about finding optimal solutions, translating logic to compute power, and building apps that enhance productivity. I am highly motivated and always eager to learn and grow.
            </p>
          </motion.div>

          {/* Stats Column */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl text-center flex flex-col justify-center items-center h-32 hover:border-cyan-500/30 transition-colors"
              >
                <div className="text-3xl font-extrabold text-cyan-400 tracking-tight mb-1 text-glow">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Focus Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative rounded-2xl glass p-6 overflow-hidden glass-hover"
              >
                {/* Background glow gradient */}
                <div className={`absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${card.color} blur-2xl group-hover:scale-125 transition-transform duration-500`} />
                
                <div className="relative z-10">
                  <div className="inline-flex rounded-xl bg-white/5 p-3 text-cyan-400 mb-5 border border-white/5 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{card.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
