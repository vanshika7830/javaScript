// Singleton
// Object Literals

const tinderUser = new Object()
tinderUser.id = "123abc";
tinderUser.name = "Vanshika";
tinderUser.isLoggedIn = true;
console.log(tinderUser)

const regularUser = {
    email: "vanshika001",
    fullName: {
        userFullName: {
            firstName: "Vanshika",
            lastName: "Gupta"
        }
    }
}

console.log(regularUser.fullName?.userFullName.firstName)
const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}

// const obj3 = {obj1,obj2}  // this will just merge them without combining
// const obj3 = Object.assign({},obj1,obj2)   // {}(optional if not give first argument as target) -> target, obj1,obj2 ->source
const obj3 = {...obj1,...obj2}
console.log(obj3)


const Users = [
    {
        id: 1,
        email: "hello"
    },
    {
        id: 2,
        email: "hii"
    },
    {
        id: 3,
        email: "kya kuch bhi"
    }
]

console.log(Users[1].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))   //array form

console.log(tinderUser.hasOwnProperty('isLoggedIn'))  // check if prperty exists or not