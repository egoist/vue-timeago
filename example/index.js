import Vue from 'vue'
import Timeago from '../src'
import App from './app.vue'
import converter from '../src/converter'

const r = require.context('date-fns/locale', true, /^\.\/([\w\_]+)\/index\.js/)
const locales = {}
r.keys().forEach(v => {
  const [, name] = /^\.\/([\w\_]+)\/index\.js/.exec(v)
  locales[name] = r(v)
})

Vue.use(Timeago, {
  locales,
  converter
})

new Vue({
  el: '#app',
  render: h => h(App, {
    props: {
      localeNames: Object.keys(locales)
    }
  })
})
