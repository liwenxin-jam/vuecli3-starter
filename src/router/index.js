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

const router = new Router({
  // mode: "history",  // 默认 hash
  // base: process.env.BASE_URL,
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
        keepAlive: true,
        title: '缓存页'
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
      path: '/communicationVuex',
      name: 'communicationVuex',
      component: syncImportComponent('communication/vuex')
    },
    {
      path: '/practice',
      name: 'practice',
      component: syncImportComponent('practice')
    }
  ]
})

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach(route => {
  // 从路由的元信息中获取 title 属性
  if (route.meta.title) {
    document.title = route.meta.title;
  }
});

export default router;
