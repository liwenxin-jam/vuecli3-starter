<template>
  <div class="wrapper">
    <h1>lifecycleOther</h1>
    <button @click="back">后退/返回</button>
  </div>
</template>

<script>
  export default {
    name: 'lifecycleOther',
    created() {
      // console.log('this.$router.params.id', this.$route.params.id)
      // console.log('this.$router.query.id', this.$route.query.id)
    },
    mounted() {
      console.log('this.$router.params.id', this.$route.params.id)
      console.log('this.$router.query.id', this.$route.query.id)
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
