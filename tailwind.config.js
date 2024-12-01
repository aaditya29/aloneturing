/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        terminal: {
          green: '#00cc00',
          darkGreen: '#004400',
          black: '#0f0f23',
          gray: '#cccccc',
          yellow: '#ffff66',
          gold: '#ffb100'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['JetBrains Mono', 'monospace'],
        sans: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'matrix-rain': 'matrix 20s linear infinite',
        'terminal-blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#cccccc',
            letterSpacing: '-0.3px',
            a: {
              color: '#00cc00',
              textDecoration: 'none',
              textShadow: 'none',
              '&:hover': {
                color: '#ffff66',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
};