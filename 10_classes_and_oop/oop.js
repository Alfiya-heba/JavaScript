//object literal//
const user={
    username:"Alfiya",
    loginCount:15,
    signedIn:true,

    getUserDetails:function(){
        //console.log("Got user details from the database");
        //console.log(`Username:${this.username}`);
        //console.log(this);//this is the current context//
    }
}
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);




//Constructor function//
//Constructor function gives a new instance everytime or a copy so use (new)
//1.new creates a empty object which is called instance
//2.Constructor function call is done by new keyword
//3.this keyword is injected inside it 

function users(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    this.greetings=function(){
        console.log(`Welcome ${this.username}`);
    }

    return this//by default implicitely defined//
}
const userOne= new users("Alfiya",16,true)
const userTwo=new users("Heba",12,false)//values are being override
console.log(userOne);
console.log(userTwo)


