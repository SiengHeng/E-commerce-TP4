import { createRouter, createWebHistory } from 'vue-router'
import CountrySearch from '../components/CountrySearch.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CountrySearch',
      component: CountrySearch
    }
  ]
})

export default router
