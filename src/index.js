const promise = new Promise((resolve, reject) => {
    resolve([])
})

promise.then((res) => {
    console.log('ggggggggggg', res.includes(1))
})