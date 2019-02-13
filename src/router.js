import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'



Vue.use(Router)
//整个项目的路由词典：访问路径 <=> 视图组件
export default new Router({
  routes: [
    { path: '/', redirect: '/Index' },
    { path: '/Index', component: Index }
   
   
  ]
})
