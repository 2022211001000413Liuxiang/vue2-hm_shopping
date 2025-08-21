import request from '@/utils/request'

export const CheckOrder = (mode, obj) => {
  return request.get('/checkout/order', {
    params: {
      mode, /// cart:结算购物车, buynow:立即购买
      delivery: 10, // 配送方式 10:快递
      couponId: 0, // 优惠券ID, 0:不使用优惠券
      isUsePoints: 0, // 是否使用积分, 0:不使用积分
      ...obj
    }
  })
}
