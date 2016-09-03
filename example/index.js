import Vue from 'vue'
import VueTimeago from '../src'
import app from './app'
import qs from './qs'
import locales from './locales'

Vue.config.debug = true
Vue.use(VueTimeago, {
  locale: 'en-US',
  locales
})

new Vue({
  el: '#app',
  render: h => h(app)
})
