import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Clock, Tag } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  index: number;
}

export default function BlogCard({ title, excerpt, date, category, readTime, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ x: 10 }}
      className="border-b border-terminal-green/30 last:border-b-0 py-6 first:pt-0 last:pb-0"
    >
      <div className="flex items-center gap-4 text-sm text-terminal-gray font-mono mb-4">
        <Terminal size={16} className="text-terminal-green" />
        <span>{date}</span>
        <span className="text-terminal-green">|</span>
        <Tag size={16} className="text-terminal-yellow" />
        <span>{category}</span>
        <span className="text-terminal-green">|</span>
        <Clock size={16} className="text-terminal-yellow" />
        <span>{readTime}</span>
      </div>

      <motion.h2 
        className="text-2xl font-mono font-bold mb-4 text-terminal-green"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-terminal-gray">$ cat</span> {title}.md
      </motion.h2>

      <p className="text-terminal-gray font-mono mb-4">
        <span className="text-terminal-green">&gt;</span> {excerpt}
      </p>

      <motion.button
        whileHover={{ x: 10 }}
        transition={{ duration: 0.2 }}
        className="font-mono text-terminal-yellow hover:text-terminal-green transition-colors"
      >
        <span className="text-terminal-gray">$</span> more {title.toLowerCase().replace(/\s+/g, '-')}.md
      </motion.button>
    </motion.article>
  );
}