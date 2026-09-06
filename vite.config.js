import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative base so `dist/` works on GitHub Pages subpaths, Netlify, Vercel,
  // or even opened straight from disk (the app uses hash routing).
  base: './',
  plugins: [react(), tailwindcss()],
})
