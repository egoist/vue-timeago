module.exports = (options, req) => ({
  entry: 'example',
  dist: 'dist-demo',
  homepage: '/vue-timeago/',
  postcss: [
    require('postcss-nested')
  ]
})
