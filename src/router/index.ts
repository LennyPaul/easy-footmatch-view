import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: "acceuil",
    component : () => import('@/views/Acceuil.vue')
  },
  {
    path: '/ligues/:id',
    name: "ligue",
    component : () => import('@/views/ligue.vue')
  },
  {
    path: '/clubs/:id',
    name: "club",
    component: () => import('@/views/club.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
