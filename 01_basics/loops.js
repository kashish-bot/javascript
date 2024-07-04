
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

for (let i = 0; i <=5; i++) {
   // console.log(i)
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

//console.log(iMap);

//onsole.log(iMap);
>>>>>>> e70bea90b41bedf580228b4c9d1b2b257f2b9d35
for (let [key , value] of iMap.entries() ) {
    //console.log(`${key} :- ${value}`);
}

/* (for - in loop) = The for...in loop iterates over the enumerable properties of an object.
    for (variable in object) {
    // code to be executed
}*/

/* (for - in loop) = The for...in loop iterates over the enumerable properties of an object.
    syntax = for (variable in object) {
    // code to be executed
}*/

const myObject = {
    js : "Javascript",
    cpp : "C++",
    py : "PYTHON",
}
for (const object in myObject) {
    console.log(object);
}

const myObject = {
    js : "Javascript",
    cpp : "C++",
    py : "PYTHON",
}
for (const object in myObject) {
   //console.log(object);
}


/* (forEach loop) =  the forEach method is specifically used to execute a function once for each array element. 
   Syntax = array.forEach(function/arrayfunction(currentValue, index, array) {
    // code to execute for each element
});*/
const coding = ["js", "C++", "C", "java" ,"ruby"]
coding.forEach(function(item) {
    //console.log(item);
})
//using arrow function in forEach loop//
coding.forEach(item => {
    //console.log(item);
});
//accessing index and whole array in forEach loop using function or arrow function//
coding.forEach(function(item, index, coding) {
    console.log(item, index, coding);
})
// objects within array using forEach loop//
const fruits = [
    {
        fruitName : "Apple",
        fruitColor : "Red",
    },
    {
        fruitName : "Mango",
        fruitColor : "Yellow",
    },
    {
        fruitName : "Grappes",
        fruitColor : "Green",
    },
    {
        fruitName : "Papaya",
        fruitColor : "Orange",
    },
]
//printing objects within array using function//
fruits.forEach(function(item) {
    console.log(`Name : ${item.fruitName} is of ${item.fruitColor} color.`);
});





//printing objects within array using Arrow-function//
fruits.forEach(item => {
    console.log(`Name : ${item.fruitName} is of ${item.fruitColor} color.`);
    //console.log("---");
}); 







