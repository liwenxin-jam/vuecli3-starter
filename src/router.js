import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 动态导入视图模块
const syncImportComponent = (relativeModulePath) => {
  const asyncComponent = () => {
    let component = import( /* webpackChunkName: "view-[request]" */ `./views/${relativeModulePath}`)
    component.catch((e) => {
      console.log('加载错误')
      console.error(e)
    })
    return component
  }
  return asyncComponent
}

export default new Router({
  routes: [{
      path: "/",
      redirect: '/icon',
    }, {
      path: '/icon',
      name: 'icon',
      component: syncImportComponent('icon-view')
      // component: () => import(/* webpackChunkName: "icon" */ './views/icon')
    },
    {
      path: '/iconInfo',
      name: 'iconInfo',
      component: syncImportComponent('icon-view/info')
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: syncImportComponent('lifecycle')
    }
  ]
})
