// arrays//

const myArr=[0,1,2,3,"Alfiya",true];
//console.log(myArr[5]);
//console.log(myArr.length);


//Array methods//

// myArr.push("Heba")
// myArr.pop()
//myArr.unshift(6)
//myArr.shift()
// console.log(myArr.includes("Alfiya"));
// console.log(myArr.includes("Nonu"));
// console.log(myArr.indexOf("Alfiya"))
// console.log(myArr.indexOf("Nonu")); //-1 because the element is not present in the array

const newArr=myArr.join()// join chnages the type to string
// console.log(myArr);
// console.log(newArr);


//Slice ,splice//

console.log("A",myArr);
const newArr1=myArr.slice(1,3)
console.log(newArr1);
console.log("B",myArr);

const newArr2=myArr.splice(1,3)
console.log(newArr2);
console.log("C",myArr);






