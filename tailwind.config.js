/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        neutralBlack: "#0D0D0D",
        neutralwhite: "#ffffff",
        neutralgray: "#D9D9D9",
        neutralred: "#E53539",
        neutralred_10: "#F3E3E7",
        gray_500: "#262626",
        gray_400: "#666666",
        gray_300: "#A6A6A6",
        gray_200: "#D9D9D9",
        gray_100: "#D9DBE1",
        primary_blue: "#2D65F2",
        secondary_skyblue: "#E4EEFF",
        secondary_bg: "#F4F6FA",
        secondary_red: "#FDEBEC",
        secondary_lightblue: "#5165FF",
        secondary_yellow: "#FFBF00",
        secondary_green: "#00D3AB",
      },
      screens: {
        "2xl": { max: "1280px" },
      },
      boxShadow: {
        custom: "0px 4px 4px 0px rgba(45, 101, 242, 0.20)",
        custom2: "0px 8px 8px 0px rgba(45, 101, 242, 0.40)",
      },
    },
  },
  plugins: [],
};
