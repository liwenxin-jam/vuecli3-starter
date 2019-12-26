<template>
  <section class="wrapper">
    姓氏：<input type="text" v-model="firstName">
    名称：<input type="text" v-model="lastName">
    全称：<input type="text" v-model="fullName">
  </section>
</template>

<script>
  export default {
    data() {
      return {
        url: process.env.VUE_APP_URL,
        firstName: 'zhang',
        lastName: 'san'
      }
    },
    mounted() {
      // js代码中使用环境变量
      console.log('NODE_ENV', process.env.NODE_ENV)
      console.log('VUE_APP_URL', process.env.VUE_APP_URL)
    },
    computed: {
      fullName: {
        //getter 方法
        get() {
          console.log('computed getter...')
          return this.firstName + (this.lastName.length ? ' ' + this.lastName : '')
        },
        //setter 方法
        set(newValue) {
          console.log('computed setter...')
          let names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names.length > 1 && names[names.length - 1].length ? ' ' + names[names.length - 1] : ''
          // 这里不需要return
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  // src="./index.scss"
  @import './index.scss';
  @import './info.scss';

  .wrapper {
    margin-top: 20%;
    text-align: center;

    input {
      margin: 5px;
    }
  }
</style>
