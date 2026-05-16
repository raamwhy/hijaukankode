/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.08)",
      },
      colors: {
        earth: {
          50: "#f7fbf7",
          100: "#eaf6ec",
          500: "#2f9e67",
          700: "#1e6d4a",
        },
      },
    },
  },
  plugins: [],
};
