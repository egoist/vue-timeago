# vue-timeago [![NPM version](https://img.shields.io/npm/v/vue-timeago.svg)](https://npmjs.com/package/vue-timeago) [![NPM downloads](https://img.shields.io/npm/dm/vue-timeago.svg)](https://npmjs.com/package/vue-timeago) [![Build Status](https://img.shields.io/circleci/project/egoist/vue-timeago/master.svg)](https://circleci.com/gh/egoist/vue-timeago)

> A timeago filter for Vue.

## Install

```bash
$ npm install --save vue-timeago
```

It's also available on NPMCDN: https://npmcdn.com/vue-timeago/index.umd.js

## Usage

```js
import VueTimeago from 'vue-timeago'

Vue.use(VueTimeago, {
  name: 'timeago', // filter name, `timeago` by default
  locale: require('vue-timeago/locales/en_US.json')
})
```

Then in your lovely component:

```html
<template>
  <div class="component">
    <div class="item">{{ createdAt | timeago }}</div>
  </div>
</template>
```

A very basic demo: https://egoistian.com/vue-timeago

## i18n support

For all supported languages, see [/locales](https://github.com/egoist/vue-timeago/blob/master/locales), feel free to submit a Pull Request to help us support more languages!

## Development

I use [rolling](https://github.com/egoist/rolling) to build the cjs version bundle, and use [vbuild](https://github.com/egoist/vbuild) to build the example. Install them globally and then see the npm scripts.

## License

MIT © [EGOIST](https://github.com/egoist)
