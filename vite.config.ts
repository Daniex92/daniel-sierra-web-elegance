import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // 'base' debe coincidir con el nombre de tu repositorio en GitHub
  base: '/preview/', 

  plugins: [react()],
  
  resolve: {
    alias: {
      // Lovable suele usar el alias "@" para referirse a la carpeta "src"
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // Según tu configuración de GitHub Pages, estás desplegando desde la carpeta "/docs"
    outDir: 'docs',
    // Esto limpia la carpeta antes de generar el nuevo build
    emptyOutDir: true,
    // Asegura que los assets se generen con nombres correctos
    assetsDir: 'assets',
  }
})
