import Vue from 'vue'
import VueTimeago from '../src'
import app from './app'
import qs from './qs'

Vue.use(VueTimeago, {
  locale: require(`../locales/${qs().lang || navigator.language}.json`)
})

new Vue({
  el: 'body',
  components: {app}
})
