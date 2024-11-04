const user={

}
//console.log(user);

const user1=new Object()//declaring or creating the object using constructor//
//console.log(user1);

user.name="Nonu",
user.age=22,
user.email="alf@gmail.com",
user.isLoggedIn=true
//console.log(user);

const newobj={
    name:"Alfiya",
    age:22,
    fullname:{
        userfullname:{
            fname:"Alfiya",
            lname:"Heba"
        }
    }
}
//console.log(newobj.fullname.userfullname.fname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

//const obj4=Object.assign({},obj1,obj2)//Type1 to access
const obj4={...obj1,...obj2,...obj3}

//console.log(obj4);

//console.log(user);
//console.log(Object.keys(user));
//console.log(Object.values(user));
console.log(user.hasOwnProperty('name'));
console.log(user.hasOwnProperty('games'));