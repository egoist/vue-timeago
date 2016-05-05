<style>
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
  <div class="repos">
    <div class="repo" v-for="repo in repos">
      <a class="name" :href="repo.html_url">{{ repo.full_name  }}</a>
      <div class="meta">
        is created at <span class="timeago">{{ repo.created_at | timeago }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import repos from './repos.json'

  export default {
    data() {
      return {
        repos
      }
    }
  }
</script>
