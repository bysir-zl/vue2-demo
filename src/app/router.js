/**
 * Created by Administrator on 2017/1/15.
 */

import Router from 'vue-router'
import Vue from 'vue'

import Welcome from './welcome/main'

Vue.use(Router)

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator
const routes = [
  {
    path: '/auth',
    component: Welcome,
    // redirect: { name: 'auth.singin' },
    // meta: { requiresAuth: false },
  }
]

const router = new Router({
  routes,
  mode: 'history', // do not use /#/.
})


export default router
