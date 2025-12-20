/*
Create promisified version of fs.readFile, fs.writeFile, cleanFile

hint -
cleanFile(a.txt).then(function() {
    console.log("file is cleaned")
})
 */

//--------------------------------------------------------------------------------
// promisified version of read file
const fs = require("fs")
function readTheFile(sendTheFinalValueHere) {
    fs.readFile("a.txt", "utf-8", function(err, data) {
        if(err) {
            sendTheFinalValueHere(err)
        }
        else{
            sendTheFinalValueHere(data)
        }
    })
}

function fileRead() {
    return new Promise(readTheFile)
}

const p = fileRead()

function callback(contents) {
    console.log(contents)
}

p.then(callback)