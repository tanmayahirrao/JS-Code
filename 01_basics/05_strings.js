const name = "Tanmay"
const repoCount = 50

//console.log("Hello my name is " + name + " and my repo count is " + repoCount) not recommended approach

//instead do this
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //we use backticks (``) here and it is much more readable and it is called string interpolation


const gameName = new String('Valorant-GOT-efootball-f1') //this is one more way of declare string in variable. there is not major difference in 1st and 2nd method
// we are calling object of string

//-------------------------- String functions ----------------------------------------------------------
//console.log(gameName[0])
//console.log(gameName.length)
//console.log(gameName.toUpperCase()) //here the original value is not getting changed (stack and heap memory concept)
//console.log(gameName.charAt(4)) //(ES5 old version), does not support negative value. 
//console.log(gameName.indexOf('l'))

// const newString = gameName.substring(0, 3) // you cant give negative values here. but if you give it will not give you errors but it will ignore it
// console.log(newString)

// const anotherString = gameName.slice(-8, 4) // you can give negative values in slice. if you give negative value so that it will start from end (last char)
// console.log(anotherString)

// const newStringOne = "   tanmay   "
// console.log(newStringOne)
// console.log(newStringOne.trim())

// const url = "www.tanmay.com/tanmay%20ahirrao"
// console.log(url)
// console.log(url.replace('%20', '-'))

//includes()
// console.log(url.includes('ahirrao'))

//split()
// console.log(gameName.split('-')) // converting string into array by spliting. split has 2 arguments (seperator, limit) limit can be optional

//substring()
// console.log(gameName.substring(1, 3)) // (O/P - al) will return the part of the string from starting index to excluding end index
// console.log(gameName.substring(2)) // (O/P - lorant-GOT-efootball-f1) will return part of string if you dont provide end index it will print string front start index till the end

//at() (ES6+) - expects number value and returns a char at that index. accepts +ve and -ve value
const positiveChar = 5
const negativeChar = -5
console.log(gameName.at(positiveChar))
console.log(gameName.at(negativeChar))