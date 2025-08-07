import { getInfo, setInfo } from '@/utils/storage'
export default {
  namespaced: true,
  state () {
    return {
      userInfo: getInfo()
    }
  },

  mutations: {
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
      setInfo(userInfo)
    }
  },

  actions: {

  },

  getters: {
  }
}
