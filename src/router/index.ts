import { setDocumentTitle } from '@/utils'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './router.config'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  setDocumentTitle(to.meta.title as string)
  next()
})

export default router
