// let a = 20
// const b = 30
// var c = 50

// console.log(a)
// console.log(b)
// console.log(c)

{
    let a = 20
    const b = 30
    var c = 50
}
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

let a = 300
const b = 1000
var c = 10200
if(true){
    let a = 400
    const b = 700
    // var a;    //cannot use for differnt type same name inside as well as outside
    // var b;
    var c = 152222
    console.log("Inner a: ",a)   //  Block level
    console.log("Inner b: ",b)   //  Block level
}
console.log("Outer a: ",a)       // Global level
console.log("Outer b: ",b)

// Updation
// Updation
// updation