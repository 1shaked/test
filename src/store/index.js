import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    height: 180,
    width: 50,
    todos: ['XXXXXX']
  },
  mutations: {
    SET_HEIGHT(state, height) {
      state.height = height
    },
    SET_WIDTH(state, width) {
      state.width = width
    },
    SET_TODOS(state, todos) {
      state.todos = todos
    }
  },
  actions: {
    async getTodos({ commit }) {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos/')
      console.log(res);
      commit('SET_TODOS', res.data)
    }
  },
  getters: {
    todos_len(state) {
      return state.todos.length
    }
  },
  modules: {
  }
})
