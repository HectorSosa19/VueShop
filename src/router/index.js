import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
 {
    path: '/Order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "Order" */ '../views/Order.vue')
  },
  {
    path: '/AllCategories',
    name: 'AllCategories',
    component: () => import(/* webpackChunkName: "Categories" */ '../views/AllCategories.vue')
  },
  {
    path: '/Offers',
    name: 'Offers',
    component: () => import(/* webpackChunkName: "Offers" */ '../views/Offers.vue')
  },
  {
    path: '/Services',
    name: 'Services',
    component: () => import(/* webpackChunkName: "Services" */ '../views/Services.vue')
  },
  {
    path: '/Products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "Services" */ '../views/Products.vue')
  },
  {
    path: '/CreateUser',
    name: 'CreateUser',
    component: () => import(/* webpackChunkName: "Services" */ '../views/CreateUser.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
