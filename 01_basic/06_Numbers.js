const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(1))

const otherNumber = 23.6646
console.log(otherNumber.toPrecision(3))


const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'))
console.log(hundreds.toLocaleString()) // US

// Maths
console.log(Math.abs(-4))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.round(3.4))
console.log(Math.min(3,4,5,6))
console.log(Math.max(38,543,532))

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.random())

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min+1))+min)