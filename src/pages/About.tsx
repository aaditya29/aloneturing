import React from 'react';
import { BookOpen, Code, GraduationCap, Pen } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import TimelineEvent from '../components/TimelineEvent';
import TerminalText from '../components/TerminalText';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '2024',
    title: 'Joined IIT-Palakkad for Masters',
    description: 'Joined IIT-Palakkad after getting 99.4 percentile in GATE for Masters in Computer Science',
    Icon: Code,
  },
  {
    year: '2021-2024',
    title: 'Worked As Freelancer',
    description: 'Worked as Freelancer for Tech and Content with clients around the globe',
    Icon: BookOpen,
  },
  {
    year: '2021',
    title: "Bachelor's in Computer Science",
    description: 'Completed Bachelor in Computer Science with Data Science as Minor',
    Icon: GraduationCap,
  },
  {
    year: '2019',
    title: 'First Publication',
    description: 'Started publishing poetry on internet and got first publication in a book',
    Icon: Pen,
  },
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <PageHeader 
        title="About Me"
        subtitle="A journey through literature and technology"
      />
      
      <div className="space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="terminal-card p-8"
        >
          <TerminalText
            text="I'm Aditya Mishra, a student and writer exploring the intersection of human emotion and machine intelligence. My work spans from being a freelancer to learning and writing about AI systems that push the boundaries of what's possible."
            speed={30}
            className="text-lg leading-relaxed"
          />
        </motion.div>

        <div className="space-y-12">
          <h2 className="terminal-header text-3xl text-center">
            <span className="text-terminal-gray">$ cat </span>
            journey.log
          </h2>
          
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={event.year}
                {...event}
                side={index % 2 === 0 ? 'left' : 'right'}
                index={index}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <TerminalText
            text="Type 'help' for more information or navigate through the sections above..."
            className="text-terminal-green text-sm"
          />
        </motion.div>
      </div>
    </div>
  );
}