import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import home from '@/views/Home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: 'Home'
    },
    component: home
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'login'
    },
    component: ()=> import('@/views/Login/index.vue')
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
