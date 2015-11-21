'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    cache: true,
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, 'src/main.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: 'src/index.tpl.html',
        inject: 'body',
        filename: 'index.html'
        }),
        new webpack.ProvidePlugin({
            _ : 'lodash',
            $ : 'jquery',
            React: 'react',
            ReactDOM : 'react-dom'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("bootstrap-and-customizations.css"),
        new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
        '__DEV__': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    module: {
        loaders: [
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            { test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded" },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml"
            },{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel'
            }, {
            test: /\.json?$/,
            loader: 'json'
            },{
                test: /\.scss$/,
                loader: 'style!css!sass'
            },{
            test: /\.css$/,
            loader: 'style!css'
            },{
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    _hotPort: 8000
};
