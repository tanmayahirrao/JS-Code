// class Promise2 {
//     constructor(fn) {
//         this.fn = fn
//         this.fn(()=>{
//             this.resolve
//         })
//     }

//     then(callback) {
//         this.resolve = callback
//     }
// }


// //console.log("log: ------ start of the code ------")
// function setTheTime(resolve) {
//     //console.log("log: setTheTime function called")
//     setTimeout(function(){
//         console.log("log: callback based setTimeout completed")
//         resolve()
//     }, 3000)
// }

// function setTimeoutPromisified() {
//     console.log("log: setTimeoutPromisified called")
//     return new Promise2(setTheTime)
// }

// const p = setTimeoutPromisified()

// function callback() {
//     console.log("log: timer stopped")
// }
// p.then(callback)

// //console.log("log: ------ end of the code ------")


//----------------------------------------------------------------------------------------------

// function setTimeoutPromisified(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, ms)
//     })
// }

// function callback() {
//     console.log("callback called")
// }

// setTimeoutPromisified(3000).then(callback)


//----------------------------------------------------------------------------------------

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function callback() {
    console.log("callback called")
}

setTimeoutPromisified(3000).then(callback)