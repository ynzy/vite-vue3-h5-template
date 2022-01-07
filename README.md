# 项目介绍

🎉基于 vite2 + Vue3.2 + TypeScript + pinia + mock + sass + vantUI + rem适配 + axios封装 的基础模版

[查看 demo](https://vite-vue3-h5-template.vercel.app/) 建议手机端查看

##  Node 版本要求
Vue CLI 需要 Node.js 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 nvm 或 nvm-windows 在同一台电脑中管理多个 Node 版本。

本示例 Node.js v14.17.0

## 项目安装/启动
* 本项目采用 pnpm 包管理器,如果没有请先安装 pnpm
* 使用其他包管理器请删除 `pnpm-lock.yaml`
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
- [√ rem 适配方案](#rem)
- [√ 适配苹果底部安全距离](#phonex)
- [√ 动态设置 title](#dyntitle)
- [√ 配置 Jssdk](#jssdk)

## <span id="createVue">✅ 使用 create-vue 初始化项目 </span>
* 文档：https://github.com/vuejs/create-vue
* 如果想从 0 到 1 手动搭建基于 vite 的基础模版，可查看[vite-vue3-template](https://github.com/ynzy/vite-vue3-template)

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
* 初始化项目包含
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
* 项目初始化已经配置好了一个 src 别名
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

## <span id="prettier">✅ Eslint + Prettier 统一开发规范 </span>
* 初始化项目集成了 eslint + prettier，我们这里只做配置
* .eslintrc.js
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
* .prettier.js
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
};
```
## <span id="husky">✅ husky + lint-staged 提交校验 </span>
## <span id="mock">✅ 使用 Mock 数据 </span>
## <span id="proxy">✅ 配置 proxy 跨域 </span>
## <span id="axios">✅ Axios 封装及接口管理 </span>
## <span id="vant">✅ VantUI 组件按需加载 </span>
## <span id="rem">✅ rem 适配方案 </span>
## <span id="phonex">✅ 适配苹果底部安全距离 </span>
## <span id="dyntitle">✅ 动态设置 title </span>
## <span id="jssdk">✅ 配置 Jssdk </span>
## <span id="createVue">✅ xxx </span>