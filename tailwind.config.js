/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "hero-heading": ["Bebas Neue"],
        "loader-text": ["Fascinate"],
        "subtext-heebo": ["Heebo"],
        "subtext-lora": ['Lora'],
        "heading-playfair": ['Playfair Display'],
        "heading-barlow": ["Barlow Semi Condensed"],
        "subtext-mont": ["Montserrat"],
      },
      colors: {
        bgPeach: "#FAEFDD",
        textBrown: "#292420",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
