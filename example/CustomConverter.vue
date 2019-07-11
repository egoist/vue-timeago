<template>
  <div>
    <div class="box" data-title="Date">
      <input v-model="date" type="date" />
    </div>
    <div class="box" data-title="Output" v-if="date">
      <timeago :datetime="date" :converter="isFutureOrPastConverter" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '2022-01-11'
    }
  },

  methods: {
    isFutureOrPastConverter(date, locale, options) {
      return new Date(date) > Date.now() ? 'Date is Future' : 'Date is Past'
    }
  }
}
</script>

<readme>
You can use a custom converter to control how machine time is converted to human-readable time:

```html
<template>
  <timeago :datetime="date" :converter="isFutureOrPastConverter" />
</template>

<script>
export default {
  data() {
    return {
      date: '2022-01-11'
    }
  },
  methods: {
    isFutureOrPastConverter(date) {
      return new Date(date) > Date.now() ? 'Date is Future' : 'Date is Past'
    }
  }
}
</script>
```
</readme>
