export const state = () => ({
  todos: ['Coding', 'Life', 'Nothing'],
  deletedTodos: [],
  completedTodos: [],
})

export const mutations = {
  addTodos(state, payload) {
    state.todos.push(payload)
  },
  removeTodos(state, data) {
    state.deletedTodos.push(data)
  },
  completedTodos(state, data) {
    state.completedTodos.push(data)
  },
}
