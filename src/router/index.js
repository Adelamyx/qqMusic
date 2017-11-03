import Vue from 'vue'
import Router from 'vue-router'
import music from './music/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/qqmusic/dist/',
  routes: [
    {
      path: '/music',
      name: 'music',
      component: music
    }
  ]
})
