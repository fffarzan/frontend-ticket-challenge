export const state = () => ({
  isErrDialogShowning: false,
})

export const mutations = {
  SET(state, { prop, val }) {
    state[prop] = val
  },
}

export const actions = {
  toggle({ commit }) {
    commit('SET', { prop: 'isErrDialogShowning', val: true })
    setTimeout(() => {
      commit('SET', { prop: 'isErrDialogShowning', val: false })
    }, 2000)
  },
}
