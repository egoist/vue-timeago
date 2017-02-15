module.exports = (options, req) => ({
  entry: 'example',
  dist: 'dist-demo',
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
