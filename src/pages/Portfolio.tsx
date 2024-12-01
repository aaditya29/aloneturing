import React from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import TerminalText from '../components/TerminalText';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Emotion AI Poetry Generator",
    description: "An AI system that generates poetry based on emotional context using advanced NLP techniques.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80",
    tags: ["Python", "PyTorch", "NLP", "Poetry"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    title: "Literary Analysis Platform",
    description: "Web platform for computational analysis of poetry and prose, featuring sentiment analysis and style detection.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80",
    tags: ["React", "TypeScript", "ML", "API"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    title: "Multilingual Poetry Database",
    description: "Comprehensive database of poems in Hindi and English with advanced search capabilities.",
    image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?auto=format&fit=crop&q=80",
    tags: ["MongoDB", "Express", "React", "Node"],
    githubUrl: "https://github.com"
  }
];

export default function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <PageHeader 
        title="Portfolio"
        subtitle="ls -la /projects | grep 'featured'"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        <div className="terminal-card p-4">
          <TerminalText
            text="Executing query: SELECT * FROM projects WHERE category = 'featured' ORDER BY date DESC"
            speed={30}
            className="text-terminal-green mb-8"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-8"
        >
          <TerminalText
            text="Type 'help --projects' for more information..."
            className="text-terminal-green text-sm"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}