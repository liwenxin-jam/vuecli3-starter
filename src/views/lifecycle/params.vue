<template>
  <div class="wrapper">
    <h1>lifecycleParams</h1>
    <button @click="back">后退/返回</button>
  </div>
</template>

<script>
  export default {
    name: 'lifecycleParams',
    created() {
      // console.log('this.$router.params.id', this.$route.params.id)
    },
    mounted() {
      console.log('this.$router.params.id', this.$route.params.id)
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
