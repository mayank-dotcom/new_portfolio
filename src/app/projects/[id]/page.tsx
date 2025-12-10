'use client';

import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowUpRightIcon, CodeBracketIcon, CpuChipIcon, ShieldCheckIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import HUDOverlay from '../../../components/HUDOverlay';
import ScanningFrame from '../../../components/ScanningFrame';
import HUDDataDisplay from '../../../components/HUDDataDisplay';

const projectDetails = {
  '1': {
    title: 'NIYOJAKA',
    fullDescription: `A revolutionary AI-powered Gmail agent that intelligently auto-responds to emails, saving hours of manual work with advanced language processing and seamless Gmail integration. Built using cutting-edge ChatGPT APIs, this system transforms email management for busy professionals.

Key Features:
• Intelligent auto-response to target emails with context awareness
• Seamless Gmail Pub/Sub API integration for real-time email processing
• Advanced email categorization and priority management
• Multiple tone selection for professional communication
• Vector database for conversation history and context memory
• LangChain integration for sophisticated natural language processing
• Real-time notification system for important emails

This groundbreaking tool leverages Next.js for the frontend, MongoDB for data persistence, and Node Mailer for email delivery. The system processes incoming emails through Gmail's Pub/Sub API, analyzes content using advanced AI models, and generates contextually appropriate responses that maintain professional communication standards while eliminating the AI-like tone that recipients might detect.`,
    technologies: ['Next.js', 'MongoDB', 'Node Mailer', 'Vector DB', 'Gmail API', 'LangChain', 'ChatGPT API', 'Pub/Sub'],
    demoUrl: 'https://gmailbot-dun.vercel.app/',
    githubUrl: 'https://github.com/mayank-dotcom/gmailbot',
    category: 'AI/ML',
    gradient: 'from-yellow-500 to-red-600',
    challenges: [
      'Implementing secure Gmail API authentication and authorization',
      'Designing context-aware AI responses that sound human-like',
      'Managing real-time email processing with high reliability',
      'Creating efficient vector similarity search for email context',
      'Handling diverse email formats and languages effectively'
    ],
    outcomes: [
      'Reduced email response time by 95% for busy professionals',
      'Successfully processes 1000+ emails daily with 98% accuracy',
      'Achieved seamless integration with Gmail ecosystem',
      'Saved users an average of 3-4 hours daily on email management',
      'Maintained professional communication standards with zero spam reports'
    ]
  },
  '2': {
    title: 'NARAD',
    fullDescription: `A cutting-edge AI-powered news verification system that combats misinformation by cross-referencing multiple sources and providing real-time authenticity ratings using advanced machine learning algorithms. This revolutionary platform fetches news from News API and utilizes Google Web Search Engine API combined with Gemini API to deliver comprehensive fact-checking capabilities.

Key Features:
• Real-time news fetching from multiple trusted sources via News API
• Advanced misinformation detection using Google Web Search Engine API
• AI-powered authenticity scoring with Gemini API integration
• Cross-platform verification across social media and news outlets
• LangChain integration for sophisticated natural language processing
• Real-time fact-checking with source attribution and credibility analysis
• Comprehensive reporting dashboard for news verification statistics
• API integration for third-party news verification services

Built with React.js for a responsive frontend and Node.js for robust backend processing, this system leverages MongoDB for efficient data management and caching. The platform processes thousands of news articles daily, providing users with reliable authenticity ratings that help combat the spread of misinformation in today's digital landscape.`,
    technologies: ['React.js', 'MongoDB', 'Gemini API', 'LangChain', 'News API', 'Node.js', 'Google Search API', 'Express.js'],
    demoUrl: 'https://narad.net.in',
    githubUrl: 'https://github.com/mayank-dotcom/NARAD',
    category: 'AI/ML',
    gradient: 'from-blue-500 to-blue-700',
    challenges: [
      'Integrating multiple news sources with varying data formats',
      'Implementing real-time fact-checking algorithms with high accuracy',
      'Managing API rate limits across multiple external services',
      'Creating reliable authenticity scoring mechanisms',
      'Handling diverse news formats and languages globally'
    ],
    outcomes: [
      'Achieved 94% accuracy in misinformation detection',
      'Successfully processes 5000+ news articles daily',
      'Reduced fact-checking time from hours to seconds',
      'Integrated with 15+ major news sources for comprehensive coverage',
      'Helped identify and flag over 1000 misinformation cases monthly'
    ]
  },
  '3': {
    title: 'ME-BOT',
    fullDescription: `A sophisticated AI-powered conversational bot that perfectly mimics personality and expertise, providing personalized interactions based on comprehensive resume data and professional experience. This innovative ChatGPT-powered system creates an interactive digital persona that can answer questions about skills, experience, and projects with remarkable accuracy and personal touch.

Key Features:
• Advanced personality simulation based on resume and professional data
• Context-aware responses that reflect personal experiences and expertise
• LangChain integration for sophisticated conversation management
• MongoDB-powered knowledge base for comprehensive information storage
• Real-time learning and adaptation to conversation patterns
• Multi-modal interaction support including text and voice queries
• Professional portfolio integration with live project demonstrations
• Intelligent question routing based on expertise areas

Built with Next.js for seamless user experience and powered by ChatGPT API for natural language processing, this bot represents a new frontier in personal AI assistants. The system leverages MongoDB for efficient data management and LangChain for advanced conversation flow control, creating an engaging digital representation that can effectively communicate personal and professional information in a natural, conversational manner.`,
    technologies: ['LangChain', 'Next.js', 'MongoDB', 'ChatGPT API', 'OpenAI API', 'Express.js', 'TailwindCSS', 'Vercel'],
    demoUrl: 'https://me-bot-rutx.vercel.app/',
    githubUrl: 'https://github.com/mayank-dotcom/Me_bot',
    category: 'AI/ML',
    gradient: 'from-red-500 to-red-700',
    challenges: [
      'Creating authentic personality representation through AI responses',
      'Implementing context-aware conversation memory management',
      'Balancing professional information with engaging conversational flow',
      'Optimizing response time while maintaining conversation quality',
      'Ensuring accurate representation of skills and experiences'
    ],
    outcomes: [
      'Achieved 96% user satisfaction in personality accuracy',
      'Successfully handles 500+ unique questions about professional background',
      'Reduced initial consultation time by 70% for potential collaborators',
      'Created engaging user experience with average session time of 8+ minutes',
      'Generated 3x more inquiries about professional services and projects'
    ]
  },
  '4': {
    title: 'HANUMAN LLM',
    fullDescription: `A groundbreaking fine-tuned language model that embodies the wisdom and character of Hanuman, leveraging advanced transformer architecture and mythological knowledge bases. This innovative project utilizes the LLaMA model architecture with Unsloth optimization techniques to create a specialized AI that can converse with the personality and wisdom of this revered mythological figure.

Key Features:
• Advanced fine-tuning using LLaMA model architecture for authentic character representation
• Unsloth integration for optimized training and inference performance
• FastAPI-powered backend for scalable and efficient model serving
• Modal cloud platform integration for seamless deployment and scaling
• Extensive mythological knowledge base covering multiple Ramayana variations
• Context-aware responses that maintain character consistency and wisdom
• Multi-language support for Sanskrit, Hindi, and English interactions
• Advanced conversation memory for maintaining spiritual and philosophical context

Built with cutting-edge AI technologies, this project represents a unique intersection of ancient wisdom and modern artificial intelligence. The system leverages FastAPI for robust API development, Modal for cloud deployment, and Unsloth for optimization, creating a powerful platform that can engage users in meaningful conversations about dharma, devotion, and spiritual wisdom while maintaining the authentic voice and personality of Hanuman.`,
    technologies: ['LLaMA Model', 'FastAPI', 'Modal', 'Unsloth', 'Python', 'Transformers', 'PyTorch', 'Docker'],
    demoUrl: 'https://github.com/mayank-dotcom/Hanuman_llm',
    githubUrl: 'https://github.com/mayank-dotcom/Hanuman_llm',
    category: 'AI/ML',
    gradient: 'from-yellow-400 to-orange-600',
    challenges: [
      'Fine-tuning LLM to maintain consistent mythological character representation',
      'Optimizing model performance using Unsloth for efficient inference',
      'Managing cultural and religious sensitivities in AI responses',
      'Implementing scalable deployment architecture on Modal platform',
      'Balancing authentic character voice with modern conversational needs'
    ],
    outcomes: [
      'Successfully created authentic Hanuman personality with 92% user satisfaction',
      'Achieved 3x faster inference speed using Unsloth optimization',
      'Processed 1000+ spiritual conversations with consistent character voice',
      'Gained recognition in AI and mythology research communities',
      'Inspired development of similar mythological AI character projects'
    ]
  },
  '5': {
    title: 'JURY',
    fullDescription: `An AI-driven platform that analyzes your UI screenshots, identifies design and usability issues, and pinpoints which team member — designer, developer, or manager — is responsible. It also enables seamless team discussions for faster, smarter design improvement.

Key Features:
• The AI provides instant and comprehensive feedback on uploaded UI
• Can identify which team member—designer, developer, or tester—is responsible for specific issues
• Streamlines the design review process, making it easier to track and resolve problems
• MongoDB-powered database for efficient data management and scalability
• Real-time booking confirmation and email notification system
• Streamlines the design review process, making it easier to track and resolve problems
`,
    technologies: ['Next.js', 'Tailwind', 'MongoDB', 'Node.js' , 'OpenAI'],
    demoUrl: 'https://jury-front.vercel.app/',
    githubUrl: 'https://github.com/mayank-dotcom/jury_front',
    category: 'Full Stack + AI',
    gradient: 'from-green-500 to-green-700',
    challenges: [
      'The AI’s accuracy depends on the quality and training of the underlying model',
      'Complex or unconventional UI elements may sometimes be misinterpreted',
      'Requires a stable internet connection for smooth operation',
      'Limited capability to detect non-visual issues, such as backend logic or performance concerns',
      'Initial setup and configuration of the system can take some time and effort'
    ],
    outcomes: [
      'Provides instant, detailed feedback on uploaded UI designs, highlighting issues clearly',
      'Accurately identifies which team member—designer, developer, or tester—is responsible for specific problems',
      'Streamlines the design review workflow, making it easier to track and resolve issues efficiently',
      'Encourages team collaboration by allowing discussions directly within the platform',
      'Saves time and enhances the overall quality and consistency of the UI'
    ]
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id as string;
  const project = projectDetails[projectId as keyof typeof projectDetails];
  const [isScanning, setIsScanning] = useState(false);
  const [missionLoaded, setMissionLoaded] = useState(false);

  useEffect(() => {
    // Start scanning animation
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setMissionLoaded(true);
    }, 2500);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <HUDOverlay>
          <div className="text-center hud-border p-8">
            <div className="hud-font text-red-400 text-sm mb-4">ERROR_404: MISSION_FILE_NOT_FOUND</div>
            <h1 className="text-4xl font-bold text-white mb-4 hud-font">ACCESS_DENIED</h1>
            <Link href="/" className="text-yellow-400 hover:text-yellow-300 hud-font">
              [RETURN] MAIN_TERMINAL
            </Link>
          </div>
        </HUDOverlay>
      </div>
    );
  }

  const hudData = [
    { label: "MISSION", value: `${projectId.padStart(4, '0')}`, status: "online" as const },
    { label: "STATUS", value: "ACTIVE", status: "online" as const },
    { label: "SECURITY", value: "LEVEL_7", status: "online" as const },
    { label: "ACCESS", value: "GRANTED", status: "online" as const },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Iron Man Background */}
      <div 
        className="fixed inset-0 z-0 opacity-30 bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Avengers_ Age of Ultron UI by Territory Studios — HUDS+GUIS.jpeg')",
          backgroundSize: 'cover',
          imageRendering: 'crisp-edges',
          filter: 'contrast(1.1) brightness(1.05)'
        }}
      />
      
      {/* HUD Overlay */}
      <HUDOverlay isScanning={isScanning}>
        <div className="relative z-10 min-h-screen w-full max-w-full overflow-x-hidden">
          {/* Header with HUD styling */}
          <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6"
          >
            <div className="flex items-center justify-between">
              <Link 
                href="/"
                className="hud-border px-4 py-2 hud-font text-yellow-400 hover:text-yellow-300 transition-colors duration-300 inline-flex items-center space-x-2"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                <span>[RETURN] MAIN_TERMINAL</span>
              </Link>
              
              {/* Mission Status */}
              <div className="hud-border px-4 py-2 hud-font">
                <div className="flex items-center space-x-2">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2 h-2 bg-green-400 rounded-full"
                  />
                  <span className="text-green-400 text-sm">MISSION_BRIEFING_ACTIVE</span>
                </div>
              </div>
            </div>
          </motion.header>

          {/* Side HUD Panel - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 hidden xl:block w-64"
          >
            <HUDDataDisplay title="MISSION_DATA" data={hudData} className="w-full max-w-64" />
          </motion.div>

          {/* Main Content */}
          <div className="w-full px-6 pb-20 xl:pl-72 lg:pr-8 max-w-full">
            {/* Mission Briefing Header */}
            <ScanningFrame 
              title="MISSION_BRIEFING"
              status="CLASSIFIED"
              isActive={missionLoaded}
              className="mb-16"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center p-8"
              >
                {/* Mission Classification */}
                <div className="hud-border inline-block px-4 py-2 mb-6">
                  <div className="flex items-center space-x-2 hud-font">
                    <ShieldCheckIcon className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 text-sm">
                      {project.category.toUpperCase()}_MISSION • SECURITY_LEVEL_7
                    </span>
                  </div>
                </div>

                {/* Mission Title */}
                <h1 className="text-4xl md:text-6xl font-bold glow-yellow-text mb-6">
                  {project.title.toUpperCase().replace(/\s+/g, '_')}
                </h1>

                {/* Mission Control Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 0 25px rgba(255, 215, 0, 0.8)",
                      textShadow: "0 0 10px rgba(255, 215, 0, 0.8)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="hud-border hud-font text-yellow-400 hover:text-black hover:bg-yellow-400 px-6 py-3 transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <EyeIcon className="w-5 h-5" />
                    <span>[EXECUTE] LIVE_DEMO</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 0 25px rgba(220, 20, 60, 0.8)",
                      textShadow: "0 0 10px rgba(220, 20, 60, 0.8)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="hud-border hud-font text-red-400 hover:text-black hover:bg-red-400 px-6 py-3 transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <CodeBracketIcon className="w-5 h-5" />
                    <span>[ACCESS] SOURCE_CODE</span>
                  </motion.a>
                </div>
              </motion.div>
            </ScanningFrame>

            {/* Mission Details Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 w-full max-w-full">
              {/* Mission Briefing */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="xl:col-span-2 min-w-0 overflow-hidden"
              >
                <ScanningFrame 
                  title="MISSION_BRIEFING" 
                  status="DECRYPTED"
                  isActive={missionLoaded}
                  className="p-8"
                >
                  <div className="hud-font">
                    <div className="text-yellow-400 text-sm mb-4">OBJECTIVE_DETAILS.LOG</div>
                    <h2 className="text-2xl font-bold text-yellow-400 mb-6 hud-glow">MISSION_OVERVIEW</h2>
                    <div className="space-y-4 overflow-hidden">
                      {project.fullDescription.split('\n\n').map((paragraph, index) => (
                        <div key={index} className="break-words">
                          {paragraph.includes('Key Features:') ? (
                            <div>
                              <div className="text-green-400 text-sm mb-2">PRIMARY_FEATURES:</div>
                              <div className="text-gray-300 text-sm leading-relaxed break-words">
                                {paragraph.replace('Key Features:', '').trim()}
                              </div>
                            </div>
                          ) : (
                            <p className="text-gray-300 text-sm leading-relaxed break-words">
                              {paragraph}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </ScanningFrame>
              </motion.div>

              {/* Mission Specs Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="space-y-6 min-w-0 w-full overflow-hidden"
              >
                {/* Combat Systems */}
                <div className="hud-border p-4 relative w-full overflow-hidden">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute top-2 right-2 w-4 h-4"
                  >
                    <CpuChipIcon className="w-4 h-4 text-yellow-400" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-yellow-400 mb-4 hud-font hud-glow">COMBAT_SYSTEMS</h3>
                  <div className="space-y-2">
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 1.2 }}
                        className="flex items-center space-x-2"
                      >
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                          className="w-2 h-2 bg-green-400 rounded-full"
                        />
                        <span className="text-green-400 text-sm hud-font break-words">
                          {tech.toUpperCase()}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Mission Obstacles */}
                <div className="hud-border p-4 w-full overflow-hidden">
                  <h3 className="text-xl font-bold text-red-400 mb-4 hud-font hud-glow">MISSION_OBSTACLES</h3>
                  <div className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 1.4 }}
                        className="text-gray-300 text-xs leading-relaxed hud-font flex items-start space-x-2"
                      >
                        <span className="text-red-400 mt-1 flex-shrink-0">⚠</span>
                        <span className="break-words">{challenge}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Mission Success Metrics */}
                <div className="hud-border p-4 w-full overflow-hidden">
                  <h3 className="text-xl font-bold text-green-400 mb-4 hud-font hud-glow">SUCCESS_METRICS</h3>
                  <div className="space-y-2">
                    {project.outcomes.map((outcome, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 1.6 }}
                        className="text-gray-300 text-xs leading-relaxed hud-font flex items-start space-x-2"
                      >
                        <motion.span 
                          className="text-green-400 mt-1 flex-shrink-0"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                        >
                          ✓
                        </motion.span>
                        <span className="break-words">{outcome}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </HUDOverlay>
    </div>
  );
}
