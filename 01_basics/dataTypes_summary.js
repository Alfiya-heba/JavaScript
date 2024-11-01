//  Primitive Data Type 7 Types:
//  String
//  Number
//  Boolean
//  null(empty)
//  undefined
//  Symbol (make a value unique)
//  BigInt


//Symbol idea//
const id=Symbol("alfiya");
const anotherId=Symbol("alfiya");
console.log(id==anotherId);//false

// Reference Type or Non Primitive Data Type:
// Arrays
// Objects
// Functions


//Arrays//
const names=["Alfiya","Heba","Nonu","Chintu"]

//Objects//
let myObj= {
    name:"Alfiya",
    age:21,
}


//Functions//

let myFunction= function() {

}

// JavaScript is dynamically typed because it checks the type during the runtime.



///*************Stack And Heap Memory in Js***************/
//Stack Memory is used in all primitive data types//
//Heap Memory is used in all Non-Primitive Data Types//

let myName="Alfiya Heba"
let anotherName=myName
 anotherName="Heba Alfiya"
console.log(anotherName);


let userOne={
    name:"Alfiya Heba",
    email:"alfiya@gmail.com"
}
let userTwo=userOne

userTwo.email="alfiyaheba@google.com"
console.log(userOne.email)
console.log(userTwo.email);

