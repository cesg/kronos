import Vue from 'vue'
import router from './router'
import AppView from './pages/App.vue'
require('./bootstrap')

new Vue({
  router,
  el: '#app',
  render: h => h(AppView)
})
