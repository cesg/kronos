import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default {
  state: {
    current: null
  },
  actions,
  getters,
  mutations,
  namespaced: true
}
