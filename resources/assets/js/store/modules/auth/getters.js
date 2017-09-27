export default {
  current: state => state.current,
  check: (state, getters) => !!getters.current
}
