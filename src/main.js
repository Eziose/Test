import Vue from 'vue'
import App from './App.vue'
import router from './assets/router/router'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

Vue.use(router)
