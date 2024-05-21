/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["winter"],
          primary: "#C80582",
          secondary: "#353368",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["night"],
          primary: "#C80582",
          secondary: "#353368",
        },
      },
    ],
  },
};
