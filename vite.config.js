import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Configured for GitHub Pages deployment (root level)
// HashRouter uses # for routing (works regardless of base path - no server config needed)
export default defineConfig({
  plugins: [react()],
  base: '/', // Root path for GitHub Pages (works with localhost and GitHub Pages)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    copyPublicDir: true,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
})

