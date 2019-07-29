<!-- 父组件 -->
<template>
  <section class="wrapper">
    <div>子级向父级传递数递=>{{msg}}</div>
    <!-- <child v-bind:users="users" v-on:change="bindChange"></child> -->
    <child :users="users" @change="bindChange"></child>
  </section>
</template>

<script>
  import Event from '@utils/EventBus'
  import child from './components/child'

  export default {
    name: 'communication',
    components: { child },
    data() {
      return {
        users: ['Henry', 'Bucky', 'Emily'],
        msg: ''
      }
    },
    mounted() {
      console.log(this)
      Event.$on('send', val => {
        this.msg = val
        console.log(val)
      })
    },
    beforeDestroy() {
      Event.$off('send')
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    margin-top: 20%;
    text-align: center;
  }
</style>
