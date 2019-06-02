<template>
  <div>
    <h1>我是member</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "我是会员"
    };
  },
//   beforeRouteEnter(to, from, next) {
//     // 在渲染该组件的对应路由被 confirm 前调用
//     // 不！能！获取组件实例 `this`
//     // 因为当守卫执行前，组件实例还没被创建
//     alert('我是beforeRouterEnter')
//     // console.log(this.msg)
//     next()
//   },

//   beforeRouteLeave(to, from, next) {
//     // 导航离开该组件的对应路由时调用
//     // 可以访问组件实例 `this`
//     alert('我是leave守卫')
//     console.log(this);
//     next()
//   }
};
</script>

<style lang="scss" scoped>
</style>