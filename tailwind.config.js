module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        brand: {
          DEFAULT: "#1f78c1",
          dark: "#14548b",
          light:  "#3ea8ff",
        },
      },
    },
  },
plugins: [
  require("@tailwindcss/typography"),
  require("@tailwindcss/aspect-ratio"),
],
};
