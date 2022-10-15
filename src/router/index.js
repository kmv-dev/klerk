import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Task-1',
      component: () => import('../views/index.vue')
    },
    {
      path: '/task-2',
      name: 'Task-2',
      component: () => import('../views/TaskTwo/index.vue')
    }
  ]
})

export default router
