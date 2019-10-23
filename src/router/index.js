import Vue from 'vue'
import Router from 'vue-router'
var index=()=>import('../pages/index.vue')
var login=()=>import('../pages/login.vue')
var fedu=()=>import('../pages/fedu.vue')
var housekeep=()=>import('../pages/housekeep.vue')
var banner=()=>import('../pages/banner.vue')
var manage=()=>import('../pages/manage.vue')
var repir=()=>import('../pages/repir.vue')
var revisePwd=()=>import('../pages/revisePwd.vue')
var wsta=()=>import('../pages/wsta.vue')
var welcome=()=>import('../pages/welcome.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      component:login
    },
    {
      path:'*',
      redirect:'login'
    },
    {
      path:'/index',
      component:index,
      children:[
        {
          path:'welcome',
          component:welcome
        },
        {
          path:'',
          redirect:'welcome'
        },
        {
          path:'manage',
          component:manage,
          name:'管理员管理'
        },
        {
          path:'banner',
          component:banner,
          name:'轮播图管理'
        },
        {
          path:'houseKeep',
          component:housekeep,
          name:'家政管理'
        },
        {
          path:'fedu',
          component:fedu,
          name:'家教管理'
        },
        {
          path:'repir',
          component:repir,
          name:'维修管理'
        },
        {
          path:'revisePwd',
          component:revisePwd,
          name:'修改密码'
        },
        {
          path:'wsta',
          component:wsta,
          name:'水站管理'
        },
      ]
    }
   
  ]
})
