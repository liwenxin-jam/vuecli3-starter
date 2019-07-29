<template>
  <section class="wrapper">
    <h3>icon使用</h3>
    <section>
      <h3>单个svg</h3>
      <c-svg-icon icon-class="example" />
      <c-svg-icon icon-class="eye" />
      <c-svg-icon icon-class="form" />
      <c-svg-icon icon-class="nested" />
      <c-svg-icon icon-class="password" />
      <c-svg-icon icon-class="table" />
      <c-svg-icon icon-class="tree" />
      <c-svg-icon icon-class="user" />
    </section>
    <section>
      <h3>Iconfont</h3>
      <!-- <c-svg-icon icon-class="iconzip" /> -->
      <c-svg-icon icon-class="zip" />
      <c-svg-icon icon-class="tree" />
      <c-svg-icon icon-class="wechat" />
      <c-svg-icon icon-class="dingcan" />
      <c-svg-icon icon-class="wulianwang" />
      <c-svg-icon icon-class="lianxiren" />
    </section>
    <section>
      <h3>Font Awesome</h3>
      <i class="fa fa-fw fa-address-book" />
      <i class="fa-fw fa-3x fa-address-card" :class="{'fa': true}" />
      <i :class="[fa, 'fa-fw', 'fa-2x', 'fa-address-book-o']" />
      <i class="fa-fw fa-3x fa-envelope-open" :class="status ? 'fa' : ''" />
      <!-- 如果存在两个动态class  可以如下这样写 注意标签上不能写两个:class -->
      <i class="fa-3x fa-archive" :class="[{'fa-fw': true}, status ? 'fa' : '']" />
      <i :class="iconName('bug')" />
      <i class="fa fa-fw fa-address-book" :style="{position: 'relative', left:'50px'}" />
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      msg: "welcome to Vue!",
      status: true,
      fa: "fa"
    };
  },
  mounted() {
    console.log("hello world!");
    // debugger
    // console.lo('hello world!')
  },
  computed: {
    iconName(name) {
      // 正常情况下计算属性只能取当前data的数据进行计算
      // return `fa fa-fw fa-${name}`;

      // 接口返回的数组对象也可以通过传参去实现是否显示某些图标
      return function(name) {
        return `fa fa-fw fa-${name}`;
      };
    }
  }
};
</script>


<style lang="scss" scoped>
// src="./index.scss"
@import "./index.scss";

.wrapper {
  margin-top: 20%;
  text-align: center;
}

.svg-icon {
  margin: 5px;
}
</style>
