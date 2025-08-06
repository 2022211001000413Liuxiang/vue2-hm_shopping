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

export default router
