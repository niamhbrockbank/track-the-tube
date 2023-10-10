import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bakerloo: "#894E24",
        central: "#DC241F",
        circle: "#FFCE27",
        district: "#017229",
        dlr: "#00AFAD",
        elizabeth: "#6950A1",
        "hammersmith-city": "#D799AF",
        jubilee: "#697278",
        "london-overground": "#E86A10",
        metropolitan: "#751156",
        northern: "#000000",
        piccadilly: "#0C19A8",
        victoria: "#00A0E2",
        "waterloo-city": "#76D0BD",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(bakerloo|central|circle|district|dlr|elizabeth|hammersmith-city|jubilee|london-overground|metropolitan|northern|piccadilly|victoria|waterloo-city)/,
    },
  ],
};
export default config;
