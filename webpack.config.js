const path = require('path');
const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const sassExport = require('sass-export');

/*=========== WEBPACK EXTRA CONFIG ===========*/

// extra webpack configuration
const { alias } = require('./webpack.config.extra');

/**
 * @desc Set valid node environment variable
 */
const NodeEnv = process.env.NODE_ENV;

/**
 * @desc Set build platform based on environment variable
 */
const PLATFORM = process.env.PLATFORM ? process.env.PLATFORM : 'default';

/**
 * @desc Name of the theme.
 */
const THEME = process.env.THEME ? 'THEME': 'main';

/**
 * @desc SASS environment `.scss` file and compile global variables for JS environment
 */
const SASS_ENV_FOLDER_NAME = THEME;
const SASS_ENV_FILE_PATH = `./src/scss/themes/${ SASS_ENV_FOLDER_NAME }/${ PLATFORM }.theme.scss`;

// { variables: [ { name, value, compiledValue }, ... ], ... }
const SASS_THEME = sassExport.exporter( {
    inputFiles: [ SASS_ENV_FILE_PATH ],
    includePaths: [ './src/scss/themes/' + SASS_ENV_FOLDER_NAME ]
}).getStructured().variables;

// return an array of duplets [ [key, value], [key, value] ]
const sassThemePairs = SASS_THEME.map( ( variable ) => {
    const { name, compiledValue } = variable;

    // remove `$` prefix from the variable name
    return [ name.slice( 1 ), compiledValue ];
})


module.exports = {
    entry: [
        './src/scss/app.style.scss',
        path.join( __dirname, 'src', 'index.js' )
    ],
    output: {
        path: path.resolve( __dirname, 'build' ),
        filename: 'js/[name][contenthash].js',
        clean: true,
        publicPath: ''
    },
    mode: NodeEnv,
    devServer: {
        static: {
            directory: path.resolve( __dirname, 'build')
        },
        port: 3000,
        open: true,
        hot: true,
        liveReload: true,
        compress: true,
        historyApiFallback: true,
        devMiddleware: {
            index: 'index.html',
            writeToDisk: false
        }
    },
    resolve: {
        extensions: [ '*','.js', '.jsx', '.json', '.scss'],

        // module aliases
        alias: alias
    },
    devtool: (NodeEnv === 'development') ? 'inline-source-map' : 'source-map',
    module: {
        rules:[
            {
                test: /\.?(js|jsx)$/i,
                exclude: '/node_modules',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env', '@babel/preset-react' ]
                    }
                },
            },
            {

                test: /\.s?css$/i,
                use: [ NodeEnv === 'production' ?  MiniCSSExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader' ],
            },
            /**
             * Assets - Images, svg, gif etc
             */
            {
                // Asset Type - resource - for large files like images
                test: /\.(jpg|png|jpeg|webp)$/,
                type: 'asset/resource'
            },
            {   
                // Asset Type - Inline - For small files data-uri like svg images 
                // browser doesn't need to make http request fetch asset
                test: /\.(jpg|png|jpeg|webp)$/,
                type: 'asset/inline'
            },
            {
                // General Asset Type - if asset is less than or equal to 8KB then it is inline type
                // else it is resource type by default 
                test: /\.(jpg|jpeg|png|webp)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: { // condition which decides an asset is inline type or resource type
                        // if asset size <= 3KB then inline else resource
                        maxSize: 3 * 1024 // 3 kilobytes
                    }
                }
            },
            {
                test: /\.(gif|pdf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                        name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin( {
            title: 'Portfolio',
            template: path.join( __dirname, 'src', 'index.html' )
        } ),

        new MiniCSSExtractPlugin( {
            filename: 'css/styles.css'
        }),
        

        new webpack.DefinePlugin( {
            // provide SCSS global variables in JavaScript
            THEME: JSON.stringify( sassThemePairs.reduce((acc, current) => {
                acc[ current[0]] = current[1];
                return acc;
            }, {} ) )
        } )
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    optimization: {
        splitChunks: {
          chunks: 'all'
        }
    }
}