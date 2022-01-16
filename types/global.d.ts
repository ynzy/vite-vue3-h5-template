/// <reference types="vite/client" />

import type { VNodeChild, PropType as VuePropType } from 'vue'

declare global {
	const __APP_INFO__: {
		pkg: {
			name: string
			version: string
			dependencies: Recordable<string>
			devDependencies: Recordable<string>
		}
		lastBuildTime: string
	}

	declare interface Window {
		entryUrl: any
		vm: any
	}

	// vue
	declare type PropType<T> = VuePropType<T>

	declare type Recordable<T = any> = Record<string, T>
	declare type ReadonlyRecordable<T = any> = {
		readonly [key: string]: T
	}

	interface ImportMetaEnv extends ViteEnv {
		__: unknown
	}

	declare interface ViteEnv {
		VITE_ENV: string
		VITE_OUTPUT_DIR: string
		VITE_PUBLIC_PATH: string
		VITE_USE_MOCK: boolean
		VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
		VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
	}
}

declare module '*.vue' {
	import { DefineComponent } from 'vue'
	// eslint-disable-next-line
	const component: DefineComponent<{}, {}, any>
	export default component
}
