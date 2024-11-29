//getOwnPropertyDescriptor is a object property that has hidden things of the objects

//console.log(Math.PI); has the fixed value of 3.14..........


const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(descriptor);

const heba={
    name:"Alfiya",
    age:21,
    isLoggedin:true,

    isAvailable:function(){
        console.log("*****************");
        

    }
}
console.log(heba);
console.log(Object.getOwnPropertyDescriptor(heba,"name"));

//define propert

Object.defineProperty(heba,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(heba,"name"));//chnaging the proprty

for (let [key,value] of Object.entries(heba)) {
    if(typeof value != 'function'){

    console.log(`${key}:${value}`);
    }
}



