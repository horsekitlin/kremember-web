'use strict';
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
    devtool: "source-map",
    entry: [
        path.join(__dirname, 'src/main.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name]-[hash].min.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
        template: 'src/index.tpl.html',
        inject: 'body',
        filename: 'index.html'
        }),
        new webpack.ProvidePlugin({
            _ : 'lodash',
            $ : 'jquery',
            jQuery : 'jquery',
            React: 'react',
            ReactDOM : 'react-dom'
        }),
        new ExtractTextPlugin('[name]-[hash].min.css'),
        new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false,
            screw_ie8: true
        }
        }),
        new StatsPlugin('webpack.stats.json', {
        source: false,
        modules: false
        }),
        new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        '__DEV__': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    module: {
        loaders: [
                { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
                { test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded" },
                { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
                { test: /\.gif$/, loader: "url-loader?mimetype=image/png" },
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
                    test: /\.(png|jpg|jpeg)$/,
                    loader: 'url-loader?limit=100000'
                }
        ]
    },
    postcss: [
        require('autoprefixer')
    ]
};
