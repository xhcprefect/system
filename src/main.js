// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import store from './store/store'
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.config.productionTip = false
import commoon from './components/commoon/index'
for(var i in commoon){
  Vue.component(i,commoon[i])
}
/* eslint-disable no-new */
import filters from './filters/index'
for(var i in filters){
  Vue.filter(i,filters[i])
}
router.beforeEach((to, from, next) => {
  if(to.path=='/login'){
    next()
    return
  }
  if(to.path.includes('/index')){
    if(sessionStorage.getItem('isAdmin')=='0'||sessionStorage.getItem('isAdmin')=='1'){
      next()
    }else{
      next('/login')
    }
    return
  }
 next()
  
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
