let index = 0
while(index <= 10){
    console.log(`The value of index is ${index}`);
    index++;
}

// On array
let myArray = ['flash', 'vanshika', 'world']
let arr = 0;
while(arr < myArray.length){
    console.log(`Array elements are ${myArray[arr]}`)
    arr++;
}

// let score = 1;
// do{
//     console.log(`Score is ${score}`);
//     score++;
// }while(score <= 10);


// Do while loop checks condition at last so O/P - Score is 11 then terminate
let score = 11;
do{
    console.log(`Score is ${score}`);
    score++;
}while(score <= 10);