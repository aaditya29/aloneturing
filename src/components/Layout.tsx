import React from 'react';
import { Terminal, Github, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-terminal-black text-terminal-gray">
      <nav className="fixed w-full backdrop-blur-sm bg-terminal-black/75 border-b border-terminal-green z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="font-mono text-xl text-terminal-green">
              <Terminal className="inline-block mr-2" />
              AM_
            </Link>
            <div className="flex space-x-8">
              {['about', 'blog', 'portfolio', 'contact'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  className="relative group"
                >
                  <Link
                    to={`/${item}`}
                    className="terminal-link uppercase tracking-wider text-sm"
                  >
                    {item}.exe
                  </Link>
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terminal-green group-hover:w-full transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16 relative z-10">
        {children}
      </main>

      <footer className="py-8 mt-16 border-t border-terminal-green relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-sm text-terminal-gray">
              <span className="text-terminal-green">$ </span>
              echo "© {new Date().getFullYear()} Aditya Mishra"
            </div>
            <div className="flex space-x-6">
              {[
                { Icon: Github, url: 'https://github.com/aaditya29' },
                { Icon: Linkedin, url: 'https://linkedin.com' },
                { Icon: Instagram, url: 'https://instagram.com' }
              ].map(({ Icon, url }) => (
                <motion.a
                  key={url}
                  href={url}
                  whileHover={{ scale: 1.2, color: '#ffff66' }}
                  className="text-terminal-green hover:text-terminal-yellow transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}