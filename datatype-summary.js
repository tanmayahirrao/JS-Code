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
