module.exports = (options, req) => ({
  entry: 'example',
  dist: 'dist-demo',
  html: {
    title: 'Vue Timeago'
  },
  postcss: [
    require('postcss-nested')
  ],
  webpack: {
    output: {
      publicPath: '/vue-timeago/'
    }
  }
})
