'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiBootstrap, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiReact, 
  SiNextdotjs, 
  SiPytorch,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiFirebase,
  SiLangchain,
  SiFastapi
} from 'react-icons/si';
import { CpuChipIcon, ChatBubbleLeftRightIcon, PaintBrushIcon, CloudIcon } from '@heroicons/react/24/outline';

const skills = [
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26', category: 'Frontend' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6', category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', category: 'Frontend' },
  { name: 'React.js', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', category: 'Frontend' },
  { name: 'Shadcn UI', icon: PaintBrushIcon, color: '#000000', category: 'Frontend' },
  { name: 'Aceternity UI', icon: PaintBrushIcon, color: '#8B5CF6', category: 'Frontend' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend' },
  { name: 'Express.js', icon: SiExpress, color: '#000000', category: 'Backend' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688', category: 'Backend' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
  { name: 'SQL', icon: SiMysql, color: '#4479A1', category: 'Database' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', category: 'Database' },
  { name: 'Vector DB', icon: CpuChipIcon, color: '#8B5CF6', category: 'Database' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C', category: 'AI/ML' },
  { name: 'LLM', icon: CpuChipIcon, color: '#10B981', category: 'AI/ML' },
  { name: 'Chatbots', icon: ChatBubbleLeftRightIcon, color: '#F59E0B', category: 'AI/ML' },
  { name: 'AI Agents', icon: CpuChipIcon, color: '#EF4444', category: 'AI/ML' },
  { name: 'LangChain', icon: SiLangchain, color: '#1C3C3C', category: 'AI/ML' },
  { name: 'Unsloth', icon: CpuChipIcon, color: '#FF6B35', category: 'AI/ML' },
  { name: 'Node Mailer', icon: CloudIcon, color: '#339933', category: 'APIs' },
  { name: 'Gmail Pub/Sub API', icon: CloudIcon, color: '#EA4335', category: 'APIs' },
  { name: 'OpenAI API', icon: CloudIcon, color: '#412991', category: 'APIs' },
];

const categories = ['Frontend', 'Backend', 'Database', 'AI/ML', 'APIs'];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="hud-border inline-block p-6 mb-8">
            <div className="hud-font text-yellow-400 text-sm mb-2">SCANNING_TECHNOLOGIES...</div>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold glow-yellow-text">
              TECH_ARSENAL
            </h2>
            <div className="hud-font text-gray-300 text-sm mt-4 max-w-2xl">
               ANALYZING_COMBAT_SYSTEMS.EXE
              <br/>
               TECHNOLOGIES_MASTERED: 26/26
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="hud-border hover:border-yellow-400 transition-all duration-300 relative group p-6"
            >
              {/* Category Header with Target Lock */}
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute top-2 right-2 w-4 h-4"
                >
                  <svg viewBox="0 0 16 16" className="text-yellow-400 w-full h-full">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <path d="M8 2 L8 4 M8 12 L8 14 M2 8 L4 8 M12 8 L14 8" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </motion.div>
                
                <h3 className="text-lg md:text-xl font-bold text-yellow-400 hud-font hud-glow text-center leading-tight">
                  <span className="block text-sm md:text-base">{category.toUpperCase()}</span>
                  <span className="block text-xs md:text-sm">
                    {category === 'APIs' ? 'INTEGRATION' : 'SYSTEMS'}
                  </span>
                </h3>
              </div>
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="flex items-center space-x-3 p-3 border border-yellow-500/20 hover:border-yellow-400/50 bg-black/20 hover:bg-black/40 transition-all duration-300 cursor-pointer group relative"
                    >
                      {/* Skill Icon with HUD styling */}
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300 relative">
                        {React.createElement(skill.icon as React.ComponentType<any>, {
                          className: "w-6 h-6",
                          style: { color: skill.color }
                        })}
                        
                        {/* Target reticle overlay */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute -inset-2 border border-yellow-400/30 rounded"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <span className="text-white font-medium group-hover:text-yellow-300 transition-colors duration-300 hud-font">
                          {skill.name.toUpperCase()}
                        </span>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                          className="h-0.5 bg-gradient-to-r from-yellow-400 to-transparent mt-1"
                        />
                      </div>
                      
                      {/* Status indicator */}
                      <motion.div
                        animate={{ 
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 bg-green-400 rounded-full"
                      />
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="hud-border p-8 relative">
            {/* Radar animation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute top-4 right-4 w-8 h-8"
            >
              <svg viewBox="0 0 32 32" className="text-green-400 w-full h-full opacity-60">
                <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M16 4 L16 28 M4 16 L28 16" stroke="currentColor" strokeWidth="1"/>
                <path d="M16 4 L20 12" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </motion.div>
            
            <div className="hud-font">
              <div className="text-yellow-400 text-sm mb-2">ARSENAL_SUMMARY.LOG</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold glow-yellow-text mb-4 text-center">
                <span className="block sm:inline">SPECIALIZED</span>
                <span className="block sm:inline">_COMBAT_SYSTEMS</span>
              </h3>
              <div className="text-gray-300 max-w-3xl hud-font text-sm leading-relaxed">
                 FRONTEND_WEAPONS: REACT.JS, NEXT.JS, TYPESCRIPT<br/>
                 BACKEND_SYSTEMS: NODE.JS, EXPRESS.JS, PYTHON<br/>
                 AI_ARSENAL: PYTORCH, LLM_INTEGRATION, VECTOR_DB<br/>
                 STATUS: ALL_SYSTEMS_OPERATIONAL
              </div>
              
              {/* Progress bars for each system */}
              <div className="mt-6 space-y-2">
                {['FRONTEND', 'BACKEND', 'AI_SYSTEMS', 'DATABASE', 'API'].map((system, index) => (
                  <div key={system} className="flex items-center space-x-4">
                    <span className="text-yellow-400 text-xs w-20 text-left">{system}:</span>
                    <div className="flex-1 h-1 bg-black/50 border border-yellow-400/30 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${90 + Math.random() * 10}%` }}
                        transition={{ delay: index * 0.2, duration: 1.5 }}
                        className="h-full bg-gradient-to-r from-green-400 to-yellow-400"
                      />
                    </div>
                    <span className="text-green-400 text-xs">READY</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
