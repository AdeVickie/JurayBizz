/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F8D57E",
        ButtonGreen: "#009379",
        lightGreen: "#F8F9FF",
        white: "#FFFFFF",
        textGreen: "#009379",
      },
      fontFamily: {
        customFont: ['"Custom Font"', "Poppins"],
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1280px",
        xl: "1280px",
        xxl: "1536px",
      },
    },
  },
  plugins: [],
};
