const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'uku-router.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  mode: 'development',
  module:{
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      }
    ]
  }
};