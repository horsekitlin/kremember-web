var path = require('path');
var webpack = require('webpack');
var websetting = require('./config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var nodeModulePath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public');


var config = {
  devtool: 'eval-source-map',
  src : ['webpack-dev-server/client?http://localhost:8080']
};

config.entry= [
    './src/index.js'
];

config.output= {
    path: path.join(__dirname, "public"),
    filename: 'js/[name].js',
};

config.module = {};
config.module.loaders= [
  {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    exclude: [nodeModulePath]
  },
  {
    test: /\.css$/,
    loader: 'style!css'
  },
  {
    test: /\.scss$/,
    loader: 'style!css!sass'
  },
  {
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    loader: 'url-loader?limit=100000'
  }
];

config.plugins= [
    new webpack.ProvidePlugin({
            $ : 'jquery',
            jquery : 'jquery',
            _ : 'lodash',
            React: 'react',
            Promise : 'bluebird',
            ReactDOM : 'react-dom'
    }),
    new webpack.HotModuleReplacementPlugin()
];

module.exports = config;
