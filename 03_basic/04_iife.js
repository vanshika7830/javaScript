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