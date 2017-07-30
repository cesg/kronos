import * as types from './mutationTypes'

export default {
  setCurrent ({commit}, task) {
    commit(types.SET_CURRENT_AUTH, task)
  },
  setAll ({commit}, tasks) {
    commit(types.SET_ALL_TASK, tasks)
  }
}
