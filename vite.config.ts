import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from 'tailwindcss'

export default defineConfig({
  plugins: [react()],
  base: '/impulse-website/',                 // keep your subfolder base
  css: { postcss: { plugins: [tailwind()] } },

  // ✅ Ensure optional chaining & modern syntax are transpiled
  build: {
    target: 'es2018',                    // or 'es2017' for maximum safety
    // chunkSizeWarningLimit: 1600,      // (optional) silence big bundle warning
  }
})
