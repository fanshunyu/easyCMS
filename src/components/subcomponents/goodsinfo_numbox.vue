<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      value="1"
      @change="countChanged"
      ref="numbox"
    >
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
export default {
  methods: {
    countChanged() {
      // console.log( '获取数据' + this.$refs.numbox.value )
      this.$emit("getcount", this.$refs.numbox.value);
    }
  },
  props: ["max"],
  watch: {
    "this.max": function(n, o) {
      mui(".mui-numbox")
        .numbox()
        .setOption("max", n);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>