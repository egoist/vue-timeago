import Vue from 'vue'
import VueTimeago from '../src'
import app from './app'

Vue.use(VueTimeago, {
  locale: require('../locales/en_US.json')
})

new Vue({
  el: 'body',
  components: {app}
})
