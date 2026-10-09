/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#080808',
        'secondary-background': '#111111',
        surface: '#121212',
        'surface-elevated': '#181818',
        primary: '#F5F5F5',
        secondary: '#A3A3A3',
        muted: '#737373',
        border: '#222222',
        'border-light': '#333333',
        accent: '#FFFFFF',
        'accent-subtle': '#262626',
        'accent-cyan': '#38BDF8',
      },
      letterSpacing: {
        widest: '0.2em',
        tighter: '-0.04em',
      },
    },
  },
  plugins: [],
}
