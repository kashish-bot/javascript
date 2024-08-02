//TASK 1//
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
       // console.log('Hello!');
        resolve('Oh! Hey ..... How are you')
    }, 2000);
})
promiseOne.then(function(res){
   // console.log(res);
})

//TASK 2//
const promiseTwo = new Promise(function(resolve , reject) {
    setTimeout (() => {
       // console.log("Data is entered");
        reject('The data you entered is incorrect')
    }, 2000)
})
promiseTwo.catch((err)=>{
    //console.log(err);
    
})

//Task 3 ?//
const promiseFive = new Promise((resolve, reject) => {
    console.log("User Data:");
    resolve({userName: 'Kashish', lastName: 'Rajput', email: 'kashish@123gmail.com'})
})
const promiseSix = new Promise((resolve, reject) => {
    console.log("User Info:");
    resolve({userName: 'Nishnat', lastName: 'Kumar', email: 'Nishant@gmail.com'})
})
promiseFive.then((user) => {
    console.log(user);
    return user.userName
}).then((userName) => {
    console.log(userName);
}).catch((err) => {
    console.log(err);
    promiseSix.then((res) => {
        console.log(res);
        return res.email  
    }).then((email) => {
        console.log(email);
    }).catch((err) => {
        console.log('ERROR:' , err);
        
    })
})

//Task 4//
const promiseThree = new Promise((resolve, reject) => {
   // console.log('Good Morning .... is there any kashish');
    resolve('Yes i am Kashish')
})
async function callKashish (){
    const response = await promiseThree
   // console.log(response);
}
callKashish()

//TASK 5//
const promiseFour = new Promise((resolve, reject) => {
    let error = true
    if (!error) {
        resolve('THere is no error')
    } else {
        reject('There is Error')
    }
})
async function callError (){
    try {
        const response = await promiseFour
       // console.log(response);
        
    } catch (error) {
       // console.log(error);
        
    }
}
callError()

//TASK 6//
async function fetchCall(){
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    //console.log(data);
    } catch (error) {
       // console.log(error);
        
    }
}
fetchCall()

//TASK 7//
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).then((data) => {
    //console.log(data);
}).catch((error) => console.log("ERROR:" , error)
)

















