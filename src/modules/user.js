
export default {
  namespaced: true,
  state () {
    return {
      userInfo: {
        token: '',
        userId: ''
      }
    }
  },

  mutations: {
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  },

  actions: {

  },

  getters: {
  }
}
