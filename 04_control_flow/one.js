//if statement//

 const isUserLoggedIn=true
 if(isUserLoggedIn){
   //console.log("Hey dude,Welcome to my Website");
    
 }


function checkEvenorOdd(num){
    if(num%2==0){
        //console.log(`The number ${num} is even number`)
    }
    
}
checkEvenorOdd(22)

const age=69
//if(age>50) console.log("Hi,Old lady"); //Without using {} is called implicit scoping


// //if else//
// if(condition){
//     console.log();
// }
// else{
//     console.log();
    
// }

const EligibilityCheck=function(age){
    if(age<18){
        //console.log(`${age} is not the Eligibilty age for voting`);
    }
    else{
        //console.log(`${age} is the Eligibility age for voting`);
    }
}
EligibilityCheck(15)

//Nested if-else 

let a;
const b=100
if(a>b){
    //console.log("A is grater than B");
}
else if(b>a){
    //console.log("B is grater than A");
}
else if(a==b){
   // console.log("A is equal to B")
}
else{
    //console.log("I dont know wht to do!!!")
}

const checkGreater=function(num1,num2){
    if(num1>num2){
        //console.log(`${num1} is greater than ${num2}`);
    }
    else if(num2>num1){
        //console.log(`${num2} is greater than ${num1}`);
    }
    else if(num1==num2){
       // console.log(`${num1} is equal to ${num2}`);
    }
    else{
        //console.log("Im stuckkkkkk!!!!!!!");
    }
}
checkGreater(2,)

const isUserLoggedInCurrently=true
const isUserWorking=false
const loggedinbyGoogle=false
const loggedinbyEmail=true

if(isUserLoggedInCurrently && isUserWorking){ //%% both true
    //console.log("Hey,User")
}
else{
    //console.log("Oops!!!! user has not logged in");
}

if(loggedinbyEmail|| loggedinbyGoogle){ // || is only one true 
    console.log("User has logged in");
     
}