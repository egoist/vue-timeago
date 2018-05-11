<template>
  <div id="app">
    <div class="header">
      <select v-model="locale">
        <option value="en">en</option>
        <option
          v-for="name of localeNames"
          :key="name"
          :value="name">
          {{ name }}
        </option>
      </select>
    </div>
    <div class="main">
      <timeago :since="new Date('2011-02-12')" :locale="locale" />
      <hr>
      <timeago :since="new Date()" :locale="locale" :autoUpdate="1" :includeSeconds="true" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['localeNames'],

  data() {
    return {
      locale: 'en'
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
