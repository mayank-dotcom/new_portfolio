'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface DataPoint {
  label: string;
  value: string;
  status: 'online' | 'warning' | 'critical';
}

interface HUDDataDisplayProps {
  title: string;
  data: DataPoint[];
  className?: string;
}

export default function HUDDataDisplay({ title, data, className = "" }: HUDDataDisplayProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`bg-black/80 border border-yellow-400/50 p-4 font-mono text-sm ${className}`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4 border-b border-yellow-400/30 pb-2">
        <div className="flex items-center space-x-2">
          <motion.div
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 bg-green-400 rounded-full"
          />
          <span className="text-yellow-400 font-bold">{title}</span>
        </div>
        <div className="text-green-400 text-xs">
          {currentTime.toLocaleTimeString()}
        </div>
      </div>

      {/* Data Points */}
      <div className="space-y-2">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex justify-between items-center py-1"
          >
            <span className="text-gray-300">{item.label}:</span>
            <div className="flex items-center space-x-2">
              <span className={getStatusColor(item.status)}>{item.value}</span>
              <motion.div
                animate={{ 
                  opacity: item.status === 'online' ? [0.3, 1, 0.3] : 1
                }}
                transition={{ duration: 1, repeat: Infinity }}
                className={`w-1.5 h-1.5 rounded-full ${
                  item.status === 'online' ? 'bg-green-400' :
                  item.status === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
                }`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Bars */}
      <div className="mt-4 space-y-2">
        <div className="text-xs text-gray-400 mb-1">SYSTEM STATUS</div>
        {['CORE', 'NEURAL', 'POWER'].map((system, index) => (
          <div key={system} className="flex items-center space-x-2">
            <span className="text-xs text-gray-400 w-12">{system}</span>
            <div className="flex-1 h-1.5 bg-black/50 border border-yellow-400/30 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${85 + Math.random() * 15}%` }}
                transition={{ delay: index * 0.2, duration: 1 }}
                className="h-full bg-gradient-to-r from-green-400 to-yellow-400"
              />
            </div>
            <span className="text-xs text-green-400">OK</span>
          </div>
        ))}
      </div>

      {/* Social Links Section */}
      <div className="mt-4 pt-4 border-t border-yellow-400/30">
        <div className="text-xs text-gray-400 mb-2">SOCIAL_NETWORKS</div>
        <div className="space-y-2">
          <motion.div
            whileHover={{ scale: 1.05, x: 5 }}
            className="flex items-center space-x-2"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-blue-400 rounded-full"
            />
            <Link 
              href="https://www.linkedin.com/in/mayank-mishra-475570328/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-xs hud-font transition-colors duration-300"
            >
              [LINKEDIN] PROFESSIONAL_NET
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, x: 5 }}
            className="flex items-center space-x-2"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            />
            <Link 
              href="https://github.com/mayank-dotcom" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-xs hud-font transition-colors duration-300"
            >
              [GITHUB] CODE_REPOSITORY
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
