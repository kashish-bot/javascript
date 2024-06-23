/*let a = 10
let b = 20
let c = b + a
console.log(c);*/

function addTwoNumbers (num1 , num2) {
   /*let result = num1 + num2    //(this the first way to add numbers in a function)
   return result*/

   return num1 + num2            //(this the second way to add numbers in a function)
  
}
const result = addTwoNumbers( 3 , 4); 
console.log("result :" , result)

function userMessage (username) {
    return `${username} just loggedIn`
}
console.log(userMessage("kashish"));