'use client';

import { motion } from 'framer-motion';
import { Cpu, Code, Shield } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5',
    glowColor: 'cyan',
    skills: [
      { name: 'Python', level: 75, desc: 'Core scripting, libraries, and basic data analysis' },
      { name: 'HTML & CSS', level: 75, desc: 'Semantic layouts, Flexbox/Grid, and responsive styling' },
      { name: 'JavaScript', level: 70, desc: 'DOM manipulation, Event handlers, and ES6+ features' },
      { name: 'C Programming', level: 60, desc: 'Basic data processing, functions, and pointers' },
    ],
  },
  {
    title: 'Core Concepts',
    icon: Cpu,
    color: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5',
    glowColor: 'indigo',
    skills: [
      { name: 'Logic Building', level: 85, desc: 'Structuring solutions for conditional problem sets' },
      { name: 'Problem Solving', level: 80, desc: 'Analyzing parameters and coding optimal resolutions' },
      { name: 'Data Structures', level: 65, desc: 'Implementation of Arrays, Lists, Stacks, and Queues' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Shield,
    color: 'text-purple-400 border-purple-500/20 bg-purple-500/5',
    glowColor: 'purple',
    skills: [
      { name: 'Git & GitHub', level: 75, desc: 'Commit histories, branch structures, and workspace push' },
      { name: 'VS Code', level: 85, desc: 'Environment customization, debugging, and terminal operations' },
      { name: 'Competitive Coding', level: 70, desc: 'Solving puzzles on HackerRank and CodeChef' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-400 mb-3"
          >
            <Code className="h-3.5 w-3.5" />
            <span>Proficiencies</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold sm:text-4xl tracking-tight"
          >
            💻 My Skills
          </motion.h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.15 }}
                className="glass p-8 rounded-2xl flex flex-col h-full hover:border-cyan-500/30 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className={`p-2.5 rounded-xl border ${category.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>

                {/* Skill List */}
                <div className="flex-1 flex flex-col gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="flex flex-col">
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="text-sm font-semibold text-slate-200">{skill.name}</span>
                        <span className="text-xs font-mono text-cyan-400">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar Container */}
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mb-1">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 + 0.2 }}
                          className={`h-full rounded-full bg-gradient-to-r ${
                            category.glowColor === 'cyan'
                              ? 'from-cyan-500 to-blue-500'
                              : category.glowColor === 'indigo'
                              ? 'from-indigo-500 to-purple-500'
                              : 'from-purple-500 to-rose-500'
                          }`}
                        />
                      </div>
                      <span className="text-[11px] text-slate-400 leading-normal">{skill.desc}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
