import { fileURLToPath } from 'url'

import { defineConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build'
  return {
    plugins: [
      vue(),
      vueJsx(),
      viteMockServe({
        ignore: /^_/,
        mockPath: 'mock',
        localEnabled: !isBuild,
        prodEnabled: isBuild,
        injectCode: `
          import { setupProdMockServer } from '../mock/_createProductionServer';
          setupProdMockServer();
        `
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/styles/mixin.scss";
          @import "@/styles/variables.scss";
          `
        }
      }
    },
    server: {
      host: '0.0.0.0',
      proxy: {
        // 字符串简写写法
        '/foo': 'http://localhost:4567',
        // 选项写法
        '/api': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        // 正则表达式写法
        '^/fallback/.*': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/fallback/, '')
        }
        // 使用 proxy 实例
        // "/api": {
        //   target: "http://jsonplaceholder.typicode.com",
        //   changeOrigin: true,
        //   configure: (proxy, options) => {
        //     // proxy 是 'http-proxy' 的实例
        //   },
        // },
      }
    }
  }
})
