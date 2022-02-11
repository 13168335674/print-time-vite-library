## Vite library


adi print time vite library. [DEMO](https://13168335674.github.io/print-time-vite-library/)

## Features

💻 Vite 基于 原生 ES 模块 提供了 丰富的内建功能，开箱即用。同时，插件足够简单，它不需要任何运行时依赖，只需要安装 vite （用于开发与构建）和 sass （用于开发环境编译 .scss 文件）。

```
npm i -D vite scss
```

## Configuration

config/vite.config.ts 插件配置文件
```
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  server: {
    open: true,
    port: 8080,
  },
  build: {
    emptyOutDir: true, // 清除上次构建生成的目录
    lib: {
      formats: ["es", "umd", "iife"],
      entry: resolve(__dirname, "../src/main.ts"),
      name: "PrintTime",
    },
  },
});

```

config/vite.config.ex.ts Github Pages 预览配置文件

```
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
      emptyOutDir: true, // 清除上次构建生成的目录
    },
  });
};

```

<!-- - 📦 brotli: 0.7kb
- 🙅‍ No Emoji is integrated
- ⚙️ Add your own custom emojis, native, image or any text
- 🎨 Use CSS variables to define any style
- 🧩 Extend functionality with plugins -->