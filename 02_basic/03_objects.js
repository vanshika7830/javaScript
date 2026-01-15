// singleton - when object made with constructor

// Object literals

const mySym = Symbol("key1")
const JSUser = {
    name : "Vanshika",
    "full name":"Vanshika Gupta",
    age : 20,
    [mySym]:"mykey", //consider as symbol
    mySym:"mykey",  //Doesn't give error but consider as string type
    location: "Punjab",
    email: "vanshika@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JSUser.name)
console.log(JSUser.email)
console.log(JSUser["full name"])
console.log(JSUser[mySym])

JSUser.email = "vanshika@hello.com"
// Object.freeze(JSUser)  // Further changes will not be reflected

console.log(JSUser)
JSUser.greeting = function(){
    console.log(`Hello JS User ${this["full name"]}`)
}

console.log(JSUser.greeting())
console.log(JSUser.greeting)    // Anonymous
// Anonymous function