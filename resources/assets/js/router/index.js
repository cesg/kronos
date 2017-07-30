import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/Index.vue'
import Yesterday from '../pages/home/Yesterday.vue'
import Week from '../pages/home/Week.vue'
import Login from '../pages/login/Index.vue'
import Axios from 'axios'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    name: 'today-view',
    meta: {requiresAuth: true},
    beforeEnter: (to, from, next) => {
      Axios.get('/me')
        .then(({data}) => {
          store.dispatch('Auth/setCurrent', data)
        })
        .then(() => next())
      next()
    }
  },
  {
    path: '/week',
    component: Week,
    name: 'week-view',
    meta: {requiresAuth: true}
  },
  {
    path: '/yesterday',
    component: Yesterday,
    name: 'yesterday-view',
    meta: {requiresAuth: true}
  },
  {
    path: '/login',
    component: Login,
    meta: {requiresAuth: false},
    beforeEnter: (to, from, next) => {
      Axios.get('/me')
        .then(({data}) => {
          if (data) {
            store.dispatch('Auth/setCurrent', data)
            next({name: 'today-view'})
          } else {
            next()
          }
        })
    }
  }
]

export default new VueRouter({
  routes,
  base: '/w/',
  mode: 'history',
  linkExactActiveClass: 'is-active'
})