import { createRouter, createWebHistory } from 'vue-router'

import StoreView from "../views/StoreView.vue";
import CartView from"../views/CartView.vue";
import ProductView from"../views/ProductView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'store',
      component: StoreView
    },
    {
      path:"/store",
      redirect:"/"
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },{
      path:"/product/:id",
      name:"product",
      component:ProductView
    }
  ]
})

export default router
