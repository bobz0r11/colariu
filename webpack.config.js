const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
        }),
        new FaviconsWebpackPlugin({
            logo: './public/assets/favicon.png',
            inject: false,
        }),
    ],
    devServer: {
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader",
                options: { limit: false },
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules|\.d\.ts$/,
            },
        ],
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".d.ts"],
    }
};