<template>
  <section class="container">
    <div>父级传递过来的数据</div>
    <ul>
      <li v-for="user in users">{{user}}</li>
    </ul>
    <button @click="toParent">点击将数据发送给父组件</button>
  </section>
</template>

<script>
  import Event from '@utils/EventBus'

  export default {
    name: 'child',
    props: {
      users: {
        type: Array,
        default: () => [],
        required: true
      }
    },
    methods: {
      toParent() {
        console.log(this)
        // this.$emit('change', '子向父组件传值')
        Event.$emit('send', '发送数据给父组件')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    text-align: center;

    button {
      margin: 5px;
    }
  }
</style>
