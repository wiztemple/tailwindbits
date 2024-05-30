import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#0D75FF',
        primaryZinc: "#F3F6FA",
        main: {
          100: "#162534",
          200: "#2C3E50",
          300: "#3D5063"
        },
        grey: {
          100: "#F8FAFD",
          150: "#F3F6FA",
          200: "#DCE5EC",
          600: "#727993"
        },
        snow: {
          100: "#FCFDFF",
        }
      },
      boxShadow: {
        pageShadow: "0px -2px 8px 1px rgba(0, 0, 0, 0.05)"
      }
    },
  },
  plugins: [],
};
export default config;
