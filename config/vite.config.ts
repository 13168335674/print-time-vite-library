import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  server: {
    open: true,
    port: 8080,
  },
  build: {
    emptyOutDir: true,
    lib: {
      formats: ["es", "umd", "iife"],
      entry: resolve(__dirname, "../src/main.ts"),
      name: "PrintTime",
    },
  },
});
