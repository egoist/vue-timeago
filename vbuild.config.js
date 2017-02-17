module.exports = (options, req) => ({
  entry: 'example',
  dist: 'dist-demo',
  homepage: '/vue-timeago/',
  html: {
    title: 'Vue Timeago'
  },
  postcss: [
    require('postcss-nested')
  ]
})
