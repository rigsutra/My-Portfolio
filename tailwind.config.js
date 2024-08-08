module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1a202c",
        secondary: "#edf2f7",
        accent: "#4a5568",
      },
      screens: {
        "lg-900": "900px",
      },
      zIndex: {
        1000: "1000",
      },
      letterSpacing: {
        huge: "1rem",
      },
    },
  },
  plugins: [],
};
