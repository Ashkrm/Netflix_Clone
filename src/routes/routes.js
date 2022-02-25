import Home from '@/components/Home.vue'
import Details from '@/components/Details.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  { 
    path: '/details/:id',
    name: 'details', 
    component: Details
  }
]