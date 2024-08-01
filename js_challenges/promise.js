const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Hello!');
        resolve('Oh! Hey ..... How are you')
    }, 2000);
})
promiseOne.then(function(res){
    console.log(res);
})























