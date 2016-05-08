# vue-timeago [![NPM version](https://img.shields.io/npm/v/vue-timeago.svg)](https://npmjs.com/package/vue-timeago) [![NPM downloads](https://img.shields.io/npm/dm/vue-timeago.svg)](https://npmjs.com/package/vue-timeago) [![Build Status](https://img.shields.io/circleci/project/egoist/vue-timeago/master.svg)](https://circleci.com/gh/egoist/vue-timeago)

> A timeago component for Vue.

## Install

```bash
$ npm install --save vue-timeago
```

It's also available on NPMCDN: https://npmcdn.com/vue-timeago/index.umd.js

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

For all supported languages, see [/locales](https://github.com/egoist/vue-timeago/blob/master/locales), feel free to submit a Pull Request to help us support more languages!

## Development

I use [rolling](https://github.com/egoist/rolling) to build the cjs version bundle, and use [vbuild](https://github.com/egoist/vbuild) to build the example. Install them globally and then see the npm scripts.

## License

MIT © [EGOIST](https://github.com/egoist)
