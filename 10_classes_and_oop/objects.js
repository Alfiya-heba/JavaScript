function multiplyBy5(num){
    this.num=num
    return num*5
}
multiplyBy5.power=2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); //{} by default it sets the context of the prototype that method's this is the this keyword used below

function createUser(username,score){
    this.username=username // this keyword sets the current context
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}

createUser.prototype.printMe=function(){
    console.log(`Score is ${this.score}`);
    
}
const alfiya= createUser("Alfiya",10)
const heba=new createUser("Heba",16)

//alfiya.printMe()//output will be 10 because it uses the (this--)and use new keyword
heba.printMe()


//Here's what happens behind the scenes when the new keyword is used:

//A new is created--The new keyword inititates the creation of a new JavaScript object.




