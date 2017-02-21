# vue-timeago [![NPM version](https://img.shields.io/npm/v/vue-timeago.svg)](https://npmjs.com/package/vue-timeago) [![NPM downloads](https://img.shields.io/npm/dm/vue-timeago.svg)](https://npmjs.com/package/vue-timeago) [![Build Status](https://img.shields.io/circleci/project/egoist/vue-timeago/master.svg)](https://circleci.com/gh/egoist/vue-timeago)

> A timeago component Vue.js

## Install

```bash
$ npm install --save vue-timeago
```

It's also available on NPMCDN: https://unpkg.com/vue-timeago/

## Usage

```js
import VueTimeago from 'vue-timeago'

Vue.use(VueTimeago, {
  name: 'timeago', // component name, `timeago` by default
  locale: 'en-US',
  locales: {
    // you will need json-loader in webpack 1
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
<!-- instead you can use a custom formatTime function to format -->
<!-- 86400 * 365 = a year -->
<timeago :since="time" :max-time="86400 * 365" :format="formatTime"></timeago>

<!-- custom locale -->
<!-- use a different locale instead of the global config -->
<timeago :since="time" locale="zh-CN"></timeago>
```

A very basic demo: https://egoistian.com/vue-timeago

## i18n support

For all supported languages, see [/locales](https://github.com/egoist/vue-timeago/blob/master/locales), it's easy to add a new language support, feel free to submit a Pull Request to help us support more languages!

## API

### props

#### since

Type: `string` (dateString)<br>
Required: `true`

String value representing a date. The string should be in a format recognized by the Date.parse() method. see more at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

#### max-time

Type: `number`<br>
Default: `86400 * 365` (a year)

The max time in **seconds**, time before this will not be converted.

#### format

Type: `function`
Default: see below

The function we use to format the time before `max-time`, default function:

```js
// `time` is returned by `new Date(since).getTime()`
function formatTime(time) {
  const d = new Date(time)
  return d.toLocaleString()
}
```

#### auto-update

Type: `number`

The period to update the component, in **seconds**.

You can set it to `0` to disable auto-update.

#### locale

Type: `string`

Specific a locale for relavant component only.

## Development

```bash
# for dev
$ npm run example

# for publishing
$ npm run build
```

## License

MIT © [EGOIST](https://github.com/egoist)
