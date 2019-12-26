<template>
  <section class="wrapper">
    <div>username：{{userName}}</div>
    <section>
      <button @click="commit('SET_USERNAME', 'commit-mutations')">commit同步更新</button>
      <button @click="dispatch('setUserName', 'dispatch-actions')">dispatch异步更新</button>
    </section>
    <hr>
    <div>obj.desc：{{obj.desc}}</div>
    <section>
      <button @click="commit('test/SET_OBJ', { desc: 'commit-广州团队'})">commit同步更新</button>
      <button @click="dispatch('test/setObj', { desc: 'dispatch-广州团队'})">dispatch异步更新</button>
    </section>
    <div>mapState：{{name}}--{{objInfo.desc}}</div>
    <div>mapMutations和mapActions更新数据</div>
    <section>
      <button @click="commitUserName('commit-mapMutations')">commitUserName</button>
      <button @click="dispatchUserName('dispatch-mapActions')">dispatchUserName</button>
    </section>
  </section>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  import store from '@store'

  export default {
    computed: {
      // ...mapGetters([
      //   'userName'
      // ])
      ...mapGetters({
        'userName': 'userName',
        'obj': 'test/obj'
      }),
      ...mapState({
        // 'name': 'userName',
        // 箭头函数可使代码更简练，等价于前者
        name: state => state.userName,
        // objInfo: state => state.test.obj,
        objInfo(state) {
          console.log(this.msg)
          return state.test.obj
        }
      })
    },
    data() {
      return {
        msg: 'Hello '
      }
    },
    methods: {
      ...mapMutations({
        commitUserName: 'SET_USERNAME'
      }),
      ...mapActions({
        dispatchUserName: 'setUserName'
      }),
      commit(eventName, params) {
        store.commit(eventName, params)
      },
      dispatch(eventName, params) {
        store.dispatch(eventName, params)
      }
    }
  }
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
