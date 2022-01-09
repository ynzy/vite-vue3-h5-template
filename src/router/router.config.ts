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
        component: () => import('@/views/tabBar/Home.vue'),
        meta: { title: '首页', keepAlive: false, showTab: true }
      },
      {
        path: '/demo',
        name: 'Demo',
        component: () => import('@/views/tabBar/Demo.vue'),
        meta: { title: '测试案例', keepAlive: false, showTab: true }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/tabBar/About.vue'),
        meta: { title: '关于我', keepAlive: false, showTab: true }
      },
      {
        path: '/tsx',
        name: 'Tsx',
        component: () => import('@/test/demo'),
        meta: { title: '测试tsx', keepAlive: false, showTab: false }
      },
      {
        path: '/static',
        name: 'Static',
        component: () => import('@/test/testStatic.vue'),
        meta: { title: '测试静态资源', keepAlive: false, showTab: false }
      },
      {
        path: '/cssModel',
        name: 'CssModel',
        component: () => import('@/test/testCssModel'),
        meta: { title: '测试css-model', keepAlive: false, showTab: false }
      },
      {
        path: '/mockAxios',
        name: 'MockAxios',
        component: () => import('@/test/testMockAxios'),
        meta: { title: '测试mock-axios', keepAlive: false, showTab: false }
      },
      {
        path: '/pinia',
        name: 'Pinia',
        component: () => import('@/test/testPinia.vue'),
        meta: { title: '测试pinia', keepAlive: false, showTab: false }
      }
    ]
  }
]
