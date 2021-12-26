export const state = () => ({
  model: false,
  texts: [],
  timeout: 113000,
  color: '',
})

export const mutations = {
  close(state, i) {
    state.texts.splice(i, 1)
    if (state.texts.lenght <= 0) {
      state.model = false
    }
  },
  set_model(state, data) {
    state.model = data
  },
  open(state, { text, color }) {
    state.texts = [text]
    state.color = color
    state.model = true
  },
  openMultiple(state, { texts, color }) {
    state.texts = texts
    state.color = color
    state.model = true
  },
}

export const getters = {
  model: (state) => state.model,
}
