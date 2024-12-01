import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  side: 'left' | 'right';
  index: number;
}

export default function TimelineEvent({ year, title, description, Icon, side, index }: TimelineEventProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex ${side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 mb-8`}
    >
      <div className="flex-1">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="terminal-card p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Icon className="w-6 h-6 text-terminal-green" />
            <span className="text-terminal-yellow font-mono">{year}</span>
          </div>
          <h3 className="text-xl font-bold text-terminal-green mb-2">
            <span className="text-terminal-gray">$ </span>{title}
          </h3>
          <p className="text-terminal-gray font-mono text-sm">
            <span className="text-terminal-green">&gt; </span>{description}
          </p>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '6rem' }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:block w-px bg-terminal-green/30"
      />
      
      <div className="flex-1" />
    </motion.div>
  );
}