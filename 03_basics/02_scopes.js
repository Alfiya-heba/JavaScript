//Scope//
let a=300
if(true){
    let a=10
    const b=20
    var c=30
    //console.log("Inner:", a)//it prints only the block scope value and the scope within this is called as block scope
}
//console.log(a);
//console.log(b);
//console.log(c);// prints because we are usign var datatype so avoid usign var
//This is global scope//

//Nested Scope//
function one(){
    const username="Alfiya"
    function two(){
        const webiste="instagram.com"
        //console.log(username);
    }
    //console.log(webiste);
    two()

}
one()
//The child node can access from the parent node but the parent node cannot access from the child node//

if(true){
    const username="Alfiya"
    if(username==="Alfiya"){
        const website=" Snapchat"
        //console.log(username+website);
    }
   // console.log(webiste);
}
//console.log(username);


///***********Interesting***************/
console.log(addOne(68));
function addOne(num){
    return num + 1
}
console.log(addOne(68));

//Console.log or function call can be done before declaring the function///

 /////Or/////

const addTwo=function(num){
    return num+2
}
console.log(addTwo(55));
//But the function call in this type cannot be called before function declaration//