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

function sum(...number) {
    return number.reduce((total , num) => total + num , 0)
}
//console.log(sum(1 , 2, 3 , 4 , 5 , 6 , 7));

function product(num1 , num2=10) {
    return num1 * num2
}
//console.log(product(20 , 30));

const fullName = "kashish Rani"
const age1 = 19

const shakti = {
    fullName,
    age,
    greet(){
        console.log(`Radhe Radhe! i am ${fullName} and my age is ${age}`);
    }
}
console.log(shakti);
shakti.greet()











