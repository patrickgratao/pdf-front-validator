/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.tsx",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],

  theme: {
    extend: {
      borderRadius: {
        "0.5xl": "10px",
      },

      fontFamily: {
        default: "'Inter', sans-serif",
      },

      colors: {
        bbGray: {
          100: "#f7f8fa",
          150: "#f4f4f4",
          200: "#E4E5E8",
          300: "#9DA5C1",
          400: "#888C9B",
          500: "#717997",
        },
        bbBlue: {
          200: "#ECF2FF",
          500: "#3B71FD",
          600: "#194E91",
          900: "#111A3B",
        },
        bbGreen: {
          700: "#458841",
        },
        bbPurple: {
          700: "#702E89",
        },
        bbOrange: {
          700: "#FE9C06",
        },
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        light: {
          primary: "#007db9",
          secondary: "#244c5a",
          accent: "#009f4e",
          neutral: "#ECF2FF",
          "base-100": "#fff",
          info: "#E4E5E8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#EE4E61",
          ghost: "#fff",
          "primary-content": "#fff",
          "secondary-content": "#fff",
          "accent-content": "#fff",
          "neutral-content": "#3B71FD",
          "info-content": "#111A3B",
          "error-content": "#fff",
        },
      },
    ],
  },
});
