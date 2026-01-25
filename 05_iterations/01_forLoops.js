// for loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    if(index == 5) console.log("5 is best number");
    
    console.log(element);
    
}

// console.log(element);

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for( let j = 0; j <= 10; j++){
        // console.log(`Inner loop value: ${j}, outer loop value: ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
    }   
}


let arr = ["MERN", "Cloud computing", "DevOps"]
// console.log(arr.length);

for(let i=0; i<arr.length; i++){
    const element = arr[i];
    // console.log(element);
    
}

// Break and Continue

for(let i = 1; i<=20; i++){
    if(i==5){
        console.log("Detected: 5");
        break
    }
    console.log(`Value of i is ${i}`);
}

for(let i = 1; i<=20; i++){
    if(i==5){
        console.log("Detected: 5");
        continue
    }
    console.log(`Value of i is ${i}`);
}