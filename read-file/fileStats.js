const fs = require('fs')

console.log("Reading file stats...")
//non-blocking async function to display file stats to console.log
function stats (file){
    return new Promise((resolve, reject) => {
        fs.stat(file, (err, data) => {
            if (err)
                return reject(err)

        resolve(data)
        })
    })
}

Promise.all([
    stats('README.md'),
    stats('package.json'),
    stats('index.js')
])
.then((data) => console.log(data))
.catch((err) => console.log(err))
