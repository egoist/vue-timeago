import { Config } from 'bili'

const config: Config = {
  input: 'src/index.js',
  output: {
    moduleName: 'VueTimeago',
    format: ['esm', 'umd', 'cjs'],
    fileName({ format }, defaultFileName) {
      if (format === 'cjs') {
        return 'vue-timeago.cjs.js'
      }
      if (format === 'umd') {
        return 'vue-timeago.js'
      }
      if (format === 'esm') {
        return 'vue-timeago.es.js'
      }
      return defaultFileName
    },
    sourceMapExcludeSources: true
  },
  babel: {
    minimal: true
  },
  extendConfig(config, { format }) {
    if (format === 'umd') {
      config.output.minify = true
      config.env = Object.assign({}, config.env, {
        NODE_ENV: 'production'
      })
    }
    return config
  }
}

export default config
