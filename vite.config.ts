import { defineConfig } from "vite";
import path, { resolve } from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // 项目启动自动打开浏览器
    port: 8888, // 自定义端口号
    host: "0.0.0.0", // 开启本地ip
    strictPort: true, // 若端口已被占用则会直接退出，而不是尝试下一个可用端口。
    proxy: {
      "/api": {
        target: "http://localhost:8080/", // 需要代理的地址
        changeOrigin: true, // 允许跨域
        rewrite: (path) => path.replace(/^\/api/, ""), // 不可以省略rewrite 重写路径,替换/api
      },
    },
  },

  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve(
            __dirname,
            "src/assets/css/system.less"
          )}";`, // src/assets/css/system.less 是你需要全局变量 （你定义的定义的方法 和 变量等）
        },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), // 路径别名配置
    },
  },
});
