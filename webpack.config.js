const path = require('path');
const webpack = require("webpack");
module.exports = {
  entry: './main.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '.'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  /* resolve: {
    alias: {
      $: "./bower_components/jquery/dist/jquery.min.js",
      jquery: "./bower_components/jquery/dist/jquery.min.js",
      bootstrap:  "./bower_components/bootstrap/dist/js/bootstrap.js"
    }
  },  */
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]

};