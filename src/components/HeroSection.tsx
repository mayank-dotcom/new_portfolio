'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownIcon, CpuChipIcon, UserIcon, CommandLineIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import HUDOverlay from './HUDOverlay';
import ScanningFrame from './ScanningFrame';
import HUDDataDisplay from './HUDDataDisplay';

export default function HeroSection() {
  const [isScanning, setIsScanning] = useState(false);
  const [identificationComplete, setIdentificationComplete] = useState(false);

  useEffect(() => {
    // Start scanning animation after component mount
    setTimeout(() => setIsScanning(true), 500);
    setTimeout(() => {
      setIsScanning(false);
      setIdentificationComplete(true);
    }, 3000);
  }, []);

  const hudData = [
    { label: "STATUS", value: "ONLINE", status: "online" as const },
    { label: "POWER", value: "100%", status: "online" as const },
    { label: "NEURAL", value: "ACTIVE", status: "online" as const },
    { label: "SCAN", value: "COMPLETE", status: "online" as const },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* HUD Overlay */}
      <HUDOverlay isScanning={isScanning}>
        <div className="absolute inset-0">
          {/* Scanning Lines */}
          <motion.div
            animate={{
              x: ['-100vw', '100vw']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: 0.5
            }}
            className="absolute top-1/3 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent"
          />
          
          <motion.div
            animate={{
              y: ['-100vh', '100vh']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 1
            }}
            className="absolute left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400/60 to-transparent"
          />
        </div>

        {/* Main Content */}
        <div className="text-center z-10 relative">
          {/* Identity Recognition Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="hud-border hud-font inline-block px-6 py-2 mb-4">
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <CpuChipIcon className="w-5 h-5 text-yellow-400" />
                </motion.div>
                <span className="text-yellow-400 text-sm">
                  {isScanning ? 'SCANNING...' : 'IDENTITY_CONFIRMED'}
                </span>
                {identificationComplete && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-400 text-sm"
                  >
                    [DEVELOPER_RECOGNIZED]
                  </motion.span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Main Title with Target Frame */}
          <ScanningFrame 
            title="PRIMARY_TARGET" 
            status="LOCKED"
            isActive={identificationComplete}
            className="mb-8 p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold glow-white-text mb-4">
                SOFTWARE
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold glow-yellow-text">
                DEVELOPER
              </h1>
            </motion.div>
          </ScanningFrame>
          
          {/* Analysis Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mb-12"
          >
            <div className="hud-border inline-block p-4 hud-font">
              <div className="text-gray-300 mb-2">ANALYSIS_RESULTS:</div>
              <div className="text-yellow-400 hud-glow">
                CRAFTING_DIGITAL_EXPERIENCES.EXE
              </div>
              <div className="text-blue-400 text-sm mt-2">
                 FULL_STACK.dll • AI_SYSTEMS.py • ML_ALGORITHMS.js
              </div>
            </div>
          </motion.div>

          {/* Action Buttons with HUD styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-8 translate-y-16 sm:translate-y-0"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 25px rgba(255, 215, 0, 0.8)",
                textShadow: "0 0 10px rgba(255, 215, 0, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 hud-border hud-font text-yellow-400 hover:text-black hover:bg-yellow-400 transition-all duration-300 relative overflow-hidden group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
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
              <span className="relative z-10">[EXECUTE] VIEW_PROJECTS</span>
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 25px rgba(220, 20, 60, 0.8)",
                textShadow: "0 0 10px rgba(220, 20, 60, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 hud-border hud-font text-red-400 hover:text-black hover:bg-red-400 transition-all duration-300 relative overflow-hidden group"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Software_Developer_Resume.pdf';
                link.click();
              }}
            >
              <motion.div
                className="absolute inset-0 bg-red-400 opacity-0 group-hover:opacity-20"
                whileHover={{ 
                  background: [
                    "linear-gradient(45deg, rgba(220,20,60,0.1), rgba(220,20,60,0.3))",
                    "linear-gradient(45deg, rgba(220,20,60,0.3), rgba(220,20,60,0.1))"
                  ]
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
              <span className="relative z-10">[DOWNLOAD] RESUME.PDF</span>
            </motion.button>
          </motion.div>

          {/* Navigation Arrow with HUD styling */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer target-lock"
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="relative">
                <ArrowDownIcon className="w-8 h-8 text-yellow-400 hud-glow" />
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 border border-yellow-400 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </HUDOverlay>

      {/* Side HUD Panels */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20"
      >
        <HUDDataDisplay title="SYS_STATUS" data={hudData} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 hud-border p-4 hud-font text-sm"
      >
        <div className="text-yellow-400 mb-2">COORDINATES:</div>
        <div className="text-green-400 text-xs space-y-1">
          <div>LAT: 40.7128°N</div>
          <div>LON: 74.0060°W</div>
          <div>ALT: 10M</div>
        </div>
        
        <div className="text-yellow-400 mt-4 mb-2">MISSION:</div>
        <div className="text-blue-400 text-xs">
          PORTFOLIO_DEMO<br/>
          STATUS: ACTIVE
        </div>
      </motion.div>
    </section>
  );
}
