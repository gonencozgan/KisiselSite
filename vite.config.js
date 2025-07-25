// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

const repoName = "KisiselSite";  // Yeni ad

export default defineConfig({
  base:
    process.env.NODE_ENV === "production"
      ? `/${repoName}/`
      : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
