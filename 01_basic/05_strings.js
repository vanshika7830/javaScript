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

console.log(gameName)