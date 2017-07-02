/**
 * Created by weijianli on 2017/6/6.
 */
var path = require('path');

module.exports = {
  entry: './example/example.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'example/dist')
  },
  devtool: 'inline-source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-runtime']
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};