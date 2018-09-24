const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const WebpackManifestPlugin = require('webpack-manifest-plugin');
// const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/'
  },
  // devtool: 'cheap-source-map',
  module: {
  },
  // devServer: {
  //   contentBase: 'dist',
  //   hot: true
  // },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    // new WebpackManifestPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'Output Management'
    // }),
    // new webpack.HotModuleReplacementPlugin()
  ]
}
