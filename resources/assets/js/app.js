import Vue from 'vue'
import router from './router'
import AppView from './pages/App.vue'
import store from './store'

require('./bootstrap')

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters['Auth/check']) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(AppView)
})
