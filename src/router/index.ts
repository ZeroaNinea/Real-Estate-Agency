// `createWebHistory` replaced with `createWebHashHistory` for production.
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/listings',
      name: 'listings',
      component: () => import('@/views/ListingsView.vue'),
    },
  ],
})

export default router
