import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import New from '@/components/new'
import Upnew from '@/components/upnew'
import Hot from '@/components/hot'
import Classify from '@/components/classify'
import Sale from '@/components/sale'
import List from '@/components/list'
import Car from '@/components/car'


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
          path: '/upnew',
          component: Upnew,
      },
      {
          path: '/hot',
          component: Hot,
      },
      {
          path: '/classify',
          component: Classify,
      },
      {
          path: '/sale',
          component: Sale,
      },
      {
          path: '/list',
          component: List,
      },
      {
          path: '/car',
          component: Car,
      },


  ]
})
