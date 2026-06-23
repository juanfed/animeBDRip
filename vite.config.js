import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// El sitio se despliega en GitHub Pages bajo /animeBDRip/, por eso el base.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/animeBDRip/',
  build: {
    outDir: 'dist',
  },
})
