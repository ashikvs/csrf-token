import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/homeComponent/homeContainer.vue'
import About from './views/aboutComponent/aboutContainer.vue'
import Csrf from './views/csrfComponent/csrfContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
      
    },
    {
      path: '/csrf',
      name: 'Csrf',
      component: Csrf
    }
  ]
})


