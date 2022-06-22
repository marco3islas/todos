const path                 = require('path');
const HtmlWebPackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin           = require('copy-webpack-plugin');

module.exports = {

   entry: './src/index',
   mode: 'development',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                // buscar el archivo html
                test: /\.html$/,
                // manda a llamar al paquete html loader
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
                
            },
            {
                test: /\.(png|jpe?g|gif|bmp|webp)$/,
                loader: 'file-loader'
            }
        ]
    },
    stats: {
        children: true,
    },
    optimization: {},

    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi WebPack App',
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false,

        }),
        new CopyPlugin({ 
            patterns: [
                { from: 'src/assets/', to: 'assets/' }
            ]  
        })
    ],

}
