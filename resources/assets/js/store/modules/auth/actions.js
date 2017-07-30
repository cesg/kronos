import * as types from './mutationTypes'

export default {
  setCurrent ({commit}, user) {
    commit(types.SET_CURRENT_AUTH, user)
  }
}
