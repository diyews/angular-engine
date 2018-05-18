/**
 * Created by diyews on 2017/12/20.
 *
 * Version 1.0.0
 */
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const helpers = require('./helpers');

const ENV = process.env.NODE_ENV;

module.exports = function () { /* ... */
    return webpackMerge(commonConfig({env: ENV, metadata: { ENV }}), {
        mode: 'production',
        output: {
            path: helpers.root('output'),
            filename: '[name].[chunkhash].bundle.js'
        },
        module: {
            rules: []
        },

        plugins: [
            new AngularCompilerPlugin({
                tsConfigPath: './tsconfig.json',
                entryModule: './app/app.module#AppModule',
                sourceMap: false
            }),
            
            new MiniCssExtractPlugin({ filename: 'style.[chunkhash].css' }),
    
            new UglifyJsPlugin(),

            new CleanWebpackPlugin(['output'], {root: helpers.root()}),
        ],
        node: {
            buffer: false
        }
    });
};
