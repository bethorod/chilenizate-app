import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import netlify from "@netlify/vite-plugin";
import path from "path";
import { sites } from "@openai/sites-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    netlify(),
    sites(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
