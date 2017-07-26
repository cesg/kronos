import Vue from 'vue'
import router from './router'
import AppView from './pages/App.vue'
import Axios from 'axios'

require('./bootstrap')

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Axios.get('/me')
      .then(response => {
        if (response.data) {
          next()
        } else {
          next({
            path: '/login'
          })
        }
      })
  } else {
    next()
  }
})

new Vue({
  router,
  el: '#app',
  render: h => h(AppView)
})
