
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

for (let [key , value] of iMap.entries() ) {
    //console.log(`${key} :- ${value}`);
}

/* (for - in loop) = The for...in loop iterates over the enumerable properties of an object.
    for (variable in object) {
    // code to be executed
}*/

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
    //console.log(item, index, coding);
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
    //console.log(`Name : ${item.fruitName} is of ${item.fruitColor} color.`);
});

//printing objects within array using Arrow-function//
fruits.forEach(item => {
   // console.log(`Name : ${item.fruitName} is of ${item.fruitColor} color.`);
    //console.log("---");
}); 

// ........... FILTER.............//
//In JavaScript, filter is a method available on arrays that allows you to create a new array containing all elements that pass a certain test defined by a provided function. The filter method does not mutate the original array but returns a new array with the elements that meet the condition.//
/* Syntax =
 let newArray = array.filter(function(element, index, array) {
  // return true or false based on some condition
});*/
let counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArray = counting.filter(function(counting) {
    return counting > 4;
});
//console.log(newArray); 
const users = [
    { name: 'Shiva', age: 25 , born: 1999},
    { name: 'Shakti', age: 30 , born: 2003},
    { name: 'kanhaiya', age: 35 , born: 2010},
    { name: 'Radha Rani', age: 40 , born: 2015},
  ];
  
  //const youngUsers = users.filter(user => user.age < 30);
  //youngUsers = users.filter( (YU) => YU.age >= 30 && YU.born >= 2010);
  //youngUsers = users.filter( (YU) => {return YU.age < 35 && YU.born < 2010});  // when ever we use scope{} then we need to return so that it can print atherwise it will not print
  //console.log(youngUsers);

  //..............MAP....................//
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/*const newNums = myNums.map ( (num) => {
    return num % 2 === 0
})*/
const newNumbers = myNums      //this called chaining
                   .map( (num) => num * 10 )
                   .map( (num) => num + 1 )
                   .filter( (num) => num > 51)
//console.log(newNumbers);

//............REDUCE..............//
const numeric = [1, 2, 3, 4]
/*const myTotal = numeric.reduce (function(accumulator, currentValue) {
    console.log(`accumulator: ${accumulator} & currentValue: ${currentValue}`);
    return accumulator + currentValue
}, 0)*/

const myTotal = numeric.reduce ((accumulator, currentValue) => {
    //console.log(`accumulator: ${accumulator} & currentValue: ${currentValue}`);
    return accumulator + currentValue
}, 0)
//console.log(myTotal);


const shoppingCart = [
    {
        courseName : "javaScript",
        price : 399,
    },
    {
        courseName : "Python",
        price : 599,
    },
    {
        courseName : "Java",
        price : 899,
    },
    {
        courseName : "DSA",
        price : 1999,
    },
]
const courseLelo = shoppingCart.reduce( (accumulator, currentValue) => 
    (accumulator + currentValue.price) ,0 );
console.log(courseLelo);







