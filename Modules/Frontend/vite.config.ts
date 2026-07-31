import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@theme": path.resolve(__dirname, "./src/theme"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@sections": path.resolve(__dirname, "./src/sections"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
    },
  },
});
