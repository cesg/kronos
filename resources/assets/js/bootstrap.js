import Axios from 'axios'
import store from './store'

let token = document.head.querySelector('meta[name="csrf-token"]')
let user = document.getElementById('app').attributes.user.value
user = JSON.parse(user)
if (user.id) {
  store.dispatch('Auth/setCurrent', user)
}

if (token) {
  Axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
}
