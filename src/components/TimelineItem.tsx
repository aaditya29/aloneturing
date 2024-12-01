import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  side: 'left' | 'right';
}

export default function TimelineItem({ year, title, description, Icon, side }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex ${side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 mb-8`}
    >
      <div className="flex-1 text-center md:text-left">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="inline-block p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
        >
          <Icon className="w-6 h-6" />
        </motion.div>
        <motion.h3
          whileHover={{ x: side === 'left' ? 5 : -5 }}
          className="text-xl font-bold mt-4"
        >
          {title}
        </motion.h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">{year}</span>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '6rem' }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:block w-px bg-gray-200 dark:bg-gray-700"
      ></motion.div>
      <div className="flex-1"></div>
    </motion.div>
  );
}