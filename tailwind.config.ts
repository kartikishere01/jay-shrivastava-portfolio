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
          bg: '#252422',
          card: '#312f2b',
          border: '#4a453d',
          text: '#ede8df',
          muted: '#b0a89b',
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