// let a = 20
// const b = 30
// var c = 50

// console.log(a)
// console.log(b)
// console.log(c)

// {
//     let a = 20
//     const b = 30
//     var c = 50
// }

// console.log(a)   // won't run
// console.log(b)   //won't run
// console.log(c)   // run - problem bcz it is out of scope and it shouldn't run

// let a = 20
// const b = 30
// var c = 50
// if(a == 20){
//     a = 60;    // can be used inside bcz outer scope
// }
// console.log(b)

// let a = 300
// const b = 1000
// var c = 10200
// if(true){
//     let a = 400
//     const b = 700
//     // var a;    //cannot use for differnt type same name inside as well as outside
//     // var b;
//     var c = 152222
//     console.log("Inner a: ",a)   //  Block level
//     console.log("Inner b: ",b)   //  Block level
// }
// console.log("Outer a: ",a)       // Global level
// console.log("Outer b: ",b)

// Updation
// Updation
// updation
// continuation
// Revisiting Functions


// let a = 300
// if(true){
//     let a = 100
//     let b = 200
//     console.log("INNER: ",a)
// }

// console.log("OUTER: ",a)

// ---------------------------- FUNCTION INSIDE FUNCTION-------------------

// function one(){
//     const userName = "Vanshika"
//     function two(){
//         const website = "youtube"
//         console.log(userName)
//     }
//     // console.log(website)    //Error outer function can't access inner function attribute
//     two()
// } 

// one()


// -------------------- CONTROL FLOW---------------------
// if(true){
//     const userName = "Vanshika"
//     if(userName === "Vanshika"){
//         const website = " youtube"
//         console.log(userName+website)
//     }

//     console.log(website) // can't access
// }

// console.log(userName)  // can't access


// -----------------------------------INTERESTING (HOISTING) ---------------------------

// addOne(5)  //valid
// function addOne(num){
//     return num+1
// }
// addOne(5)


// addTwo(5) // not valid bcz here we have function assign to a variable
const addTwo = function(num){
    return num+1
}
addTwo(5)

// scope variable revisit
