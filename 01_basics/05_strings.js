const name = "Tanmay"
const repoCount = 50

//console.log("Hello my name is " + name + " and my repo count is " + repoCount) not recommended approach

//instead do this
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //we use backticks (``) here and it is much more readable and it is called string interpolation


const gameName = new String('Valorant-GOT-efootball-f1') //this is one more way of declare string in variable. there is not major difference in 1st and 2nd method
// we are calling object of string

//console.log(gameName[0])
//console.log(gameName.length)
//console.log(gameName.toUpperCase()) //here the original value is not getting changed (stack and heap memory concept)
//console.log(gameName.charAt(4))
//console.log(gameName.indexOf('l'))

const newString = gameName.substring(0, 3) // you cant give negative values here. but if you give it will not give you errors but it will ignore it
console.log(newString)

const anotherString = gameName.slice(-8, 4) // you can give negative values in slice. if you give negative value so that it will start from end (last char)
console.log(anotherString)

const newStringOne = "   tanmay   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "www.tanmay.com/tanmay%20ahirrao"
console.log(url)
console.log(url.replace('%20', '-'))

console.log(url.includes('ahirrao'))

console.log(gameName.split('-')) // converting string into array by spliting. split has 2 arguments (seperator, limit) limit can be optional