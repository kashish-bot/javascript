const pName = "Kashish";
const age = 20 ;    
const intro = `Hello! My name is ${pName} and my age is ${age}`        
//console.log(intro);       

const mLine = `Hello! How are you?
I'am fine ...
What about you?
I am good too.`
//console.log(mLine);

const destructure = ["kashish", "harsh", "nishant", "KRISHNA", "radhaRani"]
const [first , second , third , forth , fifth] = destructure;
//console.log(destructure);
//console.log(forth);
//console.log(fifth);

const book = {
    Bname: "GEETA",
    author: "krishna"
}
const {Bname , author} = book
//console.log(Bname);
//console.log(author);

const arr1 = [1 , 2 , 3 , 4 , 5]
const arr2 = [11 , 12 , 13 , 14 , 15]
const spread = [...arr1, ...arr2]
//console.log(spread);

const array = [101 , 102 , 103 , 104 , 105];
 let sum =0;

for (let i = 0; i < array.length; i++) {
   sum = sumelement(array[i]);
    
}
function sumelement(element){
    
    sum=sum+element
    return sum;
}

//console.log(sum);


function product(num1 , num2=10) {
    return num1 * num2
}
console.log(product(20 , 30));











