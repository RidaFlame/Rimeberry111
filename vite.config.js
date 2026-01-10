import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// For GitHub Pages: repository name must match base path
// HashRouter uses # for routing (works regardless of base path)
export default defineConfig(({ command, mode }) => {
  // Use environment variable if set, otherwise default based on mode
  // For GitHub Pages deployment, this should be '/RimeberryFinal/'
  // For local dev, this should be '/'
  const isProd = mode === 'production' || command === 'build';
  const base = isProd ? '/RimeberryFinal/' : '/';
  
  return {
    plugins: [react()],
    base: base,
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      copyPublicDir: true,
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  };
})

