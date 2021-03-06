import Vue from 'vue'
import Scrollspy from 'vue2-scrollspy'

import App from './App.vue'

import '@/assets/css/tailwind.css'

Vue.use(Scrollspy)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
