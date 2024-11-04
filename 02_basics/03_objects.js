const mySyml=Symbol("Key1")

const user={
    name:"Alfiya",
    "fullname":"Alfiya Heba",
    [mySyml]:"myKey1",
    age:22,
    email:"alfi@google.com",
    location:"Mysore",
    isLoggedIn:true,
    userloginDays:["Monday","Wednesday"]
}
//console.log(user.fullname);
//console.log(user["location"]);
//console.log(user.mySyml);

user.name="Alfiya Heba Nonu"
//console.log(user.name);
//Object.freeze(user)
user.name="Alfiya"
user.email="nonu@microsoft.com"
//console.log(user);

user.greetings=function(){
    console.log("Hello");
}

user.greetingsTwo=function(){
    console.log(`Hello, ${this.name}`);
}
console.log(user.greetings());
console.log(user.greetingsTwo());