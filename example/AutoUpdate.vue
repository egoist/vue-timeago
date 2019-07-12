<template>
  <div>
    <div class="box" data-title="Date">
      <input v-model="date" type="text" name="" id="">
    </div>
    <div class="box" data-title="Output" v-if="date">
      <timeago :datetime="date" :autoUpdate="1" :converterOptions="{ includeSeconds: true }" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date()
    }
  }
}
</script>

<readme>
Code used by this demo:

```html
<timeago
  :datetime="date"
  :autoUpdate="1"
  :converterOptions="{ includeSeconds: true }"
/>
```

You can use `autoUpdate` prop to control how often this component should be updated, for example if you set it to `true`, it will be updated every 60 seconds.
</readme>
