import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import New from '@/components/new'
import O from '@/components/order'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
      {
          path: '/new',
          component: New,
      },
      {
          path: '/order',
          component: O,
      }
  ]
})
