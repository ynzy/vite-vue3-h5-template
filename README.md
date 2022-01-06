# vite-vue3-h5-template

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates.

However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can run `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

# 项目介绍

🎉基于 vite2 + Vue3.2 + TypeScript + pinia + mock + sass + vantUI + rem适配 + axios封装 的基础模版

* 如果想从 0 到 1 手动搭建基于 vite 的基础模版，可查看[vite-vue3-template](https://github.com/ynzy/vite-vue3-template)

[查看 demo](https://vite-vue3-h5-template.vercel.app/) 建议手机端查看

##  Node 版本要求
Vue CLI 需要 Node.js 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 nvm 或 nvm-windows 在同一台电脑中管理多个 Node 版本。

本示例 Node.js 12.14.0


# <span id="top">目录</span>

- [√ 使用 create-vue 初始化项目](#createVue)
- [√ 配置 ip 访问项目](#ip)
- [√ 配置多环境变量](#env)
- [√ 配置 alias 别名](#alias)
- [√ Sass 全局样式](#sass)
- [√ 识别 nodejs 内置模块](#node)
- [√ 静态资源使用](#static)
- [√ Vue-router](#router)
- [√ Pinia 状态管理](#pinia)
- [√ Eslint + Prettier 统一开发规范](#prettier)
- [√ husky + lint-staged 提交校验](#husky)
- [√ 使用 Mock 数据](#mock)
- [Axios 封装及接口管理](#axios)
- [rem 适配方案](#rem)
- [VantUI 组件按需加载](#vant)
- [适配苹果底部安全距离](#phonex)
- [ 配置 proxy 跨域](#proxy)
- [vconsole 移动端调试](#vconsole)
- [ 动态设置 title](#dyntitle)
- [ 配置 Jssdk](#jssdk)

## <span id="createVue">✅ 使用 create-vue 初始化项目 </span>
* 文档：https://github.com/vuejs/create-vue
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
- @types/node
```