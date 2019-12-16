const webpack = require('webpack');
const { join, resolve } = require('path');
const HTMLWebpackPlugin  = require('html-webpack-plugin');
//const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
//require('infinite-scroll');
require('es6-promise').polyfill();
//const{ axiosPlugin } = require('vue-axios-plugin');
module.exports= {
    entry: './src/index.js',
    output:{
        path: __dirname + '/dist',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.(scss)$/,
                use:[
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                    },
                    {
                        //interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader:'css-loader'
                    },
                    {
                        //loader for webpack to process css with postcss
                        loader: 'postcss-loader',
                        options: {
                            plugins: function(){
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader:'sass-loader'
                    }
                    
                ]
            } 
        ]
    },
    plugins:[
      
        //new axiosPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        //new FaviconsWebpackPlugin()
    ]
}; 