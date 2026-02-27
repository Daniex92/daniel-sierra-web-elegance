import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // Definimos la base con el nombre de tu repositorio para GitHub Pages
  base: "/daniel-sierra-web-elegance/",
  
  plugins: [react()],
  
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    // Cobertura recomendada para un perfil técnico
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
  
  resolve: {
    alias: {
      // Configuramos el alias "@" usando la ruta absoluta del proyecto
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // Configuramos la salida a "docs" para que coincida con tu guía de despliegue
    outDir: 'docs',
    emptyOutDir: true,
  },
});