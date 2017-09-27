import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/Index.vue'
import Yesterday from '../pages/home/Yesterday.vue'
import Week from '../pages/home/Week.vue'
import Login from '../pages/login/Index.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    name: 'today-view',
    meta: {requiresAuth: true},
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
  }
]

const router = new VueRouter({
  routes,
  base: '/w/',
  mode: 'history',
  linkExactActiveClass: 'is-active'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.getters['Auth/check']) {
    next('/login')
  } else {
    next()
  }
})

export default router