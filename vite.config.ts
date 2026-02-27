import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // En producción usa el nombre de tu repo; en dev usa "/"
  base: mode === "production" ? "/preview/" : "/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "docs",
    emptyOutDir: true,
    assetsDir: "assets",
  },
}));
