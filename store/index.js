export const state = () => ({
  direction: 'rtl',
  readingMode: false,
  styles: false,
})
export const getters = {
  getDirection: (state) => {
    return state.direction
  },
  getReadingMode: (state) => {
    return state.readingMode
  },
  getStylesMode: (state) => {
    return state.styles
  },
}
export const mutations = {
  changeDirection: (state, payload) => (state.direction = payload),
  changeReadingModeStatus: (state, payload) => (state.readingMode = payload),
  changeStyleMode: (state, payload) => (state.styles = payload),

}
export const actions = {
  changeDirection: ({ commit }, payload) => commit('changeDirection', payload),
  changeReadingModeStatus: ({ commit }, payload) =>
    commit('changeReadingModeStatus', payload),
  changeStyleMode: ({ commit }, payload) => commit('changeStyleMode', payload),

}
