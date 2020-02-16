import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
