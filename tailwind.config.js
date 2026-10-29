/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0B0D12',
          secondary: '#11151D',
          tertiary: '#151A24',
        },
        card: {
          DEFAULT: '#151A24',
          hover: '#1B2230',
          elevated: '#1E2638',
        },
        primary: {
          DEFAULT: '#F5F7FB',
          muted: '#E2E8F4',
        },
        secondary: {
          DEFAULT: '#A4ACBC',
          dim: '#737C90',
        },
        accent: {
          DEFAULT: '#8B9CFF',
          glow: 'rgba(139, 156, 255, 0.15)',
          muted: '#6C7FD8',
          subtle: 'rgba(139, 156, 255, 0.08)',
        },
        secondaryAccent: {
          DEFAULT: '#70E1C1',
          glow: 'rgba(112, 225, 193, 0.15)',
          subtle: 'rgba(112, 225, 193, 0.08)',
        },
        border: {
          DEFAULT: '#282E3B',
          subtle: '#282E3B',
          hover: 'rgba(139, 156, 255, 0.4)',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Cascadia Code',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        'glow-accent': '0 0 25px -5px rgba(139, 156, 255, 0.25)',
        'glow-teal': '0 0 25px -5px rgba(112, 225, 193, 0.25)',
        'card-subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};
