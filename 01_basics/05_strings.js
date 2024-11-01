const name="Alfiya Heba"
const city="Mysore"
console.log(`Hello, I am ${name} and i am from ${city}`);
console.log(`Hello, I am ${name.toUpperCase()} and i am from ${city.toLowerCase()}`);


//Another way to declare the string//
 const myname=new String("Alfiya-Heba")
// const city=new String("Mysore")

// console.log(myname[0]);
// console.log(myname.__proto__);

// console.log(myname.length);//for length//
// console.log(myname.toLowerCase());
// console.log(myname.charAt(5));//at what index which character , indexing starts from 0
// console.log(myname.indexOf('b'));


//Substring//
const newmyName=myname.substring(0,5)
//console.log(newmyName);

//Slice//
const anotherName=myname.slice(-7,5)//Negavtive can be also used//
// console.log(anotherName);

//Trim//
const myyName="    Alfiya      "
// console.log(myyName);
// console.log(myyName.trim());//To trim the extra spaces
// console.log(myyName.trimStart());
// console.log(myyName.trimEnd());

//Replace//
const url="https://alfiyaheba.com/alfiya%20heba"
// console.log(url.replace('%20','-'));
// console.log(url.includes('alfiya'));//true
// console.log(url.includes('Chintu'));//false


//Split//
const newNames="Alfiya-Heba-Chintu"
console.log(newNames.split('-'));







 