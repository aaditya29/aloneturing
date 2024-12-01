import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="terminal-card p-6"
    >
      <h3 className="text-xl font-bold text-terminal-green mb-4">
        <span className="text-terminal-gray">$</span> {title}
      </h3>
      <p className="text-terminal-gray font-mono">
        {description}
      </p>
      <motion.div
        className="mt-4 h-0.5 bg-terminal-green/20"
        whileHover={{ scaleX: 1.05 }}
      />
    </motion.div>
  );
}