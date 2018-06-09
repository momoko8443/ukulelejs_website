const path = require('path');
const webpack = require("webpack");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  entry: './main.js',
  devtool: 'source-map',
  devServer: {
    contentBase: '.'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.ContextReplacementPlugin(
      /highlight\.js\/lib\/languages$/,
      new RegExp(`^./(${['javascript'].join('|')})$`)
    ),
    new BundleAnalyzerPlugin(),
    //new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ]

};