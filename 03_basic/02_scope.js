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

let a = 20
const b = 30
var c = 50
if(a == 20){
    a = 60;    // can be used inside bcz outer scope
}
console.log(b)