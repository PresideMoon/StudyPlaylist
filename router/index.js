import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Select from '../views/Select.vue'
import Play from '../views/Play.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/select',
    name: 'Select',
    component: Select
  },
  {
    path: '/play',
    name: 'Play',
    component: Play
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
