/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sprntBg: "#0A0A0C",
        sprntText: "#C6C6C8",
        sprntMuted: "#303032",
        sprntAccent: "#B74735",
        sprntBorder: "#303032",
        siliconOrange: "#C85F40",
        anthracite: "#151515",
      }
    }
  }
};
