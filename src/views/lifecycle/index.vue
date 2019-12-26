<template>
  <section class="wrapper">
    <h1>{{message}}</h1>
    <h2 v-text="obj.name"></h2>
    <div v-html="`<h3>${arr[0].name}</h3>`"></div>
    <section>
      <button @click="updateTitle">点击更新标题</button>
      <button @click="openOtherPage">跳转到其它页面</button>
      <button @click="openForwardPage">前进一个页面</button>
    </section>
    <section>
      <button @click="openParamsPage">params传参</button>
      <button @click="openHasParamsPage">路由配置需要params</button>
      <button @click="openQueryPage">query传参</button>
    </section>
    <section>
      <button @click="openKeepAlivePage">访问缓存的页面</button>
      <button @click="openNewTapPage">新开tab页</button>
    </section>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Vue的生命周期',
        obj: {
          name: 'jam'
        },
        arr: [{
          name: 'xx'
        }]
      }
    },
    beforeCreate() {
      console.group('------beforeCreate创建前状态------')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el) // undefined
      console.log('%c%s', 'color:red', 'data   : ' + this.$data) // undefined
      console.log('%c%s', 'color:red', 'message: ' + this.message)
    },
    created() {
      console.group('------created创建完毕状态------')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el) // undefined
      console.log('%c%s', 'color:red', 'data   : ' + this.$data) // 已被初始化
      console.log('%c%s', 'color:red', 'message: ' + this.message) // 已被初始化
    },
    beforeMount() {
      console.group('------beforeMount挂载前状态------')
      console.log('%c%s', 'color:red', 'el     : ' + (this.$el)) // 已被初始化
      console.log(this.$el)
      console.log('%c%s', 'color:red', 'data   : ' + this.$data) // 已被初始化
      console.log('%c%s', 'color:red', 'message: ' + this.message) // 已被初始化
    },
    mounted() {
      console.group('------mounted 挂载结束状态------')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el) // 已被初始化
      console.log(this.$el)
      console.log('%c%s', 'color:red', 'data   : ' + this.$data) // 已被初始化
      console.log('%c%s', 'color:red', 'message: ' + this.message) // 已被初始化
    },
    beforeUpdate() {
      console.group('beforeUpdate 更新前状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el)
      console.log(this.$el)
      console.log('%c%s', 'color:red', 'data   : ' + this.$data)
      console.log('%c%s', 'color:red', 'message: ' + this.message)
    },
    updated() {
      console.group('updated 更新完成状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el)
      console.log(this.$el)
      console.log('%c%s', 'color:red', 'data   : ' + this.$data)
      console.log('%c%s', 'color:red', 'message: ' + this.message)
    },
    beforeDestroy() {
      console.group('beforeDestroy 销毁前状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el)
      console.log(this.$el)
      console.log('%c%s', 'color:red', 'data   : ' + this.$data)
      console.log('%c%s', 'color:red', 'message: ' + this.message)
    },
    destroyed() {
      console.group('destroyed 销毁完成状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el)
      console.log(this.$el)
      console.log('%c%s', 'color:red', 'data   : ' + this.$data)
      console.log('%c%s', 'color:red', 'message: ' + this.message)
    },
    methods: {
      // 更改标题
      updateTitle() {
        this.message = 'Hello World'
      },
      // 打开其它页面
      openOtherPage() {
        // lifecycleOther === /lifecycleOther === { path: 'lifecycleOther' }
        // this.$router.push('lifecycleOther')
        // this.$router.push({ path: 'lifecycleOther' })
        // this.$router.push({ path: '/lifecycleOther' })
        this.$router.push({ name: 'lifecycleOther' })

        // 同样是跳转到指定的url，但是这个方法不会向history里面添加新的记录，点击返回，会跳转到上上一个页面。上一个记录是不存在的。
        // this.$router.replace({ name: 'lifecycleOther' })
      },
      // 访问前一个访问过的页面
      openForwardPage() {
        // 浏览器记录中前进一步，等同于history.forward
        this.$router.go(1);
      },
      // params传参访问页面
      openParamsPage() {
        this.$router.push({ name: 'lifecycleOther', params: { id: 1 } })
      },
      // params传参访问需要带id页面
      openHasParamsPage() {
        this.$router.push({ path: '/lifecycleParams/1' })
        // this.$router.push({ name: 'lifecycleParams', params: { id: 1 } })
      },
      // query传参访问页面
      openQueryPage() {
        this.$router.push({ name: 'lifecycleOther', query: { id: 2 } })
      },
      // 访问缓存页
      openKeepAlivePage() {
        this.$router.push({ name: 'lifecycleKeepAlive' })
      },
      // 新开tab页
      openNewTapPage() {
        let routeData = this.$router.resolve({ name: 'lifecycleOther', params: { id: 1 }, query: { id: 1 } });
        // 只读
        // routeData.route.params = { id: 1 };
        // routeData.route.query = { id: 1 };
        console.log(routeData)
        window.open(routeData.href, '_blank');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    margin-top: 20%;
    text-align: center;
  }

  button {
    margin: 5px;
  }
</style>
