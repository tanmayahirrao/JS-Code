//below program will print Demo Function after 5 secs
// function waitFor5secs(resolve) { //wrapper on setTimeout()
//     setTimeout(resolve, 5000)
// }

// function demo() {
//     console.log("Demo Function")
// }

// waitFor5secs(demo)

//----------------------------------------------------------------
/*
Promise Class says it will take 1 function as an input and the 1st argument of that
function (resolve) whenever gets called it will call whatever is in .then()
 */

// function waitFor5secs(resolve) { //wrapper on setTimeout()
//     setTimeout(resolve, 5000)
// }

// function setTimeoutPromisified() {
//     return new Promise(waitFor5secs)
// }

// function main() {
//     console.log("main got callled")
// }

// setTimeoutPromisified().then(main) //promise approach
// setTimeout(main, 5000) //callback approach

//--------------------------------------------------------------------------------------------------------
//simple promise

function random() {

}

const p = new Promise(random) //promise pending (suppose to return you something eventually)
console.log(p)

//------------------------------------------------------------------------------------------------------------

function random(resolve) { //resolve is also a function
    setTimeout(resolve, 5000) // if you want to print result immediatly do resolve() instead of setTimeout()
}

const d = new Promise(random)

function callback() {
    console.log('callback called')
}
d.then(callback)
