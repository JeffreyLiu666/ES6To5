const config = {
    presets: [
        ['@babel/preset-env', {
            useBuiltIns: 'usage',
            corejs: 2
        }]
    ],
    // plugins: [
    //     ['@babel/plugin-transform-runtime', {
    //         corejs: 2
    //     }]
    // ]
}

module.exports = config