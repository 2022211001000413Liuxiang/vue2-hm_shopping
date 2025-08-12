<template>
  <div class="count-box">
    <button @click="handleSub()" class="minus">-</button>
    <input @change="handleChange" :value="value" class="inp" type="text">
    <div @click="handleAdd()" class="plus">+</div>
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleAdd () {
      this.$emit('input , this.value + 1')
    },
    handleSub () {
      if (this.value <= 1) {
        return
      }
      this.$emit('input', this.value - 1)
    },

    handleChange (e) {
      // console.log(e.target.value)
      const num = +e.target.value
      if (isNaN(num) || num < 1) {
        e.target.value = this.value
        return
      }

      this.$emit('input, num')
    }
  }

}
</script>

<style lang="less" scoped>
.count-box {
  width: 110px;
  display: flex;

  .plus, .minus {
    width: 30px;
    height: 30px;
    background-color: #efefef;
    border: none;
    outline: none;
    font-size: 20px;
    display: flex; /* 使用 flex 布局 */
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
  }

  .inp {
    width: 40px;
    height: 30px;
    outline: none;
    border: none;
    margin: 0 5px;
    background-color: #efefef;
    text-align: center; /* 输入框中的文本居中 */
  }
}
</style>
