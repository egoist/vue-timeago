import {rollup} from 'rollup'
import babel from 'rollup-plugin-babel'

const env = process.env.BUILD_ENV
const dest = env === 'cjs' ? 'index.js' : 'index.umd.js'

export default {
  entry: './src/index.js',
  dest,
  plugins: [
    babel({
      presets: ['es2015-rollup'],
      include: 'src/**'
    })
  ],
  format: env,
  moduleName: 'VueTimeago'
}
