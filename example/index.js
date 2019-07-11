import './style.css'
import Vue from 'vue'
import { create, mount } from 'demoboard'
import toReact from '@egoist/vue-to-react'
import Timeago from '../src'
import converter from '../src/converter'
import BasicUsage from './BasicUsage.vue'
import AutoUpdate from './AutoUpdate.vue'
import CustomConverter from './CustomConverter.vue'
import readme from '!raw-loader!../README.md'

const r = require.context('date-fns/locale', true, /^\.\/([\w\_]+)\/index\.js/)
const locales = {}
r.keys().forEach(v => {
  const [, name] = /^\.\/([\w\_]+)\/index\.js/.exec(v)
  locales[name] = r(v)
})

Vue.use(Timeago, {
  locale: 'en',
  locales,
  converter
})

const demoboard = create()

demoboard.section('Examples').add('Basic Usage', {
  component: toReact(BasicUsage),
  readme: BasicUsage.$readme,
  code: BasicUsage.$code
}).add('Auto Update', {
  component: toReact(AutoUpdate),
  readme: AutoUpdate.$readme,
  code: AutoUpdate.$code
}).add('Custom Converter', {
  component: toReact(CustomConverter),
  readme: CustomConverter.$readme,
  code: CustomConverter.$code
})

mount(demoboard, '#app', {
  title: 'Vue Timeago',
  readme
})
