// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // 设计图750，调成1倍 =>适配375标准屏幕
      // 设计图640，调成2倍 =>适配320标准屏幕
      viewportWidth: 375
    }
  }
}
