<template>
  <div>info</div>
</template>

<script>
  export default {
    data() {
      return {
        url: process.env.VUE_APP_URL
      }
    },
    mounted() {
      // js代码中使用环境变量
      console.log("NODE_ENV", process.env.NODE_ENV);
      console.log("VUE_APP_URL", process.env.VUE_APP_URL);
    }
  }
</script>


<style lang="scss" scoped>
  // src="./index.scss"
  @import './index.scss';
  @import './info.scss';
</style>
