const path = require("path");
const webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    // determine the entry javascript file (relative path)
    entry: "./src/index.js",
    // determing the output script path and name
    output: {
        path: path.resolve(__dirname,"./static/frontend"),
        filename: "[name].js",
    },
    module: {
        rules:[
            {
                test:/\.css$/,
                use:[
                    { loader: 'style-loader' },
                    { loader: 'css-loader',
                      options: {
                          modules:true,
                          import: true
                      }},
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                  name: '[path][name].[hash].[ext]',
                },
            },
        ],
    },
    optimization:{
        // minimize the size of JS
        // speed up the load time of web
        minimize: true,
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './templates/frontend/index.html'
        }),
        new webpack.DefinePlugin({
            "process.env":{
                // This has effect on the react lib size
                NODE_ENV: JSON.stringify("development"),
                REACT_APP_API_URL: JSON.stringify("http://localhost:8000")
            }
        }),
    ],
}