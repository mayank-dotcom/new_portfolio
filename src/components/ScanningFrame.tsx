'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ScanningFrameProps {
  children: React.ReactNode;
  title?: string;
  status?: string;
  isActive?: boolean;
  className?: string;
}

export default function ScanningFrame({ 
  children, 
  title, 
  status = "ACTIVE", 
  isActive = true,
  className = "" 
}: ScanningFrameProps) {
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setScanProgress(prev => (prev >= 100 ? 0 : prev + 1));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  return (
    <div className={`relative ${className}`}>
      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Scanning Frame Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner Elements */}
        <div className="absolute top-0 left-0 w-6 h-6">
          <svg viewBox="0 0 24 24" className="text-yellow-400 w-full h-full">
            <path d="M3 3 L3 9 M3 3 L9 3" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        <div className="absolute top-0 right-0 w-6 h-6">
          <svg viewBox="0 0 24 24" className="text-yellow-400 w-full h-full">
            <path d="M21 3 L21 9 M21 3 L15 3" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        <div className="absolute bottom-0 left-0 w-6 h-6">
          <svg viewBox="0 0 24 24" className="text-yellow-400 w-full h-full">
            <path d="M3 21 L3 15 M3 21 L9 21" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        <div className="absolute bottom-0 right-0 w-6 h-6">
          <svg viewBox="0 0 24 24" className="text-yellow-400 w-full h-full">
            <path d="M21 21 L21 15 M21 21 L15 21" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>

        {/* Side Indicators */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2">
          <motion.div
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-8 bg-gradient-to-b from-yellow-400 to-red-500 rounded"
          />
        </div>

        {/* Top Status Bar */}
        {title && (
          <div className="absolute -top-8 left-0 flex items-center space-x-4">
            <div className="bg-black/90 border border-yellow-400/50 px-3 py-1 text-xs font-mono">
              <span className="text-yellow-400">{title}</span>
              <span className="text-green-400 ml-2">[ {status} ]</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-24 h-1 bg-black/50 border border-yellow-400/30 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-400 to-red-500"
                style={{ width: `${scanProgress}%` }}
                animate={{ 
                  boxShadow: [
                    "0 0 5px rgba(255, 215, 0, 0.5)",
                    "0 0 15px rgba(255, 215, 0, 0.8)",
                    "0 0 5px rgba(255, 215, 0, 0.5)"
                  ]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </div>
        )}

        {/* Scanning Lines */}
        {isActive && (
          <>
            <motion.div
              animate={{ 
                x: ['-100%', '100%']
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "linear",
                repeatDelay: 1
              }}
              className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent"
            />
            
            <motion.div
              animate={{ 
                y: ['-100%', '100%']
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "linear",
                repeatDelay: 0.8
              }}
              className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-yellow-400/60 to-transparent"
            />
          </>
        )}
      </div>
    </div>
  );
}
