import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import New from '@/components/new'
import Upnew from '@/components/upnew'
import Hot from '@/components/hot'
import Classify from '@/components/classify'
import Discount from '@/components/discount'
import List from '@/components/list'
import Listright from '@/components/list-right'
import Listperson from '@/components/list-person'
import Listaddress from '@/components/list-address'
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
      path: '/discount',
      component: Discount,
    },
    {
      path: '/list',
      component: List,
      redirect:'/list/right',
      children: [
        {
          path: 'right',
          component: Listright,
        },
        {
          path: 'person',
          component: Listperson,
        },
        {
          path: 'address',
          component: Listaddress,
        },
      ]
    },
    {
      path: '/car',
      component: Car,

    },


  ]
})
