<template>
  <div>
    <h3>{{msg}}</h3>
    <!-- <input type="text" v-model="msg" /> -->
    <input type="text" :value="msg" @input="e => msg = e.target.value" />
    <hr />
    <my-input :value.sync="msg"></my-input>
  </div>
</template>

<script>
  import myInput from './components/my-input';

  export default {
    // components: { myInput },
    components: { 'myInput': myInput  },
    data() {
      return {
        msg: 'Hello World!',
        obj: {
          a: 1
        }
      }
    },
    created() {
      console.log(this.msg)
      // 有get和set方法，因为vue是通过Object.defineProperty()来实现数据劫持的
      console.log(this.obj)
    }
  }
</script>
