/*let a = 10
let b = 20
let c = b + a
console.log(c);*/

// function addTwoNumbers (num1 , num2) {
   /*let result = num1 + num2    //(this the first way to add numbers in a function)
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

const user = {
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
console.log(returnarray(newArray));  






