const webpack = require('webpack');
const helpers = require('./helpers');

module.exports = {
    devtool: 'inline-source-map',
    module: {
        rules: [
            /**
             * tslint
             */
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {/* Loader options go here */}
            },

            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                use: [{
                    loader: 'istanbul-instrumenter-loader',
                    query: {
                        esModules: true
                    }
                }, 'awesome-typescript-loader', 'angular2-template-loader'],
                include: helpers.root('app'),
                exclude: [/node_modules/]
            },

            /**
             * To string and css loader support for *.css files (from Angular components)
             * Returns file content as string
             *
             */
            {
                test: /\.css$/,
                use: ['to-string-loader', 'css-loader'],
            },

            /**
             * To string and sass loader support for *.scss files (from Angular components)
             * Returns compiled css content as string
             *
             */
            {
                test: /\.scss$/,
                exclude: [helpers.root('./app/style.scss'), helpers.root('./app/styles')],
                use: ['to-string-loader', 'css-loader', 'sass-loader'],
            },

            /**
             * global style
             */
            /*{
             test: /\.scss$/,
             include: [helpers.root('./app/style.scss'), helpers.root('./app/styles')],
             use: ['style-loader', 'css-loader', 'sass-loader'],
             },*/
            {
                test: /\.scss$/,
                include: [helpers.root('./app/style.scss'), helpers.root('./app/styles')],
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

            /**
             * html use raw-loader
             */
            {
                test: /\.html/,
                loader: 'raw-loader'
            }
        ],

    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /(.+)?angular(\\|\/)core(.+)?/,
            helpers.root('./app'), // location of your src
            {} // a map of your routes
        ),
    ],
    // watch: true,
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            '~': helpers.root('app')
        }
    },
};
