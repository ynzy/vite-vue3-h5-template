/// <reference types="vite/client" />
interface ImportMetaEnv {
	/**
	 * 环境
	 */
	readonly VITE_ENV: string
	/**
	 * 打包目录
	 */
	readonly VITE_OUTPUT_DIR: string
	/**
	 * 公共路径
	 */
	readonly VITE_PUBLIC_PATH: string
}
interface ImportMeta {
	readonly env: ImportMetaEnv
}
