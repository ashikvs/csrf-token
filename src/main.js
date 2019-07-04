import Vue from 'vue'
import App from './App.vue'
//import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import Rx from 'rxjs/Rx';
import { SubSink } from 'subsink';
import VueRx from 'vue-rx';
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify)
import './registerServiceWorker'


// VueRx can use libraries other than RxJS
// that implement the observable interface.
Vue.use(VueRx, Rx, SubSink)

Vue.config.productionTip = false

/* router.beforeEach((to, from, next) => {
 if (to.matched.some(record => record.meta.adminOnly)) {
		alert("REQUIRES AUTH!"); //Do SOMETHING
 } else {
    next();
   }
  
}); */

import Router from 'vue-router'
import Home from './views/homeComponent/homeContainer.vue'
import About from './views/aboutComponent/aboutContainer.vue'
import Csrf from './views/csrfComponent/csrfContainer.vue'



const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      beforeEnter: (to, from,next) => {
        if (!store.state.accessToken) {
          //reroute to home
          next('/')
          console.log('not authorized')
        }else{
          //proceed with route
          next()}
      }
    },
    {
      path: '/csrf',
      name: 'Csrf',
      component: Csrf
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
//router.beforeEach((to, from, next) => {

 
/*   if (to.fullPath === '/about') {
    if (!store.state.accessToken) {
      
      console.log('not authorized')
     
    }
  } */

/*   next();

}); */
Vue.use(Router)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
