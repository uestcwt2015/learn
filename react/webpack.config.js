const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const dev = process.env.NODE_ENV === 'development';
const prod = process.env.NODE_ENV === 'production';

const devtool = dev ? 'eval-source-map' : '';

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename:'[id][hash].js',
        publicPath:'/'
    },
    mode: process.env.NODE_ENV,
    devtool: devtool,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.sass']
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true
        }),
        new ProgressBarPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};

if(dev) {
    config.devServer = {
        host: 'localhost',
        port: 3000,
        inline: true,
        open: true,
        compress: true
    }
}

module.exports = config;
