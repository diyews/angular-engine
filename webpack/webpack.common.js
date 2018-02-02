/**
 * Created by diyews on 2017/12/20.
 *
 * Version 1.0.0
 */
const DefinePlugin = require('webpack/lib/DefinePlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const helpers = require('./helpers');

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function (options) {
    const isProd = options.env === 'production';
    const METADATA = Object.assign({}, options.metadata || {});
    
    const entry = {
        polyfills: './app/polyfills.browser.ts',
        main:      './app/index.ts',
        inline:     './app/style.scss'
    };
    
    return {
        /**
         * The entry point for the bundle
         * Our Angular.js app
         *
         * See: http://webpack.github.io/docs/configuration.html#entry
         */
        entry: entry,
        /**
         * Options affecting the resolving of modules.
         *
         * See: http://webpack.github.io/docs/configuration.html#resolve
         */
        resolve: {
            /**
             * An array of extensions that should be used to resolve modules.
             *
             * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
             */
            extensions: ['.ts', '.js', '.json'],
        },
        
        /**
         * Options affecting the normal modules.
         *
         * See: http://webpack.github.io/docs/configuration.html#module
         */
        module: {
            
            rules: [
                {
                    test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                    use: ['@angular-devkit/build-optimizer/webpack-loader', {
                        loader: '@ngtools/webpack',
                        options: {
                            tsConfigPath: './tsconfig.json'
                        }
                    }]
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
                {
                    test: /\.scss$/,
                    include: [helpers.root('./app/style.scss'), helpers.root('./app/styles')],
                    use: isProd
                        ? /* production */ ExtractTextPlugin.extract({
                            fallback: 'style-loader',
                            use: ['css-loader', 'sass-loader']
                        })
                        : /* development */ ['style-loader', 'css-loader', 'sass-loader']
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
        
        /**
         * Include polyfills or mocks for various node stuff
         * Description: Node configuration
         *
         * See: https://webpack.github.io/docs/configuration.html#node
         */
        node: {
            global: true,
            crypto: 'empty',
            process: true,
            module: false,
            clearImmediate: false,
            setImmediate: false
        },
        /**
         * Add additional plugins to the compiler.
         *
         * See: http://webpack.github.io/docs/configuration.html#plugins
         */
        plugins: [
            /**
             * Plugin: DefinePlugin
             * Description: Define free variables.
             * Useful for having development builds with debug logging or adding global constants.
             *
             * Environment helpers
             *
             * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
             */
            // NOTE: when adding more properties make sure you include them in custom-typings.d.ts
            new DefinePlugin({
                'ENV': JSON.stringify(METADATA.ENV),
                'HMR': METADATA.HMR,
                'AOT': METADATA.AOT,
                'process.env.ENV': JSON.stringify(METADATA.ENV),
                'process.env.NODE_ENV': JSON.stringify(METADATA.ENV),
                'process.env.HMR': METADATA.HMR
            }),

            /**
             * Plugin: CommonsChunkPlugin
             * Description: Shares common code between the pages.
             * It identifies common modules and put them into a commons chunk.
             *
             * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
             * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
             */
            new CommonsChunkPlugin({
                name: 'polyfills',
                chunks: ['polyfills']
            }),
            new CommonsChunkPlugin({
                name: 'main',
                async: 'common',
                children: true,
                minChunks: 2
            }),
            new CommonsChunkPlugin({
                name: 'vendor',
                chunks: ['main'],
                minChunks(module, count) {
                    const context = module.context;
                    // console.log(context);
                    // const targets = ['(\\|/)@angular(\\|/)'];
                    // return context && context.indexOf('node_modules') >= 0 && targets.filter(t => new RegExp('(\\\\|/)' + '@angular' + '(\\\\|/)', 'i').test(context));
                    return context && context.indexOf('node_modules') >= 0;
                }
            }),
            new CommonsChunkPlugin({
                name: 'vendor',
                chunks: ['vendor', 'polyfills']
            }),
            new CommonsChunkPlugin({
                minChunks: Infinity,
                name: 'inline'
            }),
    
            // generate index.html
            new HtmlWebpackPlugin({
                template: helpers.root('app/index.html'),
                chunksSortMode(a, b) {
                    const order = ['inline', 'vendor', 'polyfills', 'main'];
                    return order.indexOf(a.names[0]) - order.indexOf(b.names[0]);
                }
            }),
            
            /**
             * copy assets
             */
            /*new CopyWebpackPlugin([
             { from: helpers.root('app/assets') }
             ])*/
        ]
    };
};
