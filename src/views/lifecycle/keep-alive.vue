<template>
  <div class="wrapper">
    <h1>lifecycleKeepAlive</h1>
    <button @click="back">后退/返回</button>
  </div>
</template>

<script>
  export default {
    name: 'lifecycleKeepAlive',
    // 第一次访问会触发
    beforeCreate() {
      console.log('beforeCreate')
    },
    // 第一次访问会触发
    created() {
      console.log('created')
    },
    // 第一次访问会触发
    beforeMount() {
      console.log('beforeMount')
    },
    // 第一次访问会触发，事件挂载的方法等，只执行一次的放在 mounted 中
    mounted() {
      console.log('mounted')
    },
    // 永远不会触发
    beforeUpdate() {
      console.log('beforeUpdate')
    },
    // 永远不会触发
    updated() {
      console.log('updated')
    },
    // 永远不会触发
    beforeDestroy() {
      console.log('beforeDestroy')
    },
    // 永远不会触发
    destroyed() {
      console.log('destroyed')
    },
    // 每次激活状态都会触发，组件每次进去执行的方法放在 activated 中
    activated() {
      console.log('activated')
    },
    // 每次隐藏状态下都会触发，想销毁的可以在这里操作
    deactivated() {
      console.log('deactivated')
    },
    methods: {
      back() {
        // 后退一步记录，等同于 history.back()
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    margin-top: 20%;
    text-align: center;
  }
</style>
