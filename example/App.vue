<template>
  <div id="app">
    <github
      fill="white"
      slug="egoist/vue-timeago">
    </github>
    <header class="header">
      <div class="container">
        <h1 class="hero-heading">vue-timeago</h1>
        <h2 class="desc">A timeago component Vue.js</h2>
      </div>
    </header>
    <div class="container">
      <section>
        <div class="demo-header">
          <h2>Demos</h2>
          <div class="locale">
            <label>Demo Locale:</label>
            <select v-model="$timeago.locale">
              <option v-for="name of localeNames" :key="name" :value="name">{{ name }}</option>
            </select>
          </div>
        </div>

        <div class="example">
          <h3>Basic</h3>
          <div class="row">
            <div class="col-md">
              <div class="row">
                <div class="col-sm">
                  <h4>Date</h4>
                  <input type="text" v-model="datetime1">
                </div>
                <div class="col-sm">
                  <h4>Output</h4>
                  <timeago :datetime="datetime1"></timeago>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="code" v-html="example1"></div>
            </div>
          </div>
        </div>
        <div class="example">
          <h3>Auto Updating</h3>
          <div class="row">
            <div class="col-md">
              <div class="row">
                <div class="col-sm">
                  <h4>Date</h4>
                  <input type="text" v-model="datetime2">
                </div>
                <div class="col-sm">
                  <h4>Output</h4>
                  <timeago :datetime="datetime2" :auto-update="5" :converterOptions="{ includeSeconds: true }"></timeago>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="code" v-html="example2"></div>
            </div>
          </div>
        </div>
        <div class="example">
          <h3>Using a custom converter</h3>
          <div class="row">
            <div class="col-md">
              <div class="row">
                <div class="col-sm">
                  <h4>Date</h4>
                  <input type="text" v-model="datetime3">
                </div>
                <div class="col-sm">
                  <h4>Output</h4>
                  <timeago :datetime="datetime3" :converter="futurePastConverter"></timeago>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="code" v-html="example3"></div>
            </div>
          </div>
        </div>
        <div class="example">
          <h3>Override Global Locale</h3>
          <div class="row">
            <div class="col-md">
              <div class="row">
                <div class="col-sm">
                  <h4>Date</h4>
                  <input type="text" v-model="datetime4">
                </div>
                <div class="col-sm">
                  <h4>Output</h4>
                  <timeago :datetime="datetime4" locale="es"></timeago>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="code" v-html="example4"></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Configuration</h2>
        <div class="row">
          <div class="col-md">
            <div v-html="config"></div>
          </div>
          <div class="col-md">
            <div class="code" v-html="configExample"></div>
          </div>
        </div>
      </section>
    </div>
    <footer class="footer">
      <div class="container">
        &copy; {{ year }} Brought by <a href="https://github.com/egoist">EGOIST</a>
      </div>
    </footer>
  </div>
</template>


<script>
  import format from 'date-fns/format'
  import Github from 'vue-github-badge'
  import configExample from './md/config/config-example.md';
  import config from './md/config/config.md';
  import example1 from './md/examples/1.md';
  import example2 from './md/examples/2.md';
  import example3 from './md/examples/3.md';
  import example4 from './md/examples/4.md';


  export default {
    props: ['localeNames'],

    data() {
      return {
        autoUpdate: false,
        datetime1: '2022-02-12',
        datetime2: format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
        datetime3: '2022-02-12',
        datetime4: '2020-01-01',
        converter: undefined,
        year: new Date().getFullYear(),
        config,
        configExample,
        example1,
        example2,
        example3,
        example4,
      }
    },
    components: {
      Github
    },
    methods: {
      futurePastConverter(date, locale, options) {
        return new Date(date) > Date.now()
          ? 'Date is Future'
          : 'Date is Past'
      }
    }
  }
</script>

<style src="prismjs/themes/prism.css"></style>
<style src="flexboxgrid/dist/flexboxgrid.min.css"></style>

<style>
  body {
    margin: 0;
    font: 14px/1.4 'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 10px;
  }

  pre {
    margin: 0;
    font-size: 85%;
    line-height: 1.45;
  }

  pre code {
    overflow: scroll;
    word-wrap: normal;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  }
</style>

<style scoped>
  .header {
    background: linear-gradient(90deg, #5733ea, #4894ff 70%, #a5bcff);
    padding: 40px 0;
  }

  .desc {
    color: white;
    font-weight: 500;
  }

  .hero-heading {
    color: #7dffc3;
    margin: 0;
    font-size: 2rem;
    font-weight: 600;
    background: -webkit-linear-gradient(135deg, #fff9b0, #7dffc3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .demo-header {
    display: flex;
  }

  .demo-header h2 {
    flex-grow: 1;
  }

  .demo-header .locale {
    padding-top: 1.75em;
  }

  .example {
    padding-bottom: 1em;
  }

  .example h4 {
    margin-top: 0;
    margin-bottom: 0.5em;
  }

  .example input {
    display: block;
    width: 100%;
    padding: 0.5em;
  }

  .example time {
    font-size: 1.25em;
  }

  .code {
    border: 1px solid #ebebeb;
    padding: 1em;
    border-radius: 0.25em;
  }

  .footer {
    margin: 40px 0;
    font-size: 1rem
  }
</style>
