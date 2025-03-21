// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'], // Adjust paths as needed
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
};
