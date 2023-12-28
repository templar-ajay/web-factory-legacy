import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import { Montserrat } from "next/font/google";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-body)"],
        display: ["var(--font-display)"],
        montserrat: ["var(--font-montserrat)"],
      },
      screens: {
        xs: "375px",
        mobile: "450px",
        _992: "992px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
