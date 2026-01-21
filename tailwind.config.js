/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#135bec",     // Blue
        secondary: "#10b981",   // Green (Lab)
        tertiary: "#f59e0b",    // Orange (Taller/Tutorial)
        "lab-purple": "#8b5cf6", // Purple for LS11 Labs
        "background-light": "#f6f6f8",
        "background-dark": "#101622",
        "glass-surface": "rgba(30, 41, 59, 0.7)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        display: ["Lexend", "sans-serif"],
        body: ["Noto Sans", "sans-serif"],
        sans: ["Noto Sans", "sans-serif"], // Default sans to Body font
      },
      backgroundImage: {
        'campus': "url('https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop')",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
