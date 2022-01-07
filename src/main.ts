import { createApp } from 'vue'
import store from './store'

import App from './App.vue'
import router from './router'
// 引入全局样式
import '@/styles/index.scss'
// 全局引入按需引入UI库 vant
import { vantPlugins } from './plugins/vant'

const app = createApp(App)

app.use(vantPlugins)
app.use(store)
app.use(router)

app.mount('#app')
