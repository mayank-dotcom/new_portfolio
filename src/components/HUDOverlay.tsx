'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HUDOverlayProps {
  children: React.ReactNode;
  isScanning?: boolean;
}

export default function HUDOverlay({ children, isScanning = false }: HUDOverlayProps) {
  const [scanLine, setScanLine] = useState(0);
  const [dataPoints, setDataPoints] = useState<Array<{id: string, x: number, y: number, label: string}>>([]);

  useEffect(() => {
    // Generate random data points for HUD overlay
    const points = [
      { id: '1', x: 15, y: 20, label: 'SKILL_DETECTED' },
      { id: '2', x: 85, y: 15, label: 'PROJECT_IDENTIFIED' },
      { id: '3', x: 25, y: 75, label: 'TECH_ANALYZED' },
      { id: '4', x: 75, y: 80, label: 'PERFORMANCE_OK' },
      { id: '5', x: 50, y: 40, label: 'CORE_SYSTEMS' },
    ];
    setDataPoints(points);

    // Scanning animation
    if (isScanning) {
      const interval = setInterval(() => {
        setScanLine(prev => (prev >= 100 ? 0 : prev + 2));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isScanning]);

  return (
    <div className="relative w-full h-full">
      {children}
      
      {/* Corner Brackets */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left */}
        <div className="absolute top-4 left-4">
          <svg width="40" height="40" className="text-yellow-400">
            <path d="M5 15 L5 5 L15 5" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        {/* Top Right */}
        <div className="absolute top-4 right-4">
          <svg width="40" height="40" className="text-yellow-400">
            <path d="M25 5 L35 5 L35 15" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        {/* Bottom Left */}
        <div className="absolute bottom-4 left-4">
          <svg width="40" height="40" className="text-yellow-400">
            <path d="M5 25 L5 35 L15 35" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        {/* Bottom Right */}
        <div className="absolute bottom-4 right-4">
          <svg width="40" height="40" className="text-yellow-400">
            <path d="M35 25 L35 35 L25 35" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Scanning Line */}
      <AnimatePresence>
        {isScanning && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-80"
            style={{ top: `${scanLine}%` }}
          />
        )}
      </AnimatePresence>

      {/* Data Points */}
      {dataPoints.map((point, index) => (
        <motion.div
          key={point.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2 }}
          className="absolute pointer-events-none"
          style={{ left: `${point.x}%`, top: `${point.y}%` }}
        >
          <div className="relative">
            {/* Target Reticle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8"
            >
              <svg viewBox="0 0 32 32" className="text-yellow-400 w-full h-full">
                <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M16 4 L16 8 M16 24 L16 28 M4 16 L8 16 M24 16 L28 16" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </motion.div>
            
            {/* Data Label */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 + 0.5 }}
              className="absolute left-10 top-0 bg-black/80 border border-yellow-400/50 px-2 py-1 text-xs text-yellow-400 font-mono whitespace-nowrap"
            >
              {point.label}
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" className="text-yellow-400">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
}
