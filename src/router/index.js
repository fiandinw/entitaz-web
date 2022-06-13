import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CountdownView from '../views/CountdownView.vue'
import ErrorView from '../views/ErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'countdown',
      component: CountdownView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: ErrorView
    }
  ]
})

router.beforeEach(async (to, from) => {
  if (['home', 'notfound'].includes(to.name)){
    return {name: 'countdown'}
  }
})

export default router
