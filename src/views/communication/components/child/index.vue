<template>
  <div>
    <ul>
      <li v-for="user in users">{{user}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'child',
    props: {
      users: {
        type: Array,
        default: () => [],
        required: true
      }
    }
  }
</script>
