/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gooBlue-900": "#4285F4",
        "gooBlue-800": "#2196F3",
        "gooBlue-700": "#42A5F5",
        "gooBlue-600": "#64B5F6",
        "gooBlue-500": "#90CAF9",
        "gooBlue-400": "#BBDEFB",
        "gooBlue-300": "#E3F2FD",
        "gooRed-900": "#EA4335",
        "gooRed-800": "#F44336",
        "gooRed-700": "#EF5350",
        "gooRed-600": "#E57373",
        "gooRed-500": "#EF9A9A",
        "gooRed-400": "#FFCDD2",
        "gooRed-300": "#FFEBEE",
        "gooYellow-900": "#FBBC04",
        "gooYellow-800": "#FFC107",
        "gooYellow-700": "#FFCA28",
        "gooYellow-600": "#FFD54F",
        "gooYellow-500": "#FFE082",
        "gooYellow-400": "#FFECB3",
        "gooYellow-300": "#FFF8E1",
        "gooGreen-900": "#34A853",
        "gooGreen-800": "#4CAF50",
        "gooGreen-700": "#66BB6A",
        "gooGreen-600": "#81C784",
        "gooGreen-500": "#A5D6A7",
        "gooGreen-400": "#C8E6C9",
        "gooGreen-300": "#E8F5E9",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
        product: "Product Sans, sans-serif",

        // Google Fonts
        gooReg: "gooReg, sans-serif",
        gooMed: "gooMed, sans-serif",
        gooBold: "gooBold, sans-serif",
        // End Google Fonts
      },
      backgroundImage: {
        "hacklogo-lines":
          "url('/libraries/images/svg/background/hackfest-logo-lines.svg')",
        "topWords-lines":
          "url('/libraries/images/svg/background/topWords-lines.svg')",
        "events-lines":  "url('/libraries/images/svg/background/events-lines.svg')"
      },
      animation: {
        colorAni: "colorAni 5s ease infinite",
      },
      keyframes: {
        colorAni: {
          "0%, 100%": {
            "background-size": "150% 150%",
            "background-position": "left right",
          },
          "50%": {
            "background-size": "150% 150%",
            "background-position": "right top",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
