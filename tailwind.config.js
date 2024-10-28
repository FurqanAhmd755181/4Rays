/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: 'rgba(188, 30, 45, 1)',
        customPeach: 'rgba(255, 231, 214, 1)'
      },
    },
  },
  plugins: [],
}
