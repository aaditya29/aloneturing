import React, { useState, useEffect } from 'react';
import { Quote, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import ContentSection from '../components/ContentSection';
import QuoteDisplay from '../components/QuoteDisplay';
import FeatureCard from '../components/FeatureCard';
import TerminalText from '../components/TerminalText';

const quotes = [
  { text: "Find what you love and let it kill you", author: "Charles Bukowski", type: "literary" as const },
  { text: "The universe is under no obligation to make sense to you", author: "Richard Feynman", type: "tech" as const }
];

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(prev => quotes.find(q => q.type !== prev.type) || quotes[0]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ContentSection
            title="Literature"
            description="Exploring different themes of literature."
            Icon={Quote}
          />

          <ContentSection
            title="Technology & Research"
            description="Building and writing about machine learning models, AI, Mathematics and System Programming"
            Icon={Code}
          />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16"
        >
          <QuoteDisplay quote={currentQuote} />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Latest Writing",
              description: "Explore my recent blogs and writing pieces."
            },
            {
              title: "Research",
              description: "Blogs based on my recent studies, learning and research."
            },
            {
              title: "Projects",
              description: "Featured technical projects and experiments."
            }
          ].map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <TerminalText
            text="Welcome to my digital garden. Feel free to explore."
            className="text-terminal-green text-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}