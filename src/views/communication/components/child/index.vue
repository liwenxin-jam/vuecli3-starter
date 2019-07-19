<template>
  <div>
    <ul>
      <li v-for="user in users">{{user}}</li>
    </ul>
    <button @click="toParent">点击向父组件传值</button>
    <button @click="send">点击将数据发送给父组件</button>
  </div>
</template>

<script>
  import Event from '@utils/EventBus';

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
        this.$emit('change', '子向父组件传值');
      },
      send() {
        console.log(this)
        Event.$emit('send', '发送数据给父组件');
      }
    }
  }
</script>
