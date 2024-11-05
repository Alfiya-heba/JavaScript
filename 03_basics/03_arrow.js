const user={
    username:"Alfia",
    price:999,
    welcomeMessage:function(){
        //console.log(`${this.username}, welcome to the website`)
        //console.log(this);// this is about current context//
    }

}
// user.welcomeMessage()
// user.username="Chintu"
// user.welcomeMessage()
//console.log(this);//{}


// function chintu(){
//     let username="Heba"
//     console.log(this.username);//undefined because we cant use this keyword inside the function
// }
// chintu()

// //or//
// const chintu=function(){
//     let username="Heba"
//     console.log(this.username);   
// }
// chintu()

/// Arrow function///
const chintu=() =>{
    let username="Heba"
    console.log(this.username);
}
//chintu()//undefined


//implicit return//
const addTwo=(num1,num2)=>(num1+num2)
//console.log(addTwo(2,2));

//to return objects//
const addThree=(num1,num2,num3)=>({username:"Alf"})
console.log(addThree(3,3));

