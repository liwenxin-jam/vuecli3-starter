import Vue from "vue";
import Vuex from "vuex";
import modules from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    baseUrl: process.env.VUE_APP_URL
  },
  getters: {
    baseUrl: state => state.baseUrl
  },
  mutations: {},
  actions: {},
  modules
});

export default store
