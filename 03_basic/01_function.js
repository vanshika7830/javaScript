function sayName(){
    console.log("Vanshika")
}

function greetings(name){
    console.log(`Hello ${name} Good Morning!!`)
}
// sayName()
// greetings("Vanshika")


// function addTwoNumbers(num1, num2){
//     console.log(num1+num2)
// }
// addTwoNumbers(5,6)   // answer = 11
// addTwoNumbers(5,"a")   // answer = 5a
// addTwoNumbers(5)   // answer = NaN
// addTwoNumbers(5,null)   // answer = 5

function addTwoNumbers(num1, num2){    
    return num1 + num2
}

const result = addTwoNumbers(6,4)
console.log(result)

// Passed in function definition () - Parameters
// Passed in function call - Arguments