// Immediately Invoked Function Expression - IIFE
//  - doesn't clasj with global scope variable (function inside function)
//  immediately write operation in DB file

(function chai(){
    // Named IFFE
    console.log("DB Connected One");
})();    // this () is function call

