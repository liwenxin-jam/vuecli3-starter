<!-- 父组件 -->
<template>
  <div>
    <child v-bind:users="users"></child>
  </div>
</template>

<script>
  import child from "./components/child"
  export default {
    name: 'communication',
    components: { child },
    data() {
      return {
        users: ["Henry", "Bucky", "Emily"]
      }
    }
  }
</script>
