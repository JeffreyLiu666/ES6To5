const path = require('path')
const util = require('./util')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

let webpackConfig = {
    entry: util.entries(),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, '../src')]
            }
        ]
    },
    // optimization: {
    //     minimizer: []
    // },
    plugins: [
        new CleanWebpackPlugin()
    ]
}

module.exports = webpackConfig