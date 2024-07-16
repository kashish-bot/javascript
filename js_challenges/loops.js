//for - loop//
for (let i = 1; i <= 10; i++) {
   // console.log(i);
}
for (let i = 0; i <= 10; i++) {
   //console.log(`5 * ${i} === ${5 * i}`);
    
}
//while - loop//
/*let sum = 0
let i = 1
while (i <=10) {
    sum = sum + i;
    i++
}
console.log(sum);*/

let i = 10;
while (i>=0) {
   //console.log(i);
   i--
}
//do-while loop//
let N = 1
do {
   //console.log(N)
   N++
} while (N <= 5);

let N1 = 5;
let factorial = 1;
do {
   factorial = factorial * N1
   N1--;
} while (N1 > 0);
//console.log(factorial);

//Nested for loop//
let N2 = 5;
for (let i = 0; i < N2; i++) {
  let row = ""
  for (let j = 0; j <= i; j++) {
   row+= "* ";
   
  }
   //console.log(row);
}

// Loop conditional statement//
for (let i = 1; i <= 10; i++) {
   if(i===5)
      continue;
   //console.log(i);
}

for (let j = 1; j <= 10; j++) {
   if(j === 7)
      break;
   console.log(j);
}