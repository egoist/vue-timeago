import Vue from 'vue'
import VueTimeago from '../src'
import app from './app'
import qs from './qs'

Vue.use(VueTimeago, {
  locale: 'en-US',
  locales: {
    'en-US': require('../locales/en-US.json'),
    'zh-CN': require('../locales/zh-CN.json'),
    'zh-TW': require('../locales/zh-TW.json')
  },
  maxtime: {
    stage: 'HOUR',
    format: v => new Date(v).toLocaleDateString()
  }
})

new Vue({
  el: 'body',
  components: {app}
})
