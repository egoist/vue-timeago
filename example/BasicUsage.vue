<template>
  <div>
    <div class="box" data-title="Date">
      <input v-model="date" type="date" name="" id="">
    </div>
    <div class="box" data-title="Output" v-if="date">
      <timeago :datetime="date" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '2019-02-12'
    }
  }
}
</script>

<readme>
First you need to use the plugin:

```js
import Timeago from 'vue-timeago'

Vue.use(Timeago)
```

Then use the `<timeago>` component in your Vue component like this:

```html
<template>
  <div>
    <timeago :datetime="date" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '2018-03-12'
    }
  }
}
</script>
```
</readme>
