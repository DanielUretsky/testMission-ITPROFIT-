const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');

const pluginsBuild = ({ paths }) => {

    return [
        new HtmlWebpackPlugin({
            template: paths.public,
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: 'css/css[name].[contenthash].css',
            chunkFilename: 'css/css[name].[contenthash].css'
        }),
        new Dotenv()
    ]
}

module.exports = { pluginsBuild }