//*****************Conversions***************** */


let score="10abc";
// 2 Methods to find the type//
// console.log(typeof score);
// console.log(typeof (score));// using function Eg:(score)

//String to Number//

 let valueInNumber=Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // Nan= Not a Number// //Output//



 let isLoggedIn=1
 let booleanisLoggedIn=Boolean(isLoggedIn)
// console.log(booleanisLoggedIn) 

// 1 -- True
// 0 --false
// "" --false
// "Alfiya"--true


//Number to string//
let someNumber=16
let stringNumber=String(someNumber)
// console.log( typeof stringNumber);


//*****************Operations************************//

let value=10
let negValue=-value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); //Power value//
// console.log(2/2);
// console.log(2%2);


let str1="Hello"
let str2=" Alfiya"
let str3= str1+str2
// console.log(str3);


// console.log(1+1);//2
// console.log("1"+1);//11
// console.log(1+"1");//11
// console.log("1"+2+2);//122
// console.log(1+2+"2");//32
// console.log((3+4)*5%3);//2

// console.log(+true);//1
// console.log(+" ");//0

// let gameCounter=100
// ++gameCounter;
// console.log(gameCounter);

// //Postfix//
// let x=3;
// let y=x++;
// console.log(y);
// // x is 4 and y is 3//

//prefix//
let x=4;
let y=++x;
console.log(y);
// x is 5 and y is 5//

