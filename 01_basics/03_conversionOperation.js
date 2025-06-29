let score = "28abc"

//console.log(typeof score)
//console.log(typeof(score)) //2 different way of know the type of variable

let valueInNumber = Number(score) //converting string to number
//console.log(typeof valueInNumber)
//console.log(valueInNumber) // the ans will be NaN coz of "28abc" is not pure number. conversion will happen but the output will be NaN (is a specail type)

/* if the variable value is Null then the conversion will happen to number but the output will be
object
object
number
0

if the variable value is undefined the output will be
undefined
undefined
number
NaN

if variable value is true(boolean) the output will be
boolean
boolean
number
1 => means true

"28" => 28
"28abc" => NaN
true => 1
undefined => NaN
Null => 0
*/

let bol = ""
let random = Boolean(bol)
//console.log(random)

/*
"" => false
"Tanmay" => true
1=> true 0 => false
*/

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)