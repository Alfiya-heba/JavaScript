const User={
    _email:'alf@alfiyaheba.com',
    _password:'abcdefgh',

    get email(){
        return this._email.toUpperCase()
    },
    Set(value){
        this._email=value
    }
}
const heba=Object.create(User)//factory function
console.log(heba._password);
