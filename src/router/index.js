import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'detail-account',
    component: () => import('../components/detail-account')
  },
  {
    path: '/profile/edit',
    name:'edit-account',
    component: () => import('../components/edit-account')
  },
  {
    path: '/workplaces',
    name: 'detail-workplace',
    component: () => import('../components/detail-workplace')
  },
  {
    path: '/workplaces/edit',
    name: "edit-workplaces",
    component: () => import('../components/edit-workplaces')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
