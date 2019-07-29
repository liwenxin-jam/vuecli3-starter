<template>
  <section class="wrapper">
    <h3>{{msg}}</h3>
    <input type="text" v-model="msg" />
    <!-- <input type="text" :value="msg" @input="e => msg = e.target.value" /> -->
    <hr />
    <h3>{{obj.name}}--{{desc}}</h3>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <h3>{{item.name}}</h3>
      </li>
    </ul>
    <section>
      <button @click="updateComplexVal">更新值</button>
      <button @click="updateDescrition">更新描述</button>
    </section>
    <!-- <hr />
    <my-input :value.sync="message"></my-input>-->
  </section>
</template>

<script>
import myInput from "./components/my-input";

export default {
  // components: { myInput },
  components: { myInput: myInput },
  data() {
    return {
      msg: "Hello World!",
      message: "Hello Vue!",
      obj: {
        name: "我是谁？",
        desc: "团队?"
      },
      arr: [{ name: "xx" }],
      // desc: ''
    };
  },
  created() {
    console.log(this.msg);
    // 有get和set方法，因为vue是通过Object.defineProperty()来实现数据劫持的
    console.log(this.obj);
    // this.desc = this.obj.desc;
  },
  methods: {
    updateComplexVal() {
      // Boolean Number String 简单类型
      this.msg = "更新后的信息";
      // Object Array 复杂类型 不要直接赋值，有可能会造成视图未渲染
      // this.obj.name = 'I am jam';
      // this.arr[0] = { name: "lai" };
      this.$set(this.obj, "name", "I am jam");
      this.$set(this.arr, 0, { name: "lai" });
    },
    updateDescrition() {
      this.$set(this.obj, "desc", "广州团队");
    }
  },
  computed: {
    desc() {
      return this.obj.desc;
    }
  },
  watch: {
    msg(newVal, oldVal) {
      console.log("msg--newVal", newVal);
      console.log("msg--oldVal", oldVal);
    },
    // obj(newVal, oldVal) {
    //   console.log("obj--newVal", newVal);
    //   console.log("obj--oldVal", oldVal);
    // },
    obj: {
      // 和深度无关，而是在修改（不是替换）对象或数组时，旧值将与新值相同，因为它们索引同一个对象/数组
      handler(newVal, oldVal) {
        console.log("obj--newVal", newVal);
        console.log("obj--oldVal", oldVal);
      },
      deep: true // 深度监听
      // immediate: true // 默认是false，undefined => init 初始化绑定值的时候就触发
    },
    // desc(newVal, oldVal) {
    //   console.log("desc--newVal", newVal);
    //   console.log("desc--oldVal", oldVal);
    // },
    // arr(newVal, oldVal) {
    //   console.log("arr--newVal", newVal);
    //   console.log("arr--oldVal", oldVal);
    // }
    arr: {
      handler(newVal, oldVal) {
        console.log("arr--newVal", newVal);
        console.log("arr--oldVal", oldVal);
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 20%;
  text-align: center;

  button {
    margin: 5px;
  }
}
</style>
