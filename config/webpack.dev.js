const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const helpers = require('./helpers');

const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev
const DEV_SERVER_PORT = 8084;

module.exports = function() {
    const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
    
    return webpackMerge(commonConfig({ env: ENV }), {
        output: {
            filename: '[name].bundle.js',
        },
        // Enable sourcemaps for debugging webpack's output.
        devtool: 'source-map',
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: ['.ts', '.tsx', '.js', '.json']
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin({
                // options
            }),

            // Workaround for angular/angular#11580
            new webpack.ContextReplacementPlugin(
                // The (\\|\/) piece accounts for path separators in *nix and Windows
                /(.+)?angular(\\|\/)core(.+)?/,
                helpers.root('./app'), // location of your src
                {} // a map of your routes
            ),
        ],
        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        externals: {
            // 'react': 'React',
            // 'react-dom': 'ReactDOM'
        },
        devServer: {
            // host: '0.0.0.0',
            port: DEV_SERVER_PORT,
            historyApiFallback: true,
            hot: true,
            overlay: true
        }
    })
};
