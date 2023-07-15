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
        component: () => import('@/views/Login/index.vue')
    },
    {
        path: '/register',
        name: 'register',
        meta:{
            title:'注册'
        },
        component: () => import('@/views/Register/index.vue')
    },
    {
        path:'/notfound',
        component: () => import('@/views/Other/404.vue')
    }
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})





const pathlist = ['/', '/home', '/login', '/register', '/notfound']
router.beforeEach((to, from, next) => {
    //当没有路径的时候 跳转到404
    if (!pathlist.includes(to.path)) {
        next('/notfound')
    } else {
        //如果要跳转的路径不是login 并且localStorage没有用户信息的时候 跳转到登录页面
        if (!localStorage.getItem('token') && to.path != '/login') {
            next('/login')
        } else {
            next()
        }
    }
})






export default router
