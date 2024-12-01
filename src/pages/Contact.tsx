import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import TerminalText from '../components/TerminalText';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <PageHeader 
        title="Contact"
        subtitle="ssh user@aloneturing"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="terminal-card p-8"
      >
        <TerminalText
          text="Establishing secure connection..."
          speed={30}
          className="text-terminal-green mb-8"
        />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-mono mb-2 text-terminal-green">
              <span className="text-terminal-gray">$</span> whoami
            </label>
            <input
              type="text"
              id="name"
              value={formState.name}
              onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-2 bg-terminal-black border border-terminal-green text-terminal-gray font-mono focus:border-terminal-yellow focus:outline-none focus:ring-1 focus:ring-terminal-yellow"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-mono mb-2 text-terminal-green">
              <span className="text-terminal-gray">$</span> ping -c 1
            </label>
            <input
              type="email"
              id="email"
              value={formState.email}
              onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-2 bg-terminal-black border border-terminal-green text-terminal-gray font-mono focus:border-terminal-yellow focus:outline-none focus:ring-1 focus:ring-terminal-yellow"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-mono mb-2 text-terminal-green">
              <span className="text-terminal-gray">$</span> echo "message" &gt; /dev/message
            </label>
            <textarea
              id="message"
              rows={6}
              value={formState.message}
              onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
              className="w-full px-4 py-2 bg-terminal-black border border-terminal-green text-terminal-gray font-mono focus:border-terminal-yellow focus:outline-none focus:ring-1 focus:ring-terminal-yellow resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>
          
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-terminal-black border border-terminal-green text-terminal-green font-mono py-3 px-6 hover:bg-terminal-green hover:text-terminal-black transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Send size={20} />
            <span>./send-message.sh</span>
          </motion.button>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          <div className="flex items-center gap-4 text-terminal-gray font-mono">
            <Mail className="w-6 h-6 text-terminal-green" />
            <span>
              <span className="text-terminal-green">$</span> contact@example.com
            </span>
          </div>
          <div className="flex items-center gap-4 text-terminal-gray font-mono">
            <MessageSquare className="w-6 h-6 text-terminal-green" />
            <span>
              <span className="text-terminal-green">$</span> @adityamishra
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <TerminalText
            text="Connection established. Awaiting your message..."
            className="text-terminal-green text-sm"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}