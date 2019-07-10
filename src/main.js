/* eslint-disable */
/* eslint-enable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

// svg-icon
import '@/icons';

// 引入iconfont字体库 https://www.iconfont.cn 也可以用http://fontawesome.dashgame.com/
require("@/assets/fonts/iconfont");

// 注册全局的组件
import components from "@utils/component";
Object.keys(components).forEach(key => {
  Vue.component(key, components[key]);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
