<!-- 父组件 -->
<template>
  <div>
    <!-- <child v-bind:users="users" v-on:change="bindChange"></child> -->
    <child :users="users" @change="bindChange"></child>
  </div>
</template>

<script>
import Event from '@utils/EventBus'
import child from './components/child'

export default {
  name: 'communication',
  components: { child },
  data () {
    return {
      users: ['Henry', 'Bucky', 'Emily']
    }
  },
  mounted () {
    console.log(this)
    Event.$on('send', val => {
      console.log(val)
    })
  },
  methods: {
    bindChange (val) {
      console.log(val)
    }
  },
  beforeDestroy () {
    Event.$off('send')
  }
}
</script>
