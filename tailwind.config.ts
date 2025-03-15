import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // "auth-bg": "url('../../public/images/update-bg.png')",
        "bgLearn": "url('../../../public/svgs/bg-learn.svg')",
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', "serif"],
        poppins: ['"Poppins"', "sans-serif"],
        Montserrat: ["Montserrat"],
      },
      screens: {
        s1200: "1200px",
        s576: "576px",
      },
    },
  },
  plugins: [],
};
export default config;
