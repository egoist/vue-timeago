# vue-timeago [![NPM version](https://img.shields.io/npm/v/vue-timeago.svg)](https://npmjs.com/package/vue-timeago) [![NPM downloads](https://img.shields.io/npm/dm/vue-timeago.svg)](https://npmjs.com/package/vue-timeago) [![Build Status](https://img.shields.io/circleci/project/egoist/vue-timeago/master.svg)](https://circleci.com/gh/egoist/vue-timeago)

> A timeago component Vue.js

## Install

`vue-timeago` uses `date-fns/distance_in_words_to_now` under the hood:

```bash
yarn add date-fns vue-timeago
# or
npm i date-fns vue-timeago
```

CDN: [UNPKG](https://unpkg.com/vue-timeago/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-timeago/dist/) (available as `window.VueTimeago`)

## Usage

```js
import VueTimeago from 'vue-timeago'

Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: undefined, // Default locale
  locales: {
    'zh-CN': require('date-fns/locale/zh_cn'),
    'ja': require('date-fns/locale/ja'),
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

<!-- custom locale -->
<!-- use a different locale instead of the global config -->
<timeago :since="time" locale="zh-CN"></timeago>
```

## API

### props

#### since

- __Type__: `Date` `string` `number`
- __Required__: `true`

The given date. If you use number then it is interpreted as amount of miliseconds from epoch eg.: 1529358383000.

#### autoUpdate

- __Type__: `number`
- __Default__: `false`

The period to update the component, in **seconds**.

You can omit this prop or set it to `0` to disable auto-update.

#### locale

- __Type__: `string`

Use a custom locale.

#### includeSeconds

- __Type__: `boolean`
- __Default__: `false`

Distances less than a minute are more detailed

## What about the good old [vue-timeago v3](https://github.com/egoist/vue-timeago/tree/3)?

The older version (700 bytes gzipped) is much smaller than the current version (2.8kB gzipped) that uses [`date-fns`](https://date-fns.org/).

But the current version gives more precise result (and hopefully handles more edge cases), and we don't need to maintain a big list of locale messages because `date-fns` already did it for us.

## Development

```bash
# for dev
yarn example

# build in cjs es umd format
yarn build
```

## License

MIT © [EGOIST](https://github.com/egoist)


