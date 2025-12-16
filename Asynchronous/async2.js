function timeout() {
    console.log("Click the button")
}

console.log("Hi")

setTimeout(timeout, 1000) // I/O intensive task

console.log("Welcome to Async")

let c = 0

for (let i = 0; i<10000000000; i++) { //CPU intensive task
    c = c + 1
}

console.log("Expensive operation done")

/*
Option 1 - correct
    - Hi
    - Welcome to Async
    - Expensive operation done
    - Click the button

Option 2 - incorrect
    - Hi
    - Welcome to Async
    - Click the button
    - Expensive operation done
*/