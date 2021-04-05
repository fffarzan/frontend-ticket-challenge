export const state = () => ({
  isLoaderShowing: false,
})

export const mutations = {
  SET(state, { prop, val }) {
    state[prop] = val
  },
}

export const actions = {
  toggle({ commit }, status) {
    commit('SET', { prop: 'isLoaderShowing', val: status })
  },
}
