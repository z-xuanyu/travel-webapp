import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Less from 'less'
import LessLoader from 'less-loader'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'

import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.$axios= axios
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})