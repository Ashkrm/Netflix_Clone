// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { routes } from './routes'
import { store } from './store/store'


Vue.use(VueRouter)
Vue.use(Buefy)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})
