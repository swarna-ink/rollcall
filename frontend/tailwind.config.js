/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        },
        gold: {
          400: '#FBBF24',
          500: '#F59E0B',
        }
      }
    },
  },
  plugins: [],
}