const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    // rules: [
    //   {
    //     test: /\.css$/,
    //     use: [
    //       MiniCssExtractPlugin.loader,
    //
    //       'css-loader'
    //     ]
    //   },
    //   {
    //     test: /\.(png|jpg|jpeg|gif)$/,
    //     use: [
    //       {
    //         loader: 'url-loader',
    //         options: {
    //           limit: 10000
    //         }
    //       },
    //       {
    //         loader: 'image-webpack-loader',
    //         options: {
    //           mozjpeg: {
    //             progressive: true,
    //             quality: 65
    //           }
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     test: /\.(woff|woff2|eot|ttf|otf)$/,
    //     use: [
    //       'file-loader'
    //     ]
    //   }
    // ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
}
