import Home from './components/Home.vue'
import Details from './components/Details.vue';

export const routes = [
  {
    path: '',
    component: Home
  },
  { 
    path: '/details/:id', 
    component: Details
  }
]