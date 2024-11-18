// creating a promise
const promiseOne=new Promise(function(resolve,reject){
    // Do async task
    setTimeout(function(){
        console.log("Asynchronous task is completed");
        resolve()
    },1000)
})


//consuming the promise//
//then is basically used for resolve which is connected
promiseOne.then(function(){
    console.log("Promise consumed");// if we run this program in terminal then the promised consumed is never printed coz we didnt call the resolve so tht it gets connected to then
})


//creating a promise without holding in a variable//
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 Resolved");
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){

     resolve({username:"Alfiya",email:"al@google.com"})//passing the data in the resolve which will directyle get connected with then
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})



const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"alfiaheba",password:"1234"})
        }
        else{
            reject('ERROR:Something went wrong!!!!')
        }
    },1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username//if we rum we get error so again call then
})
.then(function(username){
    console.log(username);//again error use catch as we are using the reject function also
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("The promise is either resolved or rejected");
})



const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"heba",password:"1234000000"})
        }
        else{
            reject('ERROR:Heba went wrong!!!')
        }
    },2000)
})

async function consumePromiseFive(){//another way other than then , catch,finally
   try{
    const response=await promiseFive
    console.log(response);
   }catch(error){
    console.log(error);
   }
}
consumePromiseFive()


// async function getallUsers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data=await response.json()//convert the response into json and use await because it takes time to convert into json
//     console.log(data);
//     }catch(error){
//         console.log("E:",error);
//     }
// }
//getallUsers()

 ///or//
 fetch('https://jsonplaceholder.typicode.com/users')
 .then(function(response){
    return response.json()
 })
 .then(function(data){
    console.log(data);
 })
 .catch(function(error){
    console.log(error);
 })