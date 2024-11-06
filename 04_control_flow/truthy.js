const userEmail=[] ////it beleives that a string is a true value and if the string is empty it believes as it is a false value//
//if empty array then truthy value//
if(userEmail){
    //console.log("Got user email");
}
else{
   // console.log("Dont have user email");
    
}

if(userEmail.length==0){
   // console.log("Array is empty")
}//Arrays//

const emptObj={}
if(Object.keys(emptObj).length==0){
   // console.log("Object is Empty");
    
}//Detect object if its empty or not



//Nullish Coalescing Operator(??) : null undefined

let val1;
//val1=5 ?? 10 //5
//val1=null ?? 16  //16
//val1=undefined ?? 16 //16

console.log(val1);


//Terniary Operator//
//condition ? true : false

const age=69
age<18 ? console.log("Hey Kiddo") : console.log("Hey")
