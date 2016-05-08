<style>
  .repos {
    margin-top: 20px;
  }
  .repo {
    font-family: Helvetica;
    font-size: 1.4rem;
    & .name {
      width: 350px;
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
    <div class="repos">
      <div class="repo" v-for="repo in repos">
        <a class="name" :href="repo.html_url">{{ repo.full_name  }}</a>
        <div class="meta">
          is created at <span class="timeago">{{ repo.created_at | timeago }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import repos from './repos.json'
  import qs from './qs'

  export default {
    data() {
      return {
        repos,
        currentLang: qs().lang || navigator.language,
        langs: [
          'en-US', 'zh-CN', 'zh-TW'
        ]
      }
    },
    methods: {
      handleChange(e) {
        location.search = `?lang=${e.target.value}`
      }
    }
  }
</script>
