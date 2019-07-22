import Vue from 'vue'
import LargeComponent from './components/LargeComponent.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(LargeComponent),
}).$mount('#app')
