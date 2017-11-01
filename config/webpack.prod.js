var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

console.log('@@@@@@PROD@@@@@@@@')

module.exports = webpackMerge(commonConfig, {
    devtool: 'scource',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false 
            },
            output: {
                comments: false
            },
            sourceMap: false
        }),
        new ExtractTextPlugin('[name].hash.css'),
        new webpack.LoaderOptionsPlugin({
            htmlLoader: {
                minimize: false
            }
        })
    ]
});