import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import "vuetify/dist/vuetify.min.css";
import vuetify from './plugins/vuetify';
import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
