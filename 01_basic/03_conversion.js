let num = 33
let num2 = null
console.log(num)

let stringNumber = String(num)
console.log(typeof stringNumber)

let nullNum2 = Number(num2)
console.log(typeof nullNum2)
console.table([num2,nullNum2])

let undefNum = undefined
let undefNumber = Number(undefNum)
console.log(typeof undefNumber)
console.table([undefNum,undefNumber])


// let someNum = "33abc" - NaN
let someNum = "33"
let someNumber = Number(someNum)
console.log(typeof someNumber)
console.table([someNum, someNumber])

/*
"33" - 33
"33abc" = NaN
null = 0
undefined = NaN
*/


let isLoggedIn = 2
let isLoggedInString = "@" // if ""-false replaced by  " " - true or "abvhv" - true
let isLoggedOut = 0
let isBooleanLoggedIn = Boolean(isLoggedIn) 
let isBooleanLoggedOut = Boolean(isLoggedOut) 
let isBooleanLoggedInString = Boolean(isLoggedInString) 

console.log(typeof isBooleanLoggedIn)
console.table([isLoggedIn,isBooleanLoggedIn])

console.log(typeof isBooleanLoggedInString)
console.table([isLoggedInString,isBooleanLoggedInString])

console.log(typeof isBooleanLoggedOut)
console.table([isLoggedOut,isBooleanLoggedOut])