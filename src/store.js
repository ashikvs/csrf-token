import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken:false,
  },
  mutations: {
    setaccessToken (state, token) {
      state.accessToken = token
    }
  },
  getters:{
    getacessToken: state => {
      return state.accessToken
    }
  },
  actions: {
    setacessToken({commit},tokenflag) {
      debugger
      // console.log("ORGID IN THE STORE", orgid);
       commit('setaccessToken', tokenflag);
   },

  }
})
