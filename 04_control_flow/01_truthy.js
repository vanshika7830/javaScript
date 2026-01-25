// Falsy values - values treated as false in control flow
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values - values except false
// "false", '0', (single or double quotes don't matter), function(){}, [], {}

// Check an array is empty of not
myArray = []
if(myArray.length == 0){
    console.log("Array is empty");
}

// Check Object is empty
myObj = {}
if(Object.keys(myObj).length == 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator - ??
// It return the first value in case both values are true and return the first true value in case other value is null, undefined
// For NaN ?? val return NaN

let val1 = null ?? 10
val1 = 20 ?? null
val1 = 20 ?? 15
val1 = undefined ?? 10
val1 = NaN ?? 20
console.log(val1);

// Ternary Operator
// condition ? true_val : false_val
let icePrice = 80
icePrice >= 70 ? console.log("Ice price is above 70") : console.log("Ice price is below 70");
// operator


// Control flow