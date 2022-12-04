/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto, sans-serif",
      },
      colors: {
        "gh-black": "#24292e",
        "gh-gray": "#2b3137",
        "gh-white": "#fafbfc",
        "gh-green": "#2dba4e",
      },
      screens: {
        xs: "320px",
        sm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        xxl: "2560px",
      },
    },
  },
  plugins: [],
};
