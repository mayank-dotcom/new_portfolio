'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRightIcon, CodeBracketIcon, EyeIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'NIYOJAKA',
    shortDescription: 'Revolutionary AI-powered Gmail agent that intelligently auto-responds to emails, saving hours of manual work with advanced language processing and seamless Gmail integration',
    image: '/project-images/niyojaka.png',
    fallbackGradient: 'from-yellow-500 to-red-600',
    technologies: ['Next.js', 'MongoDB', 'Node Mailer', 'Vector DB', 'Gmail API', 'LangChain'],
    category: 'AI/ML',
    gradient: 'from-yellow-500 to-red-600',
    link: 'https://gmailbot-dun.vercel.app/'
  },
  {
    id: 2,
    title: 'NARAD',
    shortDescription: 'Cutting-edge AI news verification system that combats misinformation by cross-referencing multiple sources and providing real-time authenticity ratings using advanced ML algorithms',
    image: '/project-images/narad.png',
    fallbackGradient: 'from-blue-500 to-blue-700',
    technologies: ['React.js', 'MongoDB', 'Gemini API', 'LangChain', 'News API', 'Node.js'],
    category: 'AI/ML',
    gradient: 'from-blue-500 to-blue-700',
    link: 'https://narad.net.in'
  },
  {
    id: 3,
    title: 'ME-BOT',
    shortDescription: 'Sophisticated AI-powered conversational bot that perfectly mimics personality and expertise, providing personalized interactions based on comprehensive resume data and professional experience',
    image: '/project-images/me-bot.png',
    fallbackGradient: 'from-red-500 to-red-700',
    technologies: ['LangChain', 'Next.js', 'MongoDB', 'ChatGPT API'],
    category: 'AI/ML',
    gradient: 'from-red-500 to-red-700',
    link: 'https://me-bot-rutx.vercel.app/'
  },
  {
    id: 4,
    title: 'HANUMAN LLM',
    shortDescription: 'Groundbreaking fine-tuned language model that embodies the wisdom and character of Hanuman, leveraging advanced transformer architecture and mythological knowledge bases',
    image: '/project-images/hanuman-llm.png',
    fallbackGradient: 'from-yellow-400 to-orange-600',
    technologies: ['LLaMA Model', 'FastAPI', 'Modal', 'Unsloth'],
    category: 'AI/ML',
    gradient: 'from-yellow-400 to-orange-600',
    link: 'https://github.com/mayank-dotcom/Hanuman_llm'
  },
  {
    id: 5,
    title: 'TRAVELLER',
    shortDescription: 'Comprehensive hotel booking platform with intuitive interface, real-time availability, secure payment processing, and seamless user experience for travelers worldwide',
    image: '/project-images/traveller.png',
    fallbackGradient: 'from-green-500 to-green-700',
    technologies: ['EJS', 'Bootstrap', 'MongoDB', 'Node.js'],
    category: 'Full Stack',
    gradient: 'from-green-500 to-green-700',
    link: 'https://traveller-web.onrender.com/'
  }
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="hud-border inline-block p-6 mb-8">
            <div className="hud-font text-yellow-400 text-sm mb-2">MISSION_FILES_ACCESSED...</div>
            <h2 className="text-4xl md:text-6xl font-bold glow-yellow-text">
              PROJECT_ARCHIVE
            </h2>
            <div className="hud-font text-gray-300 text-sm mt-4">
               DISPLAYING_CLASSIFIED_PROJECTS.EXE
              <br/>
               SECURITY_CLEARANCE: LEVEL_7
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative hud-border hover:border-yellow-400 overflow-hidden transition-all duration-300 cursor-pointer"
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Target lock indicators */}
              <div className="absolute top-2 left-2 z-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6"
                >
                  <svg viewBox="0 0 24 24" className="text-yellow-400 w-full h-full">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <path d="M12 4 L12 6 M12 18 L12 20 M4 12 L6 12 M18 12 L20 12" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </motion.div>
              </div>
              
              {/* Project status indicator */}
              <div className="absolute top-2 right-2 z-20 hud-font text-xs">
                <div className="flex items-center space-x-1">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2 h-2 bg-green-400 rounded-full"
                  />
                  <span className="text-green-400">ACTIVE</span>
                </div>
              </div>
              <div className="relative h-48 overflow-hidden">
                  {/* Project Image */}
                  <motion.div
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to gradient background if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallbackDiv = target.nextElementSibling as HTMLElement;
                        if (fallbackDiv) {
                          fallbackDiv.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback gradient background */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${project.fallbackGradient} hidden items-center justify-center`}
                      style={{ display: 'none' }}
                    >
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center opacity-80`}>
                        <CodeBracketIcon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/20" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 right-4"
                  >
                    <ArrowUpRightIcon className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="hud-border px-3 py-1 hud-font">
                      <span className="text-yellow-400 text-xs">
                        {project.category.toUpperCase()}_MISSION
                      </span>
                    </div>
                    <div className="text-xs text-green-400 hud-font">
                      ID: {project.id.toString().padStart(4, '0')}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300 hud-font hud-glow">
                    {project.title.toUpperCase()}
                  </h3>
                  
                  <div className="text-gray-300 mb-4 text-sm leading-relaxed hud-font">
                    <div className="text-yellow-400 text-xs mb-1">BRIEFING:</div>
                    {project.shortDescription}
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-yellow-400 text-xs hud-font">TECH_STACK:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-black/50 text-green-400 border border-green-400/30 hud-font"
                        >
                          {tech.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Progress/Status bar */}
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-yellow-400 hud-font">STATUS:</span>
                    <div className="flex-1 h-1 bg-black/50 border border-yellow-400/30 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ delay: index * 0.1, duration: 1 }}
                        className="h-full bg-gradient-to-r from-green-400 to-yellow-400"
                      />
                    </div>
                    <span className="text-green-400 hud-font">COMPLETE</span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 mt-4">
                    <Link href={`/projects/${project.id}`}>
                      <motion.button
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: "0 0 20px rgba(255, 215, 0, 0.6)",
                          textShadow: "0 0 8px rgba(255, 215, 0, 0.8)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full hud-border hud-font text-yellow-400 hover:text-black hover:bg-yellow-400 px-4 py-2 transition-all duration-300 relative overflow-hidden group text-sm"
                      >
                        <motion.div
                          className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-20"
                          whileHover={{ 
                            background: [
                              "linear-gradient(45deg, rgba(255,215,0,0.1), rgba(255,215,0,0.3))",
                              "linear-gradient(45deg, rgba(255,215,0,0.3), rgba(255,215,0,0.1))"
                            ]
                          }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        />
                        <div className="relative z-10 flex items-center justify-center space-x-2">
                          <DocumentMagnifyingGlassIcon className="w-4 h-4" />
                          <span>[EXECUTE] DETAILED_ANALYSIS</span>
                        </div>
                      </motion.button>
                    </Link>
                    
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)",
                        textShadow: "0 0 8px rgba(34, 197, 94, 0.8)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full hud-border hud-font text-green-400 hover:text-black hover:bg-green-400 px-4 py-2 transition-all duration-300 relative overflow-hidden group text-sm"
                    >
                      <motion.div
                        className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20"
                        whileHover={{ 
                          background: [
                            "linear-gradient(45deg, rgba(34,197,94,0.1), rgba(34,197,94,0.3))",
                            "linear-gradient(45deg, rgba(34,197,94,0.3), rgba(34,197,94,0.1))"
                          ]
                        }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      />
                      <div className="relative z-10 flex items-center justify-center space-x-2">
                        <EyeIcon className="w-4 h-4" />
                        <span>[ACCESS] LIVE_DEMO</span>
                      </div>
                    </motion.a>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="hud-border inline-block p-6">
            <div className="hud-font text-yellow-400 text-sm mb-4">
              ADDITIONAL_MISSIONS_AVAILABLE
            </div>
            <p className="text-gray-300 mb-6 hud-font">
              {'>>'} REQUEST_COLLABORATION_PROTOCOL.EXE
              <br/>
              {'>>'} INITIATE_CONTACT_SEQUENCE?
            </p>
            <motion.a
              href="mailto:mayank642work@gmail.com?subject=Project%20Collaboration%20Inquiry&body=Hello%20Mayank%2C%0A%0AI%20visited%20your%20portfolio%20and%20am%20interested%20in%20discussing%20a%20potential%20collaboration.%0A%0ABest%20regards"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 25px rgba(255, 215, 0, 0.8)",
                textShadow: "0 0 10px rgba(255, 215, 0, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="hud-border hud-font text-yellow-400 hover:text-black hover:bg-yellow-400 px-8 py-4 transition-all duration-300 relative overflow-hidden group inline-block"
            >
              <motion.div
                className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-20"
                whileHover={{ 
                  background: [
                    "linear-gradient(45deg, rgba(255,215,0,0.1), rgba(255,215,0,0.3))",
                    "linear-gradient(45deg, rgba(255,215,0,0.3), rgba(255,215,0,0.1))"
                  ]
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
              <span className="relative z-10">[EXECUTE] INITIATE_CONTACT</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
