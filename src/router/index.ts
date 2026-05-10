// `createWebHistory` replaced with `createWebHashHistory` for production. But I decided to reverse it later because it didn't help.
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    // {
    //   path: '/listings',
    //   name: 'listings',
    //   component: () => import('@/views/ListingsView.vue'),
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'not-found',
    //   component: () => import('@/views/NotFoundView.vue'),
    // },
  ],
})

export default router
