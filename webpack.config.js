const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        bundle: path.join( __dirname, 'src', 'index.js' )
    },
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
        extensions: ['.js', '.jsx', '.json'],
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

                test: /\.css$/i,
                use: [ 'style-loader', 'css-loader', 'postcss-loader' ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin( {
            title: 'Portfolio',
            template: path.join( __dirname, 'src', 'index.html' )
        } )
    ]
}