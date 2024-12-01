import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedPageProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
}

const pageVariants = {
  initial: (direction: 'left' | 'right') => ({
    opacity: 0,
    x: direction === 'left' ? -20 : 20
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.1
    }
  },
  exit: (direction: 'left' | 'right') => ({
    opacity: 0,
    x: direction === 'left' ? 20 : -20,
    transition: {
      duration: 0.5
    }
  })
};

export default function AnimatedPage({ children, direction = 'left' }: AnimatedPageProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      custom={direction}
    >
      {children}
    </motion.div>
  );
}