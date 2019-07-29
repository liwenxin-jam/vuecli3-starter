import Vue from "vue";
import Vuex from "vuex";
import modules from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    baseUrl: process.env.VUE_APP_URL,
    userName: 'jam'
  },
  getters: {
    baseUrl: state => state.baseUrl,
    userName: state => state.userName
  },
  mutations: {
    SET_USERNAME: (state, param) => {
      state.userName = param;
    }
  },
  actions: {
    setUserName({ commit }, param) {
      setTimeout(() => {
        commit('SET_USERNAME', param)
      }, 1000)
    }
  },
  modules
});

export default store
