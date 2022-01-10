import { setDocumentTitle } from '@/utils'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { routes } from './router.config'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

router.beforeEach((to, from, next) => {
  setDocumentTitle(to.meta.title as string)
  next()
})

export default router
