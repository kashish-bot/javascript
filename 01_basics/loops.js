
/*  1. (for loop) = The for loop is used when the number of iterations is known beforehand.
syntax = for (initialization; condition; increment) {
    // code to be executed
}  */
for (let i = 0; i <=5; i++) {
    console.log(i)
}
/*  1. (for loop) = The for loop is used when the number of iterations is known beforehand.
syntax = for (initialization; condition; increment) {
    // code to be executed
}  */
/* for (let i = 0; i <=5; i++) {
    console.log("Kashish")
}

let sum = 0;
for (let i = 0; i <=5; i++) {
    sum = sum + i ;
}
console.log(sum); */

//break & continue in loops//

/*for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log("5 is detected")
        break
    }
    console.log(`value of i is ${i}`);
}
for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log("5 is detected")
        continue
    }
    console.log(`value of i is ${i}`);
}*/

/*  2. (while loop) = The while loop repeats a block of code as long as a specified condition is true.
syntax = while (condition) {
    // code to be executed
}  */
/*let i = 0
while (i <=5) {
    console.log(i);
    i ++
}

let myArray = ["Kashish", "Nishant", "Krishna", "Radha"];
let arr = 0;
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr ++
};*/

/*  3. (do While loop) = The do...while loop is similar to the while loop, but it executes the block of code once before checking the condition.
    syntax = do {
    // code to be executed
} while (condition);  */
 /*let score = 1;
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);*/

/*  4. (for - of loop)= The for...of loop in JavaScript is used to iterate over the values of iterable objects such as arrays, strings, maps, sets, and more. 
    Syntax = for (variable of iterable) {
    // code to be executed
}  */
let arr1 = [1 , 2 , 3 , 4 , 5]
for (const num of arr1) {
    //console.log(num)
}
let cars = ["BMW" , "MERCIDESE" , "CRETA" , "KIA" , "FORTUNER"];
for (let car of cars) {
    //console.log(car)
}
let greetings = "Hello World"
for (let greet of greetings) {
    //console.log(`Each char in ${greet}`)
}

let iMap = new Map ();
iMap .set ('IN', "INDIA")
iMap .set ('USA', "UNITED STATES OF AMERICA")
iMap .set ('FR', "FRANCE")
iMap .set ('BN', "BHUTAN")
console.log(iMap);
for (let [key , value] of iMap.entries() ) {
    console.log(`${key} :- ${value}`);
}






