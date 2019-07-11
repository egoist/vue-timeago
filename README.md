# vue-timeago [![NPM version](https://img.shields.io/npm/v/vue-timeago.svg)](https://npmjs.com/package/vue-timeago) [![NPM downloads](https://img.shields.io/npm/dm/vue-timeago.svg)](https://npmjs.com/package/vue-timeago) [![Build Status](https://img.shields.io/circleci/project/github/egoist/vue-timeago/master.svg)](https://circleci.com/gh/egoist/vue-timeago)

> A timeago component Vue.js

## Install

```bash
yarn add vue-timeago
# or
npm i vue-timeago
```

CDN: [UNPKG](https://unpkg.com/vue-timeago/dist/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-timeago/dist/) (available as `window.VueTimeago`)

## Usage

For usages on version 4, please check out [this branch](https://github.com/egoist/vue-timeago/tree/4).

```js
import VueTimeago from 'vue-timeago'

Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'en', // Default locale
  // We use `date-fns` under the hood
  // So you can use all locales from it
  locales: {
    'zh-CN': require('date-fns/locale/zh_cn'),
    ja: require('date-fns/locale/ja')
  }
})
```

Then in your lovely component:

```vue
<!-- simple usage -->
<!-- time is a dateString that can be parsed by Date.parse() -->
<timeago :datetime="time"></timeago>

<!-- Auto-update time every 60 seconds -->
<timeago :datetime="time" :auto-update="60"></timeago>

<!-- custom locale -->
<!-- use a different locale instead of the global config -->
<timeago :datetime="time" locale="zh-CN"></timeago>
```

## Plugin options

```js
Vue.use(VueTimeago, pluginOptions)
```

### locales

- **Type**: `{ [localeName: string]: any }`

An object of locales.

### locale

- **Type**: `string`

The default locale name.

### converter

- **Type**: `(date, locale, converterOptions) => string`

A `converter` that formats regular dates in `xxx ago` or `in xxx` style.

Check out our [default converter](https://github.com/egoist/vue-timeago/blob/master/src/converter.js) which uses [date-fns/distance_in_words_to_now](https://date-fns.org/v1.29.0/docs/distanceInWordsToNow) under the hood.

### converterOptions

- **Type**: `Object`

Provide an object which will be available as argument `converterOptions` in the `converter` we mentioned above.

Our default converter supports most options that [date-fns/distance_in_words_to_now](https://date-fns.org/v1.29.0/docs/distanceInWordsToNow) library supports, namely:

- **includeSeconds**: (default: `false`) distances less than a minute are more detailed
- **addSuffix**: (default: `true`) result specifies if the second date is earlier or later than the first

## props

### datetime

- **Type**: `Date` `string` `number`
- **Required**: `true`

The datetime to be formatted .

### autoUpdate

- **Type**: `number` `boolean`
- **Default**: `false`

The period to update the component, in **seconds**.

You can omit this prop or set it to `0` or `false` to disable auto-update.

When `true` it will be equivalent to `60`.

### locale

Just like the `locale` option in the plugin options, but this could override the global one.

### converter

Just like the `converter` option in the plugin options, but this could override the global one.

### converterOptions

Just like the `converterOptions` option in the plugin options, but this could override the global one.

## Recipes

### Update Locale Globally

```js
Vue.use(VueTimeago, {
  locale: 'en',
  locales: {
    'zh-CN': require('date-fns/locale/zh_cn')
  }
})
```

In your components you can use `this.$timeago.locale` to access the global locale, in this case it's `en`, the `<timeago>` component will get updated when you set it to another valid locale, e.g. `this.$timeago.locale = 'zh-CN'`.

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
