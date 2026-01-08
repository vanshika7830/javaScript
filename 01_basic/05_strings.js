const name = "vanshika"
const repoCount = 50

console.log(name + repoCount)  // Not recommended as per modern standards
console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("vanshikagupta")
console.log(gameName[0]);
console.log(gameName[8])

console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())   // returns new String
console.log(gameName.toLowerCase())   // returns new String
console.log(gameName.charAt(0))
console.log(gameName.indexOf("t"))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-13,4)
console.log(anotherString)

const newStringOne = "    vanshika    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://vanshika@google.com%20vanshika"
console.log(url.replace("%20","-"))

console.log(url.includes("hello"))
console.log(url.split("."))

// Revisting Strings
// Revisting Strings