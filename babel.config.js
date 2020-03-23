const config = {
    // @babel/preset-env默认提供了ES新语法转换
    // 在项目中可以使用该方法，不考虑全局污染可以减少代码量
    // presets: [
    //     ['@babel/preset-env', {
    //         useBuiltIns: 'usage',
    //         corejs: 3
    //     }]
    // ],

    // 在第三方插件等地方用下面的组合形式，可以避免全局污染，但是增加代码量
    presets: [
        ['@babel/preset-env']
    ],
    plugins: [
        ['@babel/plugin-transform-runtime', {
            corejs: 3
        }]
    ]
}

module.exports = config