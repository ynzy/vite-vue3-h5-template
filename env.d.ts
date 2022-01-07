/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_ENV: string // 环境
  readonly VITE_OUTPUT_DIR: string // 打包目录
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
