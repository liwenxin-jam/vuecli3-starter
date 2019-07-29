const test = {
  namespaced: true,
  state: {
    obj: { desc: '团队?' },
    arr: []
  },
  getters: {
    obj: state => state.obj
  },
  mutations: {
    SET_OBJ(state, param) {
      state.obj = param;
    }
  },
  actions: {
    setObj({ commit }, param) {
      setTimeout(() => {
        commit('SET_OBJ', param)
      }, 1000)
    }
  }
};

export default test
