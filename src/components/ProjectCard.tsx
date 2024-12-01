import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

export default function ProjectCard({ title, description, image, tags, githubUrl, liveUrl, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="terminal-card overflow-hidden"
    >
      <motion.div 
        className="relative h-48 overflow-hidden border-b border-terminal-green"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-terminal-black to-transparent" />
      </motion.div>

      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold text-terminal-green mb-2"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-terminal-gray">$ ./</span>{title}
        </motion.h3>

        <p className="text-terminal-gray font-mono mb-4">
          <span className="text-terminal-green">&gt; </span>
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 border border-terminal-green text-terminal-green rounded-none text-sm font-mono"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-4">
          {githubUrl && (
            <motion.a
              whileHover={{ scale: 1.1, color: '#ffff66' }}
              href={githubUrl}
              className="flex items-center gap-2 text-terminal-green hover:text-terminal-yellow transition-colors font-mono"
            >
              <Github size={20} />
              <span>source</span>
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              whileHover={{ scale: 1.1, color: '#ffff66' }}
              href={liveUrl}
              className="flex items-center gap-2 text-terminal-green hover:text-terminal-yellow transition-colors font-mono"
            >
              <ExternalLink size={20} />
              <span>demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}