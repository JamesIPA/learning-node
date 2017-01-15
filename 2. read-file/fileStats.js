const fs = require('fs')

console.log("Reading file stats...")

Promise.all([
    stats('README.md'),
    stats('package.json'),
    stats('index.js')
])
.then((data) => console.log(data))
.catch((err) => console.log(err))

//non-blocking async function to display file stats to console.log
function stats (file){
    return new Promise((resolve, reject) => {
        fs.stat(file, (err, data) => {
            if (err){
                var error = {
                    "name": file,
                    "error": err
                }
                return reject(error)
            }

            var result = {
                "name": file,
                "data": data
            }

            resolve(result)
        })
    })
}
