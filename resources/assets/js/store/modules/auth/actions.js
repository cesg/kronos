import * as types from './mutationTypes'
import Axios from 'axios'
export default {
  setCurrent ({commit}, user) {
    Axios.defaults.headers.common['Authorization'] = `Bearer ${user.api_token}`
    commit(types.SET_CURRENT_AUTH, user)
  }
}
