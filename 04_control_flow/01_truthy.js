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

