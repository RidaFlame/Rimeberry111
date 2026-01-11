import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Configured for GitHub Pages deployment with GitHub Actions
// HashRouter uses # for routing (works regardless of base path - no server config needed)
export default defineConfig({
  plugins: [react()],
  base: '/Rimeberry111/', // GitHub Pages base path for repository "Rimeberry111"
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

