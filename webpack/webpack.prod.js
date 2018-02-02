/**
 * Created by diyews on 2017/12/20.
 *
 * Version 1.0.0
 */
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const helpers = require('./helpers');

const env = process.env.NODE_ENV;

module.exports = function () { /* ... */
    return webpackMerge(commonConfig({env, metadata: { ENV: env }}), {
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
                sourceMap: true
            }),

            new CleanWebpackPlugin(['output'], {root: helpers.root()}),

            // production bundle analyze
            // new BundleAnalyzerPlugin({ analyzerPort: 8085, openAnalyzer: false })
        ]
    });
};
