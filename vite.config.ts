import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react"
import { githubPagesSpa } from '@sctg/vite-plugin-github-pages-spa'
// import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react(),
    githubPagesSpa(),
    // tailwindcss(),
  ],
  base: '/my-portfolio/',
  build: {
    chunkSizeWarningLimit: 600,
  },
})