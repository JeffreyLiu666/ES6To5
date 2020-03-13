const path = require('path')
const util = require('./util')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

let webpackConfig = {
    entry: util.entries(),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].min.js',
        // 由于webpack直接打包是没模块名的，所以需要用library添加模块名使其能够调用
        // library: '',
        libraryTarget: 'umd'
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