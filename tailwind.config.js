/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#060911',
          900: '#090d16',
          850: '#0b101c',
          800: '#0f172a',
          750: '#131e36',
          700: '#1e293b',
          600: '#334155',
        },
        cyan: {
          400: '#38bdf8',
          500: '#0ea5e9',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        ice: {
          100: '#f0f9ff',
          200: '#e0f2fe',
          300: '#bae6fd',
          400: '#7dd3fc',
          500: '#38bdf8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
