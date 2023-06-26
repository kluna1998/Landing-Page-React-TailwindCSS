/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        jade: {
          DEFAULT: "#00AE7F",
          50: "#F0FFFB",
          100: "#CDFFF1",
          200: "#85FFDE",
          300: "#3EFFCB",
          400: "#00F5B3",
          500: "#00AE7F",
          600: "#008A65",
          700: "#00674B",
          800: "#004331",
          900: "#001F17",
          950: "#000D0A",
        },
      },
    },
    plugins: [],
  },
};
