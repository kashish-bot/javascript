// if-else statement//
let num = -1000000
if (num > 0) {
    //console.log(`${num} is positive`);
} else if (num < 0) {
    //console.log(`${num} is negative`);
} else {
    //console.log(num);
}

let age = 17
if (age >= 18) {
    //console.log("You are eligible to vote");
} else if (age < 18) {
    //console.log(("You are not eligible to vote"));
}


let num1 = 50;
let num2 = 90;
let num3 = 1200000;

if (num1 > num2 && num1 > num3) {
    //console.log(`${num1} is largest of three numbers`);
} else if (num2 > num1 && num2 > num3) {
        //console.log(`${num2} is largest of three numbers`);
} else {
    //console.log(`${num3} is largest of three numbers`);
}

let weekNum = "";
switch (weekNum) {
    case 1:
        //console.log("Today is Monday");
        break;
    case 2:
        //console.log("Today is Tuesday");
        break; 
    case 3:
        //console.log("Today is Wednessday");
        break;   
    case 4:
        //console.log("Today is Thrusday");
        break;
    case 5:
        //console.log("Today is Friday");
        break;  
    case 6:
        //console.log("Today is Saturday");
        break; 
    case 7:
        //console.log("Today is Saturday");
        break; 
    default:
        //console.log("aaj chutti hai");
        break;
}

let grade = 50-40//;
switch (grade) {
    case 80-100:
        //console.log("Your grade is A");
        break;
    case 60-80:
        //console.log("Your grade is B");
        break;
    case 40-60:
        //console.log("Your grade is C");
        break;
    case 50-40:
        //console.log("Your grade is D");
        break;
    case 30-40:
        //console.log("Your grade is E");
        break;
    case 20-30:
        //console.log("Your grade is F");
        break;
    default:
        //console.log("You are Fail");
        break;
}

let number = 19
let EO = (number % 2 === 0) ? "Number is EVEN" : "Number is ODD"
//console.log(EO);

//combining condition
let year = 2324;
if (year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0)) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}










