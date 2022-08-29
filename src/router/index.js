import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ShopingCart from '../views/ShopingCart.vue'
import support from '../views/support.vue'
import Registracija from '../views/Registracija.vue'
import payment from '../views/payment.vue'

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
    path: '/Registracija',
    name: 'Registracija',
    component: Registracija
  },
  {
    path: '/support',
    name: 'support',
    component: support
  },
  {
    path: '/payment',
    name: 'payment',
    component: payment
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
