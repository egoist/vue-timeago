module.exports = {
  entry: 'example/index.js',
  output: {
    dir: 'example/dist',
    publicUrl: '/'
  },
  chainWebpack(config) {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('markdown-loader')
      .loader(require.resolve('./markdown-loader'))
  }
}
