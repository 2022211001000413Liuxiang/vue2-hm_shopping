import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import Detail from '@/views/detail'
import Search from '@/views/search/index.vue'
import SearchList from '@/views/search/list.vue'
import Pay from '@/views/pay'
import MyOrder from '@/views/myorder'
import Home from '@/views/layout/home'
import Category from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/my'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        { path: '/home', component: Home },
        { path: '/category', component: Category },
        { path: '/cart', component: Cart },
        { path: '/user', component: User }
      ]
    },

    { path: '/detail/:id', component: Detail },
    { path: '/search', component: Search },
    { path: '/searchlist', component: SearchList },
    { path: '/pay', component: Pay },
    { path: '/myorder', component: MyOrder }
  ]
})

// 全局前置路由,所有的路由的访问之前，都会经过全局前置守卫
// to，到哪去
// from，从哪来
// next，是否放行,next()放行，next('/login')强制跳转
// 目的：判断用户是否登录，未登录强制跳转到登录页
const authRequired = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
  if (!authRequired.includes(to.path)) {
    next()
  } else {
    const token = store.getters.token
    if (token) {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
