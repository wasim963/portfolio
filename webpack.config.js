const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { alias } = require('./webpack.config.extra');
const NodeEnv = process.env.NODE_ENV;

module.exports = {
    entry: [
        './src/scss/app.style.scss',
        path.join( __dirname, 'src', 'index.js' )
    ],
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'js/[name][contenthash].js',
        clean: true
    },
    mode: NodeEnv,
    devServer: {
        static: {
            directory: path.resolve( __dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        liveReload: true,
        compress: true,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss'],

        // module aliases
        alias: alias
    },
    devtool: (NodeEnv === 'development') ? 'source-map' : false,
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
                test: /\.(jpg|png|jpeg)$/,
                type: 'asset/resource'
            },
            {   
                // Asset Type - Inline - For small files data-uri like svg images 
                // browser doesn't need to make http request fetch asset
                test: /\.(jpg|png|jpeg)$/,
                type: 'asset/inline'
            },
            {
                // General Asset Type - if asset is less than or equal to 8KB then it is inline type
                // else it is resource type by default 
                test: /\.(jpg|jpeg|png)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: { // condition which decides an asset is inline type or resource type
                        // if asset size <= 3KB then inline else resource
                        maxSize: 3 * 1024 // 3 kilobytes
                    }
                }
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