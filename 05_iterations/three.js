// for of loop //

const numbers=[1,2,3,4,5]
for (const num of numbers) {
   // console.log(num);
}

const greetings="Hello World!!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}


//Maps//
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
//console.log(map);

for (const [key,value] of map) {
    //console.log(key,':-' ,value); // The output comes in the form of array so add [] in the loop for the variable name
}

const myObject={
    Alfiya:'Heba',
    Hi:'Heba'
}
for (const [key,value] of myObject) {
    console.log(key,':-',value);// gives an error saying objects cannot be iterated 
}



