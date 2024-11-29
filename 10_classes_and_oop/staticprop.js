class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is${this.username}`);
    }
  static  createId(){// stops the access "static"
        return 123
    }
}
const heba=new User("Alfiya")
//console.log(heba.createId());


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const hebas=new Teacher(" Alfiya","a@.com")
console.log(hebas.logMe());
hebas.createId()//here also it doesnt give access
