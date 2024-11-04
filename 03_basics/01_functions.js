function saymyname(){
    console.log("A");
    console.log("L");
    console.log("F");
    console.log("I");
    console.log("Y");
    console.log("A");
}
//saymyname()

function add(){
    const a=10
    const b=16
    const c=a+b
    console.log(c);
}
//add()



// function add2numbers(num1,num2){
//     console.log(num1+num2);
// }
// add2numbers(2,3)

function add2numbers(num1,num2){
    //let result=num1+num2
    //return result
    return num1+num2
}
const result=add2numbers(2,2)
//console.log("Result:",result);

function loginuserMessage(username){
    if(username===undefined){//!username
        console.log("Please Enter the username");
        return
    }
    return `${username} has just logged in`
}
//console.log(loginuserMessage());

// function calculateCartPrice(...num1){///... is the rest operator///
//     return num1
// }
// console.log(calculateCartPrice(200,300,400,500,600,700))

function calculateCartPrice(val1,val2,...num1){
    return num1
}
//console.log(calculateCartPrice(500,400,300,200,100));//300,200,100
