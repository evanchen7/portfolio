'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: ['./app/index.js'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'app'),
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            filename: 'index.html',
            inject: 'body',
        }),
    ],
};
