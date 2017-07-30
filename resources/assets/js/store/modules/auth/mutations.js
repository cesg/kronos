import * as types from './mutationTypes'

export default {
  [types.SET_CURRENT_AUTH] (state, user) {
    state.current = user
  }
}
