<style>
  .people {
    margin-top: 20px;
  }
  .person {
    font-family: Helvetica;
    font-size: 1.4rem;
    & .name {
      width: 100px;
      display: inline-block;
    }
    & .meta {
      display: inline-block;
    }
  }
  .timeago {
    color: #999;
  }
</style>

<template>
  <div class="app">
    <select @change="handleChange">
      <option :value="lang" v-for="lang in langs" :selected="lang === currentLang">
        {{ lang }}
      </option>
    </select>
    <div class="people">
      <div class="person" v-for="person in people">
        <span class="name">{{ person.name }}</span>
        <div class="meta">
          was born at <timeago :locale="currentLang" class="timeago" :since="person.birth"></timeago>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import qs from './qs'

  const now = new Date().getTime()
  const people = [
    {
      name: 'egoist',
      birth: now - 60000
    },
    {
      name: 'chelly',
      birth: now - 60000 * 22
    },
    {
      name: 'aimer',
      birth: now - 60000 * 102
    }
  ]

  export default {
    data() {
      return {
        people,
        currentLang: qs().lang || 'en-US',
        langs: [
          'en-US', 'zh-CN', 'zh-TW'
        ]
      }
    },
    methods: {
      handleChange(e) {
        this.currentLang = e.target.value
      }
    }
  }
</script>
