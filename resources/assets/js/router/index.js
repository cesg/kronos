import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/Index.vue'
import Yesterday from '../pages/home/Yesterday.vue'
import Login from '../pages/login/Index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    name: 'today-view'
  },
  {
    path: '/yesterday',
    component: Yesterday,
    name: 'yesterday-view'
  },
  {
    path: '/login',
    component: Login
  }
]

export default new VueRouter({
  routes,
  base: '/w/',
  mode: 'history',
  linkExactActiveClass: 'is-active'
})