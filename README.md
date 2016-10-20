# vue-timeago [![NPM version](https://img.shields.io/npm/v/vue-timeago.svg)](https://npmjs.com/package/vue-timeago) [![NPM downloads](https://img.shields.io/npm/dm/vue-timeago.svg)](https://npmjs.com/package/vue-timeago) [![Build Status](https://img.shields.io/circleci/project/egoist/vue-timeago/master.svg)](https://circleci.com/gh/egoist/vue-timeago)

> A timeago component for Vue 1 and Vue 2.

## Install

```bash
# for Vue 2
$ npm install --save vue-timeago
# for Vue 1
$ npm install --save vue-timeago@2
```

It's also available on NPMCDN: https://unpkg.com/vue-timeago/index.umd.js

## Usage

```js
import VueTimeago from 'vue-timeago'

Vue.use(VueTimeago, {
  name: 'timeago', // component name, `timeago` by default
  locale: 'en-US',
  locales: {
    'en-US': require('vue-timeago/locales/en-US.json')
  }
})
```

Then in your lovely component:

```html
<!-- simple usage -->
<!-- time is a dateString that can be parsed by Date.parse() -->
<timeago :since="time"></timeago>

<!-- Auto-update time every 60 seconds -->
<timeago :since="time" :auto-update="60"></timeago>

<!-- max time, time before this will not be converted  -->
<!-- otherwise use custom formatTime function to format -->
<!-- 86400 * 365 = a year -->
<timeago :since="time" :max-time="86400 * 365" :format="formatTime"></timeago>

<!-- custom locale -->
<!-- use a different locale instead of the global config -->
<timeago :since="time" locale="zh-CN"></timeago>
```

A very basic demo: https://egoistian.com/vue-timeago

## i18n support

For all supported languages, see [/locales](https://github.com/egoist/vue-timeago/blob/master/locales), it's easy to add a new language support, feel free to submit a Pull Request to help us support more languages!

## Development

```bash
# for dev
$ npm run example

# for publishing
$ npm run build
```

## License

MIT © [EGOIST](https://github.com/egoist)
