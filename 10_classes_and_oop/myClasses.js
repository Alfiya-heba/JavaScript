// class is a keyword
// class has constructor

class Users{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abcd`
    }
    chnageUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const heba=new Users("Alfiya","A@yotube.com","1234")
//console.log(heba);
//console.log(heba.encryptPassword());
//console.log(heba.chnageUsername());

// behind the scene//

function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}
User.prototype.encryptPassword=function(){
    return `${this.password}abcd`
}
User.prototype.chnageUsername=function(){
    return `${this.username} heba`
}
const hebas=new User("Nonu","alan@google.com","123456")
console.log(hebas.encryptPassword());
console.log(hebas.chnageUsername());


