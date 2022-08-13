import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ShopingCart from '../views/ShopingCart.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/ShopingCart',
    name: 'ShopingCart',
    component: ShopingCart
  },
  {
    path: '/Store',
    name: 'Store',
    component: () => import('../views/Store.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
