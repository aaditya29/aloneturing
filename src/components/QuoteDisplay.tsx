import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Quote {
  text: string;
  author: string;
  type: 'literary' | 'tech';
}

interface QuoteDisplayProps {
  quote: Quote;
}

export default function QuoteDisplay({ quote }: QuoteDisplayProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.blockquote
        key={quote.text}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-mono text-center italic border border-terminal-green p-8 bg-terminal-black/50"
      >
        <span className="text-terminal-green">$ echo "</span>
        {quote.text}
        <span className="text-terminal-green">"</span>
        <footer className="mt-4 text-terminal-gray">
          <span className="text-terminal-green">{'>'}</span> {quote.author}
        </footer>
      </motion.blockquote>
    </AnimatePresence>
  );
}