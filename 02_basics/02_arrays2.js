const names=["Alfiya","Heba","Nonu","Chintu"]
const fruits=["Apple","Banana","Cherry","Dates"]

const newName=names.concat(fruits)
//console.log(newName);

const myNew=[...names,...fruits]
//console.log(myNew);

const anotherArr=[1,2,3,[4,5,6],6,7,[7,8,9,[6,7,8]]]
const real_Array=anotherArr.flat(Infinity)
//console.log(real_Array);

console.log(Array.isArray("Alfiya"));
console.log(Array.from("Alfiya"));

const score1=100
const score2=200
const score3=300
console.log(Array.of(score1,score2,score3));




