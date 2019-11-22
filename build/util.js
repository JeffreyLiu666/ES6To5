const path = require('path')
const glob = require('glob')
const SRC_PATH = path.resolve(__dirname, '../src')

exports.entries = function () {
    let entryFiles = glob.sync(SRC_PATH + '/*.js')
    let map = {}
    entryFiles.forEach(function (filePath) {
        let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        map[filename] = filePath
    })
    return map
}