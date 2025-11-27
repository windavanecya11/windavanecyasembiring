import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",                 // penting untuk Netlify
  assetsInclude: ['**/*.glb'], // biar .glb ikut build
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});
