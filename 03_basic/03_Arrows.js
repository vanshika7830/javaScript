
const user = {
    username: "vanshika",
    price: 9999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}
user.welcomeMessage()
user.username = "Varnit"
user.welcomeMessage()

// function chai(){
//     let userName = "Hitesh"
//     console.log(this.userName)
// }


// const chai =  function(){
//     let userName = "Hitesh"
//     console.log(this.userName)   
// }

const chai =  () => {
    let userName = "Hitesh"
    console.log(this.userName)   
}

// const chai =  () => {
//     console.log(this)   
// }

chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4))

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3,4))

const addTwo = (num1, num2) => ({usernname : "vanshi"})
console.log(addTwo(3,4))

// const myArray = [2,2,3,4]
// myArray.forEach()