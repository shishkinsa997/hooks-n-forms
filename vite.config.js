import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/hooks-n-forms/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "build",
    emptyOutDir: true,
    sourcemap: true,
    minify: true,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[hash][extname]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "@components": path.resolve("./src/components"),
      "@tasks": path.resolve("./src/tasks"),
      "@ui": path.resolve("./src/ui"),
      "@lib": path.resolve("./src/lib"),
    },
  },
  server: {
    port: 3000,
    open: true,
    strictPort: true,
  },

  preview: {
    port: 8080,
    open: true,
  },
});
