const path = require("path");
const webpack = require("webpack");

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
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    optimization:{
        // minimize the size of JS
        // speed up the load time of web
        minimize: true,
    },
    plugins:[
        new webpack.DefinePlugin({
            "process.env":{
                // This has effect on the react lib size
                NODE_ENV: JSON.stringify("development"),
            },
        }),
    ],
}