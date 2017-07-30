import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default {
  state: {
    current: null,
    all: [],
    filtered: []
  },
  actions,
  getters,
  mutations,
  namespaced: true
}
