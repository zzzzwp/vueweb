import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login/login'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
      // name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Layout,

    }

  ]
})
