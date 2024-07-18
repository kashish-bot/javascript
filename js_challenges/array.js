// TASK 1&2 //
let myArr = [1 , 2 , 3 , 4 , 5]
//console.log(typeof myArr);
//console.log(myArr[0]);
//console.log(myArr[4]);


// TASK 3,4,5,6 //
let students = ['Kashish', "Harsh", "Naman", "Kinjal"]
students.push("Deep");
//console.log(students);
students.pop("Deep")
//console.log(students);

let rollNo = [10 , 20 ,45 , 48 , 29];
rollNo.shift(0)
//console.log(rollNo);
rollNo.unshift(15)
//console.log(rollNo);

// TASK 10&11 //
let array = ["J & K", "U.P", 'Uttarakhand', "Punjab"]
for (let i = 0; i < array.length; i++) {
   //console.log(array[i]);
}
array.forEach(item => {
    //console.log(item);
});


// TASK 12 & 13 //
let dimensionalArr = [1,2,3,4,[11,12,13,14],5,6,7,[15,16,17]]
let anotherArr = dimensionalArr.flat(2)
//console.log(anotherArr);
//console.log(dimensionalArr);
//console.log(dimensionalArr[4]);
//console.log(dimensionalArr[8]);


let array1 = [101 , 102 , 103 , 104 , 105 , 106 , 107 , 108 , 109];
let newar = array1.filter(function(array1) {
    return array1 < 106
})
//console.log(newar);

let intro = [ 
    {fullName: "Kashish", age: 20 , born: 2003},
    {fullName: "harsh", age: 19 , born: 2004},
    {fullName: "nishant", age: 25 , born: 1998},
    {fullName: "radhaRani", age: 7 , born: 2002,}
]
let introArr = intro.filter(function(intro) {
    return intro.age < 25 && intro.born > 2003
})
//console.log(introArr);

let numbers = [10 ,20 , 30 , 40 , 50 , 60 , 70 , 80 , 90]
let nums = numbers.map(function(numbers){
    return numbers + 5
})
//console.log(nums);

let no = [10 ,20 , 30 , 40 , 50 , 60 , 70 , 80 , 90]
let noArr = no
            .map( (no) => no * 10)
            .map( (no) => no + 1)
            .filter ( (no) => no < 601)
//console.log(noArr);


let myNums = [1 , 2 , 3]
let myTotal = myNums.reduce(function (accumulator , currentValue) {
    //console.log(`accumulator: ${accumulator} & currentValue: ${currentValue}`);
    return accumulator + currentValue
}, 0)
//console.log(myTotal);


// TASK 7 , 8 & 9 //
let marr = [1 , 2 , 3 , 4 , 5]
let result = marr.map ( (marr) => marr * 2)
//console.log(result);

let farr = [11 , 20 , 33 , 40 , 50 , 61 , 77 , 89 , 99]
let me = farr.filter ( (farr) => farr % 2 === 0)
//console.log(me);

let rarr = [100 , 200 , 300 , 400 , 500]
let result1 = rarr.reduce ( (accumulator , currentValue) => {
    console.log(`Accumulator: ${accumulator} & currentValue: ${currentValue}`);
    return accumulator + currentValue
}, 0)
console.log(result1);












