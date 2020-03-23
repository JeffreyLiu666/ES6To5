const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.conf')

webpack(webpackConfig, function (err, stats) {
    if (err) {
        console.log(err)
    }
})

