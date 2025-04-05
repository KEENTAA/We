import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/We/', // ⚠️ Case-sensitive (debe coincidir con tu repo)
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});