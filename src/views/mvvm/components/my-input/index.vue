<template>
  <div>
    <h3>{{msg}}</h3>
    <input type="text" :value="msg" @input="change($event)" />
  </div>
</template>

<script>
  export default {
    name: 'my-input',
    props: {
      value: {
        type: [Number, String]
      }
    },
    data() {
      return {
        msg: this.value,
      }
    },
    methods: {
      change(e) {
        this.msg = e.target.value;
      }
    },
    watch: {
      msg(val) {
        this.$emit('update:value', val);
      }
    }
  }
</script>
