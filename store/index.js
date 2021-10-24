export const state = () => ({
  direction: 'rtl',
})
export const getters = {
  getDirection: (state) => {
    return state.direction
  },
}
export const mutations = {
  changeDirection: (state, payload) => (state.direction = payload),
}
export const actions = {
  changeDirection: ({ commit }, payload) => commit('changeDirection', payload),
}
