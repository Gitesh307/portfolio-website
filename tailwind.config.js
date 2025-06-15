/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Light Mode Colors
        primary: {
          50: '#f0f8ff',
          100: '#e0f1ff',
          200: '#bae3ff',
          300: '#7dd0ff',
          400: '#38bbff',
          500: '#007acc', // Azure Blue
          600: '#005f99', // Link Hover
          700: '#004d7a',
          800: '#003d61',
          900: '#002d47',
        },
        // Dark Mode Colors
        accent: {
          50: '#f0f8ff',
          100: '#e0f1ff',
          200: '#bae3ff',
          300: '#7dd0ff',
          400: '#3399ff', // Link Hover Dark
          500: '#1e90ff', // Dodger Blue
          600: '#64b5f6', // Primary Button Dark
          700: '#42a5f5',
          800: '#2196f3',
          900: '#1976d2',
        },
        // Neutral grays for text and backgrounds
        gray: {
          50: '#f8f9fa',  // Card Background Light
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#555555',  // Secondary Text Light
          700: '#404040',
          800: '#262626',
          900: '#111111',  // Primary Text Light
          950: '#0a0a0a',
        },
        // Dark mode specific colors
        dark: {
          50: '#f0f0f0',   // Primary Text Dark
          100: '#e0e0e0',
          200: '#cccccc',
          300: '#bbbbbb',  // Secondary Text Dark
          400: '#999999',
          500: '#666666',
          600: '#4a4a4a',
          700: '#333333',
          800: '#2a2a2a',  // Card Background Dark
          900: '#1a1a1a',
          950: '#121212',  // Button Text Dark
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 122, 204, 0.3)' },
          '100%': { boxShadow: '0 0 15px rgba(0, 122, 204, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'light': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'dark': '0 1px 3px 0 rgba(255, 255, 255, 0.05), 0 1px 2px 0 rgba(255, 255, 255, 0.05)',
      }
    },
  },
  plugins: [],
}