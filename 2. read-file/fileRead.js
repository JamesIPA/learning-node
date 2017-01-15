const fs = require('fs')

//Non-blocking async printing readme to console.log
fs.readFile('README.md', 'utf-8', function(err, content){
    if (err){
        console.log("An error occured during file reading...")
        return console.log(err)
    }
    console.log(content)
})
