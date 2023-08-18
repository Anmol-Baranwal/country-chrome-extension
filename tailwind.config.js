/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts,html}"],
  theme: {
    extend: {
      colors: {
        'theme-primary': '#a78bfa',
        'theme-secondary': '#8b5cf6',
        'light-primary': '#f5f3ff',
        dark: '#0f172a',
        'dark-primary': '#101623',
        'gray-text': '#9ca3af',
        'text-primary': '#d1d5db',
        'text-secondary': '#4b5563',
      },
      screens: {
        xs: '200px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        // 2xl: '1536px',
      },
      keyframes: {
        'button-press': {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(0.9)',
          },
        },
        'slide-in': {
          from: {
            opacity: 0,
            transform: 'translateX(-100%)',
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        'slide-out': {
          from: {
            opacity: 1,
            transform: 'translateX(0)',
          },
          to: {
            opacity: 0,
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        'button-press': 'button-press 0.4s ease-in-out',
        'slide-in': 'slide-in 0.3s ease-in forwards',
        'slide-out': 'slide-out 0.3s ease-out forwards',
        'scale-appearance': 'scale-appearance 0.3s ease-in forwards',
        'scale-hide': 'scale-hide 0.3s ease-out forwards',
      },
    },
  },
  // plugins: [],
  darkMode: "media",
  prefix: "plasmo-"
}
