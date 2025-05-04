/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        brand: {
          DEFAULT: 'hsl(160, 100%, 39%)',
          light: 'hsl(160, 56%, 74%)',
          dark: 'hsl(160, 100%, 18%)',
        },
        primary: {
          light: '#87c9ea',
        },
        military: {
          light: '#b2e996'
        }
      }
    },
  },
  plugins: [],
}