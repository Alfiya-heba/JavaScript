class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}
class Teacher extends User{ //using the extends keyword to inherit the properties from the user class
    constructor(username,email,password){
        super(username)//super keywprd is used to inherit
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}
const heba=new Teacher("Alfiya","a@yt.com","123")
heba.addCourse()
//heba.logMe()
const nonu=new User("Alfiyaheba")
nonu.logMe()
console.log(nonu instanceof User);//instance keyword is used to check wheteher it is the instance of it
console.log(heba instanceof Teacher);
console.log(heba instanceof User);



