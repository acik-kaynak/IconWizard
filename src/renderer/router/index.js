import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/home-page'
import IconDetail from '../views/icon-detail'
import DrawArea from '../views/draw-area'
import DragFile from '../views/drag-file'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: HomePage
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/icon-detail/:id',
      name: 'IconDetail',
      component: IconDetail
    },
    {
      path: '/dragfile',
      name: 'DragFile',
      component: DragFile
    },
    {
      path: '/drawarea',
      name: 'DrawArea',
      component: DrawArea
    }
  ]
})
