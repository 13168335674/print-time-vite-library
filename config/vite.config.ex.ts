import { defineConfig } from "vite";

export default ({ mode }) => {
  const __DEV__ = mode === "development";

  return defineConfig({
    base: __DEV__ ? "/" : "print-time-vite-library",
    root: "example",
    server: {
      open: true,
      port: 8088,
    },
    build: {
      outDir: "../docs",
      assetsDir: "assets",
      emptyOutDir: true,
    },
  });
};
