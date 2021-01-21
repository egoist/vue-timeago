module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          resourceQuery: /blockType=readme/,
          loader: require.resolve('./example/vue-readme-loader')
        },
        { test: /\.flow$/, loader: 'ignore-loader' }
      ]
    }
  }
}
