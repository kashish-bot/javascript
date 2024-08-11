//TASK 1 & 2//
for(let i = 0; i <= 10; i++){
    //console.log(`Value of i: ${i}`);
}

for(let i = 5; i <= 10 ; i++){
    //console.log(`Outer loop: ${i}`);
    
    for (let y = 5; y <= 10 ; y++) {
        //console.log(`Inner loop: ${y}`);
        //console.log(i + "*" + y + ' = ' + i*y );
    }
} 

//TASK 3 & 4//
let sum = 0
let i = 1
while (i <= 10) {
    sum = sum + i
    i++
}
//console.log(sum);

let x = 10;
while (x >= 1) {
    //console.log(x);
    x--
    
}

//TASK 5 & 6//
let N = 1;
do {
    //console.log(N);
    N++
} while (N <= 5);

let num = 5
let factorial = 1
do {
    factorial = factorial * num
    num--
} while (num > 0);
//console.log(factorial);


//TASK 7//
let n = 5
for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j <= i; j++) {
        row += "*"
        
    }
    //console.log(row);
    
} 

//TASK 8 & 9//
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log("5 is skipped");
        continue;
    }
    console.log(`Value of i : ${i}`);
    
}
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log("5 is skipped");
        break;
    }
    console.log(`Value of i : ${i}`);
    
}

