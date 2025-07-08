// Primitive Datatypes (Call by Value)
// types: String, Number, Boolean, null, undefined, Symbol, BigInt

const val = 123
const val1 = 55.3
const val2 = false
const val3 = null
let val4

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId)

const bigNumber = 1232746238492374234249723497n //BigInt

// Reference Datatype (Non Primitive)
// Array, Objects, Functions 
//(master Objects and webEvents or BrowserEvents you will become master of JS)

const heros = ["Superman", "Ironman", "Spiderman", "Hulk"]
const myObj = {
    name: 'Tanmay Ahirrao',
    age: 25,
}

const myFunction = function () { // you can store funtion in variable in JS 
    console.log('Hello World')
}

console.log(typeof heros)

// JS is Statically typed language or Dynamically typed language? =>


//    Undefined -> 'undefined'
//  Null -> 'object'
//  Boolean -> 'boolean'
//  Number -> 'number'
//  String -> 'string'
//  function -> 'function' (object function)
//  Array -> object (function object)
//  Symbol -> 'symbol'




//++++++++++++++++++++++++  Memories  +++++++++++++++++++++++++++++++++++++++++

// 1. Stack Memory
// 2. Heap Memory

// Stack (Primitive) - when you declare a variable here, you get a copy of that variable
// Heap (Non Primitive) - when you declare a object or anything you get reference of original value


//Example of Stack Memory
let myName = "Tanmay"
let schoolName = myName
schoolName = "Tanu"

console.log(myName)
console.log(schoolName)

//Example of Heap Memory
let userOne = {
    email: "tanny@gmail.com",
    rollNo: 25,
}

let userTwo = userOne

userTwo.email = "tanny28@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)