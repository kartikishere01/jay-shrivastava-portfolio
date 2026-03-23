import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0a',
          card: '#1a1a1a',
          border: '#2a2a2a',
          text: '#f5f5f5',
          muted: '#808080',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      animation: {
        scroll: 'scroll 3s infinite',
      },
      keyframes: {
        scroll: {
          '0%, 100%': { opacity: '1', transform: 'translateY(0)' },
          '50%': { opacity: '0.5', transform: 'translateY(10px)' },
        }
      }
    },
  },
  plugins: [],
}
export default config