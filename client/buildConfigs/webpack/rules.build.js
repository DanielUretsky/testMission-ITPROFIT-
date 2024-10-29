const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const rulesBuild = ({ mode }) => {
    return [
        {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'assets/images/[name][ext]',
            }
        },
        {
            test: /\.(woff|woff2|ttf|otf)$/,
            type: 'asset/resource',
            generator: {
                filename: 'assets/fonts/[name][ext]',
            },
        }
    ]
}

module.exports = { rulesBuild }