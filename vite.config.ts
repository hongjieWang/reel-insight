import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // 后端本地服务地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // 去掉 /api 前缀
      },
    },
  },
});
