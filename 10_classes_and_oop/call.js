function setUsername(username){
    this.username=username
    console.log("Called");
    
}

function createUser(username,email,password){
    //setUsername(username)//this hasnt called the function but took only the reference 
    setUsername.call(this,username)// use this 

    this.email=email
    this.password=password
}

const heba=new createUser("Alfiya","a@gmail.com","123")
console.log(heba);
