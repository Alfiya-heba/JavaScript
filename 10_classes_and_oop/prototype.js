// let myName="Alfiya     "
// //console.log(myName.length);//gives the otuput by taling the spaces also (11)
// //console.log(myName.trim().length);//gives the output by trimming the spaces//
// //But this cant be used everywhere like
// let myLname="Heba     "
// console.log(myLname.trim().length);//the trim function should be used everywhere inorder to cut down the unwanted spaces//


let myNames=["Alfiya","Nonu"]

let myFullName={
    Alfiya:"Heba",
    Nonu:"Chintu",
    getAlfiya:function(){
        //console.log(`Alfiya's full name is${this.Alfiya}`);
    }
}

//Object.prototype.alfiya=function(){//object adds the new proprry which can be accesses ny all like array function strings
    //console.log(`Alfiya is present in all objects`);
    
//}
//myFullName.alfiya()
//myNames.alfiya()


Array.prototype.heyalfiya=function(){//but arrays prototype gives access to only array but but objects
    //console.log(`Alfiya says Hello!!!!`);
    
}
//myFullName.heyalfiya()
myNames.heyalfiya()



///***********Inheritence********///

const user={
    name:"Alfiya",
    email:"alf@youtube.com"
}

const teacher={
    makevideo:true
}
const TeachingSupport={
    available:false
}
const Ta={
    makeAssignment:"Hii Alfiya",
    __proto__:TeachingSupport // making the proptopye which can access the data from the other object

}
teacher.__proto__=user//prototype inheritance
//but this is the old way//

//Modern Syntax//
Object.setPrototypeOf(TeachingSupport,teacher)


let anotherUserName="AlfiyaHeba         "
String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`True length is:${this.trim().length}`);
}
anotherUserName.truelength()