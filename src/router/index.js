import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index.vue'
import NotFound from '../404.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      hidden: true
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
  ]
})
