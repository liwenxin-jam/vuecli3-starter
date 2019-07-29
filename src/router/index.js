import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 动态导入视图模块
const syncImportComponent = (relativeModulePath) => {
  const asyncComponent = () => {
    let component =
      import( /* webpackChunkName: "view-[request]" */ `@/views/${relativeModulePath}`)
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
      path: '/',
      redirect: '/icon'
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
    },
    {
      path: '/lifecycleOther',
      name: 'lifecycleOther',
      component: syncImportComponent('lifecycle/other')
    },
    {
      path: '/lifecycleParams/:id',
      name: 'lifecycleParams',
      component: syncImportComponent('lifecycle/params')
    },
    {
      path: '/lifecycleKeepAlive',
      name: 'lifecycleKeepAlive',
      component: syncImportComponent('lifecycle/keep-alive'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/mvvm',
      name: 'mvvm',
      component: syncImportComponent('mvvm')
    },
    {
      path: '/communication',
      name: 'communication',
      component: syncImportComponent('communication')
    },
    {
      path: '/practice',
      name: 'practice',
      component: syncImportComponent('practice')
    }
  ]
})
