import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/impulse-website/',  // no "./"
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  build: {
    target: 'es2018',                    // or 'es2017' for maximum safety
    // chunkSizeWarningLimit: 1600,      // (optional) silence big bundle warning
  }
});
