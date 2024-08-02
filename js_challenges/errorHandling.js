//TASK 1//
/*function errorFunction (){
    try {
        throw new Error('Something went wrong!')
    } catch (error) {
        console.log( error);
        
    }
}
errorFunction()*/

//TASK 2//

/*function divideFunction(numerator , dinominator){
    try {
        if (dinominator === 0) {
            throw new Error ("It connot be divisible")
        } 
        return numerator / dinominator
    } catch (error) {
        console.log(error);   
    }
    
}
divideFunction(10 , 0)*/

//TASK 3//
const promiseOne = new Promise((resolve, reject) => {
    let error = true
    if (!error) {
        console.log('User Info:');
        resolve({userName: 'Kashish' , email: 'Kashish@123gmail.com' , rollNo: 20})
    } else {
        reject("User Info is incorrect")
    }
})
async function finalCall(){
    try {
        const response = await promiseOne
        //console.log(response);
    } catch (error) {
        //console.log(error);    
    }finally{
        //console.log("The will will either solved or displayed");
        
    }
}
finalCall()

//TASK 6//
const promiseTwo = new Promise((resolve, reject) => {
    let error = false
    if (error !== true) {
        //console.log('This task is successfully done.');
        resolve('successful')
    } else {
        reject("This task is unsuccessful as it causes some error.")
    }
})
promiseTwo.then((res) =>{
    //console.log(res);
}).catch((err)=>{
    //console.log(err);
    
})

//TASK 7//
const promiseThree = new Promise((resolve, reject) => {
    let a = 10
    let b = 3
    if (a % b === 0) {
       // console.log("Calculation is correct");
        resolve('Successful')
    } else{
        reject('This calculation is wrong')
    }
})
async function errorCall () {
    try {
        const response = await promiseThree
        //console.log(response);
        
    } catch (error) {
        //console.log(error);
        
    }
}
errorCall() 

//Task 8//
fetch('httpsjsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data);
})
//.catch((err) => console.log('ERROR: This url is invalid.' ,err)
//)

//TASK 9//
async function fetchCall() {
    try {
    const response = await fetch('httpsjsonplaceholder.typicode.com/users')
    const data =  response.json()
    console.log(data);
    } catch (error) {
        console.log("This url is not working.");
    }
}
fetchCall()

























