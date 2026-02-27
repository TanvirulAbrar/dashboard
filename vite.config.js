import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss({
      config: {
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#66FF33",
              "background-light": "#f8f6f6",
              "background-dark": "#121212",
              "donezo-green-dark": "#1a4d2e",
              "donezo-green-light": "#4ade80",
            },
            fontFamily: {
              "display": ["Public Sans", "sans-serif"],
              "inter": ["Inter", "sans-serif"]
            },
            borderRadius: {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
            },
          },
        },
        plugins: [],
      }
    })
  ],
});
