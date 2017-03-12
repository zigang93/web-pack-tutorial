var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: 'dist',
    filename: './dist/app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Tutorial Project!!',
      minify: {
        collapseWhitespace : true
      },
      hash: true,
      template: './src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
    })
  ]
};
