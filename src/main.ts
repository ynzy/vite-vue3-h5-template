import { createApp } from 'vue'
import store from './store'

import App from './App.vue'
import router from './router'
// 引入全局样式
import '@/styles/index.scss'
// 全局引入按需引入UI库 vant
// import { vantPlugins } from './plugins/vant'

const app = createApp(App)
window.vm = app

app.use(store)
// app.use(vantPlugins)
app.use(router)

app.mount('#app')
