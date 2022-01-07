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

## <span id="createVue">✅ 使用 create-vue 初始化项目 </span>
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
## <span id="alias">✅ 配置 alias 别名 </span>
## <span id="sass">✅ Sass 全局样式 </span>
## <span id="router">✅ Vue-router4 </span>
## <span id="pinia">✅ Pinia 状态管理 </span>
## <span id="prettier">✅ Eslint + Prettier 统一开发规范 </span>
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