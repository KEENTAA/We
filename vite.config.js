import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'classic' // ← Añade esta línea
  })],
  server: {
    headers: {
      'Content-Type': 'application/javascript' // ← Fuerza el MIME type correcto
    }
  }
})