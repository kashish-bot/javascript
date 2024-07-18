//............ARRAY............//
const myArr = new Array(1,2,3,4,5)
//console.log(myArr[1]); // this how we can access the array value
//Array Methods//..
/*myArr.push(100) //it add the item at the end of the array
myArr.pop()  // it remove the last item from the array
myArr.unshift(50); //it add the item at start of the array
myArr.shift(); // it remove the first item from the array*/
//console.log(myArr);
//console.log(myArr.includes(7)); //tells about the asked content is within the array or not (true/false)
//console.log(myArr.indexOf(7)); //tells about the asked content is alvailable at which index no (if the content is not available then it will print [-1= which mean NO])
//const newArr = myArr.join();   //it convert the array into string
//console.log(myArr);
//console.log(newArr);


//Splice & Slice//
/*const originalArr = [0,1,2,3,4,5,6,7];
console.log("A " , originalArr);
const myn1 = originalArr.slice(1, 3 ,); //it return the selected array as a new array , it select from the given start and upto the no. before end (it does not include given end) , it does not effect the orriginal array//
console.log(myn1);
console.log("B " , originalArr);

const myn2 = originalArr.splice(1, 3, 'kashish' , 'harsh' , 'nishant');  //it return the selected array as a new array , it select from the given start and upto the end (it includes given end) , it manipulate the orriginal array , also we can add more elements in the array in place of those array which we selected in splice
console.log(myn2);
console.log("c " , originalArr);*/

//Push//
/*const marvel_hero = ["thor" , "ironman" , "spiderman"];
marvel_hero.push("Kashish");      // it adds the eliment at the end of the array , if we add add a array then it will count as a single eliment//
const dc_heros = ["superstar" , "flash" , "batman"];
marvel_hero.push(dc_heros);
console.log(marvel_hero);*/

//Concat//
/*const Astudents = ["kashish" , "harsh" , "Nishanst" , "bulbul"];
const Bstudents = ["abc" , "def" , "xyz" , "lmn"];
const students = Astudents.concat(Bstudents);   // it combines the arrays//
console.log(students);*/

//spread//
/*const Astudents = ["kashish" , "harsh" , "Nishanst" , "bulbul"];
const Bstudents = ["abc" , "def" , "xyz" , "lmn"];
const students = [...Astudents , ...Bstudents];   // ...is said spread operator this is used when we need to combine more then one array//
console.log(students);*/

//flat// 
/*const array = ["kashish" , "harsh" , "Nishanst" , "bulbul" , ["abc" , "def" , ["xyz" , "lmn"]]];
const anotherArray = array.flat(2); //flat is used to solve multiple arrays inside single array//
console.log(array);
console.log(anotherArray);*/

console.log(Array.isArray("Kashish"));
console.log(Array.from("Kashish"));


//......................................OBJECTS.........................................//
const mySym = Symbol("key1")

const info = {
    name: "Kashish",
    fullName : "KashishRani",
    "full Name": "Kashish Rani",
    Gmail: "kashish@772.com",
    [mySym]: "mykey1", // this is how we defne symbols in object//
    isLogIn: false,
    lastLogInDays: ["Monday" , "Friday"],
};
//console.log(info.Gmail)
//console.log(info["Gmail"]); //try to call objects like this//
//console.log(info["full Name"]);
//console.log(typeof false);
//console.log(info[mySym]);
//console.log(typeof mySym); 

info.Gmail = "kashish@chatgpt.com" //this is how we can change value in object//
info["full Name"]= "nishant kumar";
info.fullName = "harsh patra"
//console.log(info);

info.greeting = function(){
    //console.log("Hello js user !!");
};
info.greetingtwo = function(){
    //console.log(`Hello js user , ${this.name}`);
}
//console.log(info.greetingtwo());
//console.log(info.greeting());

const mysymbol = Symbol("5star")
const user = {
    email : "kashishrajput@gmail.com",
    LogedIn : true,
    [mysymbol] : "7star",
    fullname : {                                   //this is how we add object in a object//
        userFullname : {
            firstname : "Kashihs",
            lastname : "Rani",
        }
    }
}
//console.log(user[mysymbol]);
//console.log(typeof mysymbol);
//console.log(user.fullname.userFullname.firstname);
//console.log(typeof fullname); 

const obj1 = {1: "a" , 2: "b"};
const obj2 = {3: "c" , 4: "d"};
const obj3 = {5: "e" , 6: "f"};
const obj4 = Object.assign({} , obj1 , obj2 , obj3);    // this how we combine 2 or more objects //
//console.log(obj4);
const obj5 = {...obj1 , ...obj2 , ...obj3};  // this is simplest way to combine 2 or more onjects (mostaly we are ganna use this spread operator);
//console.log(obj5);

//objects from database// 
const user1 = [                         //objects or data come from database will be in this syntax//
    {
        id: 1,
        email: "k@gmail.com",
    },
    {
        id: 1,
        email: "k@gmail.com",
    },{
        id: 1,
        email: "k@gmail.com",
    },
    {
        id: 1,
        email: "k@gmail.com",
    },
];
//console.log(user1[1].id);                   //this is how we print data in array of object //
const info = {
    name: "Kashish",
    fullName : "KashishRani",
    "full Name": "Kashish Rani",
    Gmail: "kashish@772.com",
    //[mySym]: "mykey1", // this is how we defne symbols in object//
    isLogIn: false,
    lastLogInDays: ["Monday" , "Friday"],
};
//console.log(info);
//console.log(Object.keys(info));   //it will print the the keys of object in array
//console.log(Object.values(info));  //it will print the values of keys in array
//console.log(Object.entries(info));  //it will print the values and keys in saperate array

//console.log(info.hasOwnProperty("lastLogInDays"));  // this is how we check whether the object contain the required information it provide result in boolean method//
//console.log(info.hasOwnProperty("LogInDays"));


//destructuring in object//
const course = {
    courseName : "chai aur code",
    studentName : "kashishrani",
    fees : "599",
};
const {studentName : Sname} = course; //this is the another syntax to print values in object//
console.log(Sname);







