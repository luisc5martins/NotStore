import { createRouter, createWebHistory } from 'vue-router'
import App from '/src/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    }
  ]
})

export default router
