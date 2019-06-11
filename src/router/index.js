import Vue from 'vue'
// 引入路由插件
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 声明要使用路由
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
