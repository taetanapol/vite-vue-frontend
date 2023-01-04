import { createApp } from 'vue'
import './style.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')