import Vue from 'vue'
import Router from 'vue-router'
import music from './music/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'music',
      component: music
    }
  ]
})
