import Vue from 'vue'
import App from './App.vue'
import uedutor from './lib'

Vue.use(uedutor)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
