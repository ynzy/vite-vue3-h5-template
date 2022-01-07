import { createApp } from 'vue'
import store from './store'

import App from './App.vue'
import router from './router'
// 引入全局样式
import '@/styles/index.scss'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
