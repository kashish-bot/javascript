let num1 = 8;
function myFunction(num1) {
    if (num1 % 2 === 0) {
       // console.log(`${num1} is even number`);
    } else {
       // console.log(`${num1} is odd number`);
    }
   
}
myFunction(num1);

// Task 2 //
function SqFunction (square) {
    return (square*square)
}
//console.log(SqFunction(5));


// TASK 3 //
let no1 = 70;
let no2 = 50;
function noFunction(no1 , no2) {
    if (no1 > no2) {
        //console.log(`${no1} is greater then ${no2}`);
    } else {
        //console.log(`${no2} is greater then ${no1}`)
    }
}
noFunction(no1 , no2)


// TASK 4 //
function strFunction (str1,str2) {
    return (str1.concat(str2))
}
//console.log(strFunction("KASHISH-", "RADHARANI"));
//let string = [...S1, ...S2]
//console.log(string);

let sum = (a , b) => a + b;
let retain = sum(20 , 20);
//console.log(retain);

let strcontain = (str,char) => str.includes(char)
let result1 = strcontain('hello' , "e")
//console.log(result1);
let result2 = strcontain("welcome", "a")
//console.log(result2);

// TASK 7 //
function product(a , b = 10) {
    return (a * b)
}
//console.log(product(5));

// TASK 8 //
function intro (name , age = 20){
    return(`Hello! ${name} you are ${age} years old.`)
}
//console.log(intro("Kashish"));


// TASK 9 //
function run (fun , time){
    for (let i = 1; i <= time; i++) {
        fun()   
    }
}
function myFun () {
    console.log("Hello!");
}
run(myFun , 5)









