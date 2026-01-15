const myArr = [0,1,2,3,4,5,"vanshika",true]
// Array creates a shallow copy = same reference
// console.log(myArr[6])

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr2)

// myArr.push("Hello")   //Insert at end
// myArr.push(10)
// myArr.pop()  // Delete from last

// myArr.unshift(16)  // Adds an element at front
// myArr.shift()      // Deletes element from last

// console.log(myArr.includes(10))  //boolean ans
// console.log(myArr.indexOf("vanshika"))

// const newArr = myArr.join()  //Converts array to string
// console.log(newArr)
// console.log(myArr)

console.log("A ",myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ",myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log(myArr)

// Slice extracts the elements from array while splice omits those elements from original array.
// Basic revision
// Arrays