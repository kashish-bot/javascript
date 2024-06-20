/*console.log("Kashish");
//Let , Const , Var //

let str1 = "Jai";
let str2 = " Mahakal";
let str3 = str1 + str2;
console.log(str3);

console.log(11 > 10);
console.log(null == 0);
console.log(null > 0);     

//Stack & Heap Memory ........ Stack Memory is always used in (premitive data types) & Heap Memory is always used in (non-premitive data type)//

//strings//...

const name = "kashish";
const repoCount = 50;
// first way to combine const name and const repoCount // ........
console.log(name + repoCount);
// first way to combine const name and const repoCount // ........
console.log(`Hey my name is ${name} and my weight is ${repoCount}`);

const gameName = "kashish-kr";
console.log(gameName[7]); 
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(0));
const NewString = gameName.substring(0 , 5);
console.log(NewString);
const gameNamrOne = "    Kashish    "
console.log(gameNamrOne);
console.log(gameNamrOne.trim());
const url = "https://kashish.com/kashish%20Rani"
console.log(url.replace('%20' , '-'));


//Number//
const score = 400;
console.log(score);

const balance = new Number(200);
console.log(balance.toString().length);
console.log(balance.toFixed(2));
const othervalue = 123.8966
console.log(othervalue.toPrecision(1));
const numberSystem = 100000000;
console.log(numberSystem.toLocaleString('en-IN'));


//..............Maths.................//
console.log(Math);
console.log(Math.abs(-10));  //it convert (-)ve into (+)ve//
console.log(Math.round(4.6));//it convert the decimal value into round figure value//
console.log(Math.ceil(4.1)); // it convert the decimal value into its near high value i.e = 4.1 = 5// 
console.log(Math.floor(4.9)); // it remain same at its lowest place//
console.log(Math.min(4,5,6,7,8,9)); // it choose lowest value//
console.log(Math.max(3,4,1,5,6,3,7,8,3,9,2,10)); // it choose highest value
console.log(Math.random()); // its value remain between 0-1//
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //floor = to choose lowest value among decimal , * (max - min + 1) = to get the value between max and min value and add 1 to avoid 0 , + min = to get the answer between max and min vlaue//
 
//...............Date & Time ....................//
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(typeof myDate);

let myCreatedDate = new Date (2024 , 5 , 17);
console.log(myCreatedDate.toDateString());
let CreatedDate = new Date (2024 , 5 , 17 , 5 , 3 );
console.log(CreatedDate.toTimeString());
let YYMMDD = new Date ("2024-06-17");
console.log(YYMMDD.toLocaleString());
let MMDDYY = new Date ("06-17-2024");
console.log(MMDDYY.toLocaleString()); */


//*timestamp*//
/*let timestamp = Date.now()  // date.now we use to get time //
console.log(timestamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //we divide Dtae.now by thousand to convert miliseconds into seconds ..... then we use Math.floor to obtain minimal value from decimal //

let newDate = new Date ()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(`Hey! my self Kashish today is ${newDate.toDateString()} & time is ${Math.floor(newDate.getTime()/1000)}`); */







