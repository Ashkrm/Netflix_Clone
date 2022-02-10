// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Header from './components/Header.vue'

Vue.use(Buefy)

Vue.config.productionTip = false

Vue.component('app-header', Header);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
})
