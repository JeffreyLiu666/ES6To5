const promise = new Promise((resolve, reject) => {
    resolve(1)
})

promise.then((res) => {
    console.log(res)
})