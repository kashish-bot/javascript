/*let a = 10
let b = 20
let c = b + a
console.log(c);*/

// function addTwoNumbers (num1 , num2) {
   /*let result = num1 + num2    //(this the  first way to add numbers in a function)
   return result*/

  // return num1 + num2            //(this the second way to add numbers in a function)
  
//}
 /*const result = addTwoNumbers( 3 , 4); 
console.log("result :" , result)

function userMessage (username) {
    return `${username} just loggedIn`
}
console.log(userMessage("kashish")); */

/*function calculation (...num1) // this (...)rest operator changes the no. value in array//
 {
    return num1
}
console.log(calculation(200 , 300 , 1000));*/

/*const user = {
    username : "Kashish",
    price : 200,
};
function userdetails (user) {
    console.log(`username is ${user.username} and price is ${user.price}`);   //this how we can pass object into a function
}
userdetails(user);

const newArray = [100, 200, 300, 400, 500]
function returnarray (newArray) {
    return newArray[1]  //this is how we van pass array in functins//
}
console.log(returnarray(newArray)); */ 

// IIFT (Immediately Invoked Function Expression)  in JavaScript it is a function that is defined and executed immediately after it is created. IIFE is used to create a local scope and avoid polluting the global scope, which helps in preventing potential conflicts with other code.

(function chai(){
    console.log("Hello World !");
})();

(() => {
    console.log("kashish");
})()

//...........CONDITIONAL STATEMENTS...............//
/*1. (if-statemrnt) = Use to execute a block of code if a condition is true.
  Syntax = if (CONDITION) {
  }*/
let age = 28;
if (age >= 18) {
    console.log("you can vote")
}
if (age < 18) {
    console.log("you cannot vote");
}

/*2. (if-else statement) = Use to execute one block of code if a condition is true and another block if it is false.
       syntax = if (CONDITION) {
       } else {
       } */  
let age2 = 20;
if (age2 >= 18) {
    console.log("You are adult");
} else {
    console.log("You are not adult");
};
let num = 20;
if (num%2 === 0) {
    console.log("even");
} else {
    console.log("no. is odd");
}


/* 3. (else-if statement) =  Use to test multiple conditions.
   syntax = if (CONDITION) {
   } else if {
   } else {
   } */
let mode = "blue";
let color;
if (mode === "dark") {
    color = "black";
} else if (mode === "blue") {
    color = "blue"
} else if (mode === "pink") {
    color = "pink"
} else {
    color = "white"
} 
console.log(color);


/* 4. (ternary operator) = it is a shorthand way of writing an if...else statement.
   syntax = condition ? expressionIfTrue : expressionIfFalse;*/
let age3 = 10;
let result = (age3 >= 18) ? "adult" : "not-adult"
console.log(result);


/* 5. (switch statement) = The switch statement is used to perform different actions based on different conditions. It is a more readable way to compare a single expression against multiple values.
   syntax = switch (expression) {
    case value1:
        // code to be executed if expression === value1
        break;
    case value2:
        // code to be executed if expression === value2
        break;
    // ...
    default:
        // code to be executed if expression doesn't match any case
} */
let studentName = "Anchal";
switch (studentName) {
    case "Rohit": 
    console.log("Rohit is presnt");
    break;

    case "Anchal": 
    console.log("Anchal is abcent");
    break;

    case "Shweta": 
    console.log("Shweta is prsent");
    break;

    case "Ayushi": 
    console.log("Ayushi is abcent");
    break;

    case "Aishwarya": 
    console.log("Aishwarya is prsent");
    break;

    default:
        console.log("StudentName not found");
};
 



