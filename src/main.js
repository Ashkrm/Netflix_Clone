// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { routes } from './routes/routes'
import { store } from './store/store'


Vue.use(VueRouter)
Vue.use(Buefy)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})
