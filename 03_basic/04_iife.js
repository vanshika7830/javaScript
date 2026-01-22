// Immediately Invoked Function Expression - IIFE
//  - doesn't clasj with global scope variable (function inside function)
//  immediately write operation in DB file

(function chai(){
    // Named IFFE
    console.log("DB Connected One");
})();    // this () is function call

// use semicolon with first IFFE when using two IFFE

(() => {
    // Unnamed IFEE
    console.log("DB Connected Two");
})();


// Parametric IFFE
((name) => {
    // Unnamed IFEE
    console.log(`${name}`);
})("Vanshika")

// IFEE


// Javascript Execution Context
// 1. Global EC
// 2. Functiona EC
// 3. Eval EC

// Global Execution Context -> Memory Creation Phase -> Execution Phase

// For a function new memory and execution phase is made with New Variable Environment + Execution Thread
// Call Stack for function calls follows LIFO

// Control flow
// IF-ELSE
// Nested IF-ELSE

console.log("hii")