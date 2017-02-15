module.exports = (options, req) => ({
  entry: 'example',
  dist: 'dist-demo',
  html: {
    title: 'Vue Timeago'
  },
  postcss: [
    req('autoprefixer')({
      browsers: ['last 4 versions', 'ie > 8']
    }),
    require('postcss-nested')
  ],
  webpack: {
    output: {
      publicPath: '/vue-timeago/'
    }
  }
})
