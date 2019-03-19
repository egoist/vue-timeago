<template>
  <div id="app">
    <div class="header">
      <select v-model="$timeago.locale">
        <option v-for="name of localeNames" :key="name" :value="name">{{ name }}</option>
      </select>
    </div>
    <div class="main">
      <input type="text" v-model="datetime1">
      <timeago :datetime="datetime1" :converter="converter"/>
      <hr>
      <input type="text" v-model="datetime2">
      <timeago
        :datetime="datetime2"
        :autoUpdate="autoUpdate ? 1 : 0"
        :converterOptions="{ includeSeconds: true }"
      />
      <input type="checkbox" v-model="autoUpdate"> Auto Update in every second
    </div>
  </div>
</template>

<script>
import format from 'date-fns/format'

export default {
  props: ['localeNames'],

  data() {
    return {
      autoUpdate: false,
      datetime1: '2022-02-12',
      datetime2: format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
      converter: undefined
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>

<style scoped>
.header {
  background: #f9f9f9;
  padding: 10px;
}

.main {
  padding: 10px;
}
</style>
