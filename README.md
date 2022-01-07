# 项目介绍

🎉 基于 vite2 + Vue3.2 + TypeScript + pinia + mock + sass + vantUI + rem 适配 + axios 封装 的基础模版

[查看 demo](https://vite-vue3-h5-template.vercel.app/) 建议手机端查看

## Node 版本要求

Vue CLI 需要 Node.js 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 nvm 或 nvm-windows 在同一台电脑中管理多个 Node 版本。

本示例 Node.js v14.17.0

## 项目安装/启动

- 本项目采用 pnpm 包管理器,如果没有请先安装 pnpm
- 使用其他包管理器请删除 `pnpm-lock.yaml`

```js
npm i -g pnpm // 全局安装 pnpm
pnpm install // 安装依赖
pnpm dev // 开发
pnpm build // 打包
pnpm preview  // 本地预览打包的项目
```

# <span id="top">目录</span>

- [√ 使用 create-vue 初始化项目](#createVue)
- [√ 配置 ip 访问项目](#ip)
- [√ 配置多环境变量](#env)
- [√ 配置 alias 别名](#alias)
- [√ Sass 全局样式](#sass)
- [√ Vue-router](#router)
- [√ Pinia 状态管理](#pinia)
- [√ Eslint + Prettier 统一开发规范](#prettier)
- [√ husky + lint-staged 提交校验](#husky)
- [√ 使用 Mock 数据](#mock)
- [√ 配置 proxy 跨域](#proxy)
- [√ 静态资源使用](#static)
- [√ Axios 封装及接口管理](#axios)
- [√ VantUI 组件按需加载](#vant)
- [√ viewport 适配方案](#viewport)
- [√ 适配苹果底部安全距离](#phonex)
- [√ 动态设置 title](#dyntitle)
- [√ 配置 Jssdk](#jssdk)

## <span id="createVue">✅ 使用 create-vue 初始化项目 </span>

- 文档：https://github.com/vuejs/create-vue
- 如果想从 0 到 1 手动搭建基于 vite 的基础模版，可查看[vite-vue3-template](https://github.com/ynzy/vite-vue3-template)

```js
npm init vue@3

Vue.js - The Progressive JavaScript Framework

✔ Project name: … vite-vue3-h5-template
✔ Add TypeScript? …  Yes
✔ Add JSX Support? …  Yes
✔ Add Vue Router for Single Page Application development? …  Yes
✔ Add Pinia for state management? …  Yes
✔ Add Cypress for testing? …   No
✔ Add ESLint for code quality? …  Yes
✔ Add Prettier for code formatting? …  Yes
```

- 初始化项目包含

```js
- Vite
- Vue3.2
- Vue-router4
- TypeScript
- Jsx
- Pinia
- Eslint
- Prettier
- @types/node // 识别 nodejs 内置模块
```

## <span id="ip">✅ 配置 ip 访问项目 </span>

- vite 启动后出现 “ Network: use --host to expose ”

```js
vite v2.3.7 dev server running at:

  > Local: http://localhost:3000/
  > Network: use `--host` to expose
```

- 是因为 IP 没有做配置，所以不能从 IP 启动，需要在 vite.config.js 做相应配置：
  在 vite.config.js 中添加 server.host 为 0.0.0.0

```js
export default defineConfig({
  plugins: [vue()],
  // 在文件中添加以下内容
  server: {
    host: '0.0.0.0'
  }
})
```

- 重新启动后显示

```js
vite v2.3.7 dev server running at:

  > Local:    http://localhost:3000/
  > Network:  http://192.168.199.127:3000/
```

## <span id="env">✅ 配置多环境变量 </span>

- 文档：https://cn.vitejs.dev/guide/env-and-mode.html

* 在生产环境，会把 import.meta.env 的值转换成对应真正的值

1. 添加环境变量文件，每个文件写入配置，**定义 env 环境变量前面必须加 VITE\_**

- `.env.development`

```js
# must start with VITE_
VITE_ENV = 'development'
VITE_OUTPUT_DIR = 'dev'
```

- `.env.production`

```js
# must start with VITE_
VITE_ENV = 'production'
VITE_OUTPUT_DIR = 'dist'
```

- `.env.test`

```js
# must start with VITE_
VITE_ENV = 'test'
VITE_OUTPUT_DIR = 'test'
```

2. 修改 scripts 命令

- `--mode` 用来识别我们的环境

```js
"dev": "vite --mode development",
"test": "vite --mode test",
"prod": "vite --mode production",
```

3. 在项目中访问

```js
console.log(import.meta.env)
```

4. typescript 智能提示

- 修改 `src/env.d.ts` 文件，如果没有创建一个

```js
/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_ENV: string; // 环境
  readonly VITE_OUTPUT_DIR: string; // 打包目录
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

## <span id="alias">✅ 配置 alias 别名 </span>

- 项目初始化已经配置好了一个 src 别名

```js
import { fileURLToPath } from 'url'

resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
```

## <span id="sass">✅ Sass 全局样式 </span>

- 文档：https://cn.vitejs.dev/guide/features.html#css-pre-processors

1. 安装依赖
   使用`dart-sass`, 安装速度比较快，大概率不会出现安装不成功

```js
pnpm i -D sass
```

2. 使用
   每个页面自己对应的样式都写在自己的 .vue 文件之中 `scoped` 它顾名思义给 css 加了一个域的概念。

```html
<style lang="scss">
  /* global styles */
</style>

<style lang="scss" scoped>
  /* local styles */
</style>
```

### css modules

- 目前测试只有在 tsx 中可以正常使用，vue-template 中可以导入在 js 中使用，`<template>` 中还不知道怎么使用
- 定义一个 `*.module.scss` 或者 `*.module.css` 文件
- 在 tsx 中使用

```js
import { defineComponent } from 'vue'
import classes from '@/styles/test.module.scss'
export default defineComponent({
  setup() {
    console.log(classes)
    return () => {
      return <div class={`root  ${classes.moduleClass}`}>测试css-modules</div>
    }
  }
})
```

### vite 识别 sass 全局变量

- 文档：https://cn.vitejs.dev/config/#css-preprocessoroptions

* vite.config.js 添加配置

```js
css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/mixin.scss";
          @import "@/styles/variables.scss";
          `,
      },
    },
  },
```

## <span id="router">✅ Vue-router4 </span>

- 文档：https://next.router.vuejs.org/zh/installation.html
- composition-api 使用：https://next.router.vuejs.org/zh/guide/advanced/composition-api.html

* 初始化项目集成了 vue-router，我们这里只做配置

```js
// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './router.config'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
```

```ts
// router/router.config.ts
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layouts/index.vue'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: { title: '首页', keepAlive: false, showTab: true }
      },
      {
        path: '/tsx',
        name: 'Tsx',
        component: () => import('@/test/demo'),
        meta: { title: '测试tsx', keepAlive: false, showTab: true }
      },
      {
        path: '/static',
        name: 'Static',
        component: () => import('@/test/testStatic.vue'),
        meta: { title: '测试静态资源', keepAlive: false, showTab: true }
      },
      {
        path: '/cssModel',
        name: 'CssModel',
        component: () => import('@/test/testCssModel'),
        meta: { title: '测试css-model', keepAlive: false, showTab: true }
      },
      {
        path: '/mockAxios',
        name: 'MockAxios',
        component: () => import('@/test/testMockAxios'),
        meta: { title: '测试mock-axios', keepAlive: false, showTab: true }
      },
      {
        path: '/pinia',
        name: 'Pinia',
        component: () => import('@/test/testPinia.vue'),
        meta: { title: '测试pinia', keepAlive: false, showTab: true }
      }
    ]
  }
]
```

## <span id="pinia">✅ Pinia 状态管理 </span>

- 初始化项目集成了 pinia ,我们这里只做配置

* 文档：https://pinia.vuejs.org/
* 参考资料：https://juejin.cn/post/7049196967770980389
* Pinia 的特点：
  - 完整的 typescript 的支持；
  - 足够轻量，压缩后的体积只有 1.6kb;
  - 去除 mutations，只有 state，getters，actions（这是我最喜欢的一个特点）；
  - actions 支持同步和异步；
  - 没有模块嵌套，只有 store 的概念，store 之间可以自由使用，更好的代码分割；
  - 无需手动添加 store，store 一旦创建便会自动添加；

### 安装依赖

```js
pnpm i pinia
```

### 创建 Store

- 新建 src/store 目录并在其下面创建 index.ts，导出 store

```js
// src/store/index.ts

import { createPinia } from 'pinia'

const store = createPinia()

export default store
```

### 在 main.ts 中引入并使用

```ts
// src/main.ts

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp(App)
app.use(store)
```

### 定义 State

- 在 src/store 下面创建一个 user.ts

```ts
//src/store/user.ts

import { defineStore } from 'pinia'
import { useAppStore } from './app'

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      name: '张三',
      age: 18
    }
  },
  getters: {
    fullName: (state) => {
      return state.name + '丰'
    }
  },
  actions: {
    updateState(data: any) {
      this.$state = data
      this.updateAppConfig()
    },
    updateAppConfig() {
      const appStore = useAppStore()
      appStore.setData('app-update')
    }
  }
})
```

```ts
//src/store/app.ts
import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => {
    return {
      config: 'app'
    }
  },
  actions: {
    setData(data: any) {
      console.log(data)
      this.config = data
    }
  }
})
```

### 获取/更新 State

```vue
<script setup lang="ts">
import { useUserStore } from '@/store/user'
import { useAppStore } from '@/store/app'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
const userStore = useUserStore()
const appStore = useAppStore()
console.log(appStore.config)
console.log(userStore)
console.log(userStore.name)
const name = computed(() => userStore.name)
const { age } = storeToRefs(userStore)

const updateUserState = () => {
  const { name, age } = userStore.$state
  userStore.updateState({
    name: name + 1,
    age: age + 1
  })
}
</script>
<template>
  <div>姓名：{{ name }}</div>
  <div>年龄：{{ age }}</div>
  <div>计算的名字：{{ userStore.fullName }}</div>
  <div>app的config: {{ appStore.config }}</div>
  <button @click="updateUserState">更新数据</button>
</template>

<style lang="scss" scoped></style>
```

### 数据持久化

- 文档：https://github.com/prazdevs/pinia-plugin-persistedstate

* 插件 pinia-plugin-persistedstate 可以辅助实现数据持久化功能。
* 数据默认存在 sessionStorage 里，并且会以 store 的 id 作为 key。

* 安装依赖

```ts
pnpm i pinia-plugin-persistedstate
```

- 引用插件

```ts
// src/store/index.ts

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const store = createPinia()
store.use(piniaPluginPersistedstate)
export default store
```

- 在对应的 store 里开启 persist 即可

```ts
export const useUserStore = defineStore({
  id: 'user',

  state: () => {
    return {
      name: '张三'
    }
  },

  // 开启数据缓存
  persist: {
    key: 'user',
    storage: sessionStorage, // 数据存储位置，默认为 localStorage
    paths: ['name'], // 用于部分持久化状态的点表示法路径数组，表示不会持久化任何状态（默认为并保留整个状态）
    overwrite: true
  }
})
```

## <span id="prettier">✅ Eslint + Prettier 统一开发规范 </span>

- 初始化项目集成了 eslint + prettier，我们这里只做配置
- .eslintrc.js

```js
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  env: {
    'vue/setup-compiler-macros': true
  },
  rules: {
    'prettier/prettier': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
```

- .prettier.js

```js
module.exports = {
  // 定制格式化要求
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json'
      }
    }
  ],
  printWidth: 100, // 一行最多 100 字符
  tabWidth: 2, // 使用 4 个空格缩进
  semi: false, // 行尾需要有分号
  singleQuote: true, // 使用单引号而不是双引号
  useTabs: false, // 用制表符而不是空格缩进行
  quoteProps: 'as-needed', // 仅在需要时在对象属性两边添加引号
  jsxSingleQuote: false, // 在 JSX 中使用单引号而不是双引号
  trailingComma: 'none', // 末尾不需要逗号
  bracketSpacing: true, // 大括号内的首尾需要空格
  bracketSameLine: false, // 将多行 HTML（HTML、JSX、Vue、Angular）元素反尖括号需要换行
  arrowParens: 'always', // 箭头函数，只有一个参数的时候，也需要括号 avoid
  rangeStart: 0, // 每个文件格式化的范围是开头-结束
  rangeEnd: Infinity, // 每个文件格式化的范围是文件的全部内容
  requirePragma: false, // 不需要写文件开头的 @prettier
  insertPragma: false, // 不需要自动在文件开头插入 @prettier
  proseWrap: 'preserve', // 使用默认的折行标准 always
  htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行
  vueIndentScriptAndStyle: false, //（默认值）对于 .vue 文件，不缩进 <script> 和 <style> 里的内容
  endOfLine: 'lf', // 换行符使用 lf 在Linux和macOS以及git存储库内部通用\n
  embeddedLanguageFormatting: 'auto' //（默认值）允许自动格式化内嵌的代码块
}
```

## <span id="husky">✅ husky + lint-staged 提交校验 </span>

## <span id="mock">✅ 使用 Mock 数据 </span>

- 文档：https://github.com/vbenjs/vite-plugin-mock
- mock 数据目前测试，在开发环境 XHR 和 fetch 都生效，生产环境只能使用 XHR 类型请求库调用，fetch 不生效

### 1. 安装依赖

```js
pnpm i -D vite-plugin-mock mockjs @types/mockjs
```

### 2. 生产环境 相关封装

```ts
// mock/_createProductionServer.ts
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

const modules = import.meta.globEager('./**/*.ts')

const mockModules: any[] = []
Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) {
    return
  }
  mockModules.push(...modules[key].default)
})

/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
```

```ts
// mock/_util.ts
// Interface data format used to return a unified format

import { Recordable } from 'vite-plugin-mock'

export function resultSuccess<T = Recordable>(result: T, { message = 'ok' } = {}) {
  return {
    code: 0,
    result,
    message,
    type: 'success'
  }
}

export function resultPageSuccess<T = any>(
  page: number,
  pageSize: number,
  list: T[],
  { message = 'ok' } = {}
) {
  const pageData = pagination(page, pageSize, list)

  return {
    ...resultSuccess({
      items: pageData,
      total: list.length
    }),
    message
  }
}

export function resultError(message = 'Request failed', { code = -1, result = null } = {}) {
  return {
    code,
    result,
    message,
    type: 'error'
  }
}

export function pagination<T = any>(pageNo: number, pageSize: number, array: T[]): T[] {
  const offset = (pageNo - 1) * Number(pageSize)
  const ret =
    offset + Number(pageSize) >= array.length
      ? array.slice(offset, array.length)
      : array.slice(offset, offset + Number(pageSize))
  return ret
}

export interface requestParams {
  method: string
  body: any
  headers?: { authorization?: string }
  query: any
}

/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 *
 */
export function getRequestToken({ headers }: requestParams): string | undefined {
  return headers?.authorization
}
```

```ts
// mock/sys/user
import { MockMethod } from 'vite-plugin-mock'
import { resultError, resultSuccess, getRequestToken, requestParams } from '../_util'

export default [
  {
    url: '/basic-api/getUserInfo',
    method: 'get',
    response: (request: requestParams) => {
      console.log('----请求了getUserInfo---')

      return resultSuccess({
        name: '章三',
        age: 40,
        sex: '男'
      })
    }
  }
] as MockMethod[]
```

### 3. 修改 vite.config.ts 配置

```ts
export default ({ mode, command }: ConfigEnv): UserConfigExport => {
  const isBuild = command === 'build'
  return defineConfig({
    plugins: [
      viteMockServe({
        ignore: /^_/, // 正则匹配忽略的文件
        mockPath: 'mock', // 设置mock.ts 文件的存储文件夹
        localEnabled: true, // 设置是否启用本地 xxx.ts 文件，不要在生产环境中打开它.设置为 false 将禁用 mock 功能
        prodEnabled: true, // 设置生产环境是否启用 mock 功能
        watchFiles: true, // 设置是否监视mockPath对应的文件夹内文件中的更改
        // 代码注入
        injectCode: ` 
          import { setupProdMockServer } from '../mock/_createProductionServer';
          setupProdMockServer();
        `
      })
    ]
  })
}
```

## <span id="proxy">✅ 配置 proxy 跨域 </span>

```js
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
},
```

## <span id="axios">✅ Axios 封装及接口管理 </span>

## <span id="vant">✅ VantUI 组件按需加载 </span>

- 文档：https://vant-contrib.gitee.io/vant/v3/#/zh-CN/quickstart

### 1. 安装依赖

```js
pnpm add vant@3
pnpm add vite-plugin-style-import -D
```

### 2. 按需引入配置

- vite.config.ts

```js
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import'

export default {
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()]
    })
  ]
}
```

- plugins/vant.ts

```ts
import { App as VM } from 'vue'
import { Button, Cell, CellGroup, Icon, Tabbar, TabbarItem, Image as VanImage } from 'vant'

const plugins = [Button, Icon, Cell, CellGroup, Tabbar, TabbarItem, VanImage]

export const vantPlugins = {
  install: function (vm: VM) {
    plugins.forEach((item) => {
      vm.component(item.name, item)
    })
  }
}
```

- main.ts

```ts
// 全局引入按需引入UI库 vant
import { vantPlugins } from './plugins/vant'
app.use(vantPlugins)
```

### 3. 在 <script setup> 中可以直接使用 Vant 组件，不需要进行组件注册。

- 如果使用这种方式，就不需要注册上面的 `plugins/vant.ts` 了

```js
<script setup>
  import { Button } from 'vant';
</script>

<template>
  <Button />
</template>
```

### 4. 在 JSX 和 TSX 中可以直接使用 Vant 组件，不需要进行组件注册。

- 如果使用这种方式，就不需要注册上面的 `plugins/vant.ts` 了

```ts
import { Button } from 'vant'

export default {
  render() {
    return <Button />
  }
}
```

## <span id="viewport">✅ viewport 适配方案 </span>

- 看到 `lib-flexible` 仓库说，由于 viewport 单位得到众多浏览器的兼容，lib-flexible 这个过渡方案已经可以放弃使用，建议大家开始使用 viewport 来替代此方，所以就踩坑用用 viewport
- 参考文档：https://blog.csdn.net/weixin_46429258/article/details/115537383
- vant 官方文档有说怎么配，先按着官方文档配一下
- postcss-px-to-viewport 文档： https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md

### 1. 安装依赖

```js
pnpm i -D postcss-px-to-viewport
```

### 2. 添加 .postcssrc.js

```js
module.exports = {
  plugins: {
    autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
    'postcss-px-to-viewport': {
      unitToConvert: 'px', // 要转化的单位
      viewportWidth: 750, // UI设计稿的宽度
      unitPrecision: 6, // 转换后的精度，即小数点位数
      propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
      selectorBlackList: ['wrap'], // 指定不转换为视窗单位的类名，
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
      exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
      landscape: false // 是否处理横屏情况
    }
  }
}
```

## <span id="phonex">✅ 适配苹果底部安全距离 </span>

## <span id="dyntitle">✅ 动态设置 title </span>

## <span id="jssdk">✅ 配置 Jssdk </span>

## <span id="createVue">✅ xxx </span>
