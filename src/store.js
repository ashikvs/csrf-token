import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    csrftoken:'test-token'
  },
  mutations: {
    setCsrfToken (state, token) {
      state.csrftoken = token
    }
  },
  getters:{
    getCsrfToken: state => {
      return state.csrftoken
    }
  },
  actions: {

  }
})
