// Getters and Setters//
class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    // get password(){
    //     return `${this._password}alfiyaheba`
    // }
    // set password(value){
    //     this._password=value

    // }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value//setters shouldnt be returned
        
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(values){
        this._email=values
    }
}
const heba=new User("a@alfiya.com","abcd")
console.log(heba.password);
console.log(heba.email);
