import { getCartList, updateCartNum } from '@/api/cart'

export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  mutations: {
    setCartList (state, newList) {
      state.cartList = newList
    },
    toggleCheck (state, goodsId) {
      const goods = state.cartList.find(item => item.goods.goods_id === goodsId)
      goods.isChecked = !goods.isChecked
    },
    toggleAllCheck (state, flag) {
      // 让所有的小选框同步设置
      state.cartList.forEach(item => {
        item.isChecked = flag
      })
    }
  },
  actions: {
    async getCartAction (context) {
      const { data } = await getCartList()
      // console.log(data)
      data.list.forEach(item => {
        item.isChecked = true
      })
      context.commit('setCartList', data.list)
    },

    async changeCountAction (context, { goodsNum, goodsId, goodsSkuId }) {
      const res = await updateCartNum(goodsId, goodsNum, goodsSkuId)
      // console.log(res)
      if (res.status === 200) {
        context.dispatch('getCartAction')
      }
    }
  },
  getters: {
    // 求所有商品累加总数
    cartTotal (state) {
      return state.cartList.reduce((sum, item) => sum + item.goods_num, 0)
    },
    // 选中的商品项
    selCartList (state) {
      return state.cartList.filter(item => item.isChecked)
    },

    // 选中的商品总数
    selCount (state, getters) {
      return getters.selCartList.reduce((sum, item) => sum + item.goods_num, 0)
    },

    // 选中的商品总价
    selPrice (state, getters) {
      return getters.selCartList.reduce((sum, item) => sum + item.goods_num * item.goods.goods_price_min, 0)
    },

    isCheckedAll (state) {
      return state.cartList.every(item => item.isChecked)
    }
  }
}
