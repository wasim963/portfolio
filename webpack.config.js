const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { alias } = require('./webpack.config.extra');

module.exports = {
    entry: [
        './src/scss/app.style.scss',
        path.join( __dirname, 'src', 'index.js' )
    ],
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: '[name][contenthash].js',
        clean: true
    },
    mode: 'development',
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
    devtool: 'source-map',
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
                use: [ 'style-loader', 'css-loader', 'sass-loader' ],
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
                    dataUrlCondition: { // condition which decides an asset is inline type or resorce type
                        // if asset size <= 3KB then inline else resourec
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
            filename: 'css/style.css'
        } )
    ]
}