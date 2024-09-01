import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('@/views/AppMain.vue'),
      children: [
        {
          path: 'modernJavascript01',
          name: 'modernJavascript01',
          component: ()=> import('@/views/javascript/ModernJavascript01.vue')
        }
      ]
    },
  ]
})

export default router
