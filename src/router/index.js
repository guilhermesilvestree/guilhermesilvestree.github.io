import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue' // Vamos apontar para o App.vue

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // A única rota que precisamos
      name: 'home',
      component: App, 
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],

  // Esta função rola para o topo
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router