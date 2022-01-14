import { fileURLToPath } from 'url'

import { defineConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv) => {
	const isBuild = command === 'build'
	return {
		base: '/',
		plugins: [
			vue(),
			vueJsx({
				// include: /\.(jsx|tsx)/
			}),
			styleImport({
				resolves: [VantResolve()]
			}),
			Components({
				// 指定组件位置，默认是src/components
				dirs: ['src/components'],
				// ui库解析器
				// resolvers: [ElementPlusResolver()],
				extensions: ['vue', 'tsx'],
				// 配置文件生成位置
				dts: 'src/components.d.ts',
				// 搜索子目录
				deep: true,
				// 允许子目录作为组件的命名空间前缀。
				directoryAsNamespace: false
				// include:[]
			}),
			AutoImport({
				include: [
					/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
					/\.vue$/,
					/\.vue\?vue/, // .vue
					/\.md$/ // .md
				],
				imports: ['vue', 'vue-router', '@vueuse/core'],
				// 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
				dts: 'src/auto-import.d.ts',
				// eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
				// 生成全局声明文件，给eslint用
				eslintrc: {
					enabled: true, // Default `false`
					filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
					globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
				}
			}),
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
					charset: false, // 避免出现: build时的 @charset 必须在第一行的警告
					additionalData: `
          @import "@/styles/mixin.scss";
          @import "@/styles/variables.scss";
          `
				}
			}
		},
		server: {
			host: true,
			proxy: {
				// 字符串简写写法
				'/foo': 'http://localhost:4567',
				// 选项写法
				'/api': {
					target: 'http://127.0.0.1:3000',
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
