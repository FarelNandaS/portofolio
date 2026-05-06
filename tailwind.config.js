/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darker: "#344E41",
        dark: "#3A5A40",
        primary: "#588157",
        light: "#A3B18A",
        lighter: "#DAD7CD"
      },
      fontFamily: {
        test: ['url("https://fonts.googleapis.com/css2?family=Monomakh&display=swap")'],
      },
    },
  },
  plugins: [],
};
