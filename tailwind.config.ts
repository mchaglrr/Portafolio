import type { Config } from "tailwindcss";

// Paleta de Adriana: borgoña + rosa empolvado sobre blanco hueso y obsidiana cálida
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        wine: { DEFAULT: "#6E182B", hover: "#8C2138" },
        blush: "#F5E8EB", bone: "#FAFAFA", obsidian: "#141113", coal: "#211B1E",
        ink: "#18181B", mute: "#52525B", line: "#E4E0E1",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
