import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ContentSectionProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  className?: string;
}

export default function ContentSection({ title, description, Icon, className = '' }: ContentSectionProps) {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`space-y-8 ${className}`}
    >
      <h1 className="text-4xl font-mono font-bold text-terminal-green">
        <span className="text-terminal-gray">$</span> {title}
      </h1>
      <p className="text-xl text-terminal-gray font-mono">
        {description}
      </p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center space-x-4"
      >
        <Icon className="w-8 h-8 text-terminal-green" />
        <span className="text-lg font-mono text-terminal-yellow">
          {'>'} {title.toLowerCase().replace(/\s+/g, '-')}.exe
        </span>
      </motion.div>
    </motion.div>
  );
}