const accountId= 144553
let accountEmail="alfiya@gmail.com"
var accountPassword="12345"
accountCity="Mysore"
let accountState;

// accountId=2 // Not Allowed

/*
Prefer not to use var because of issue in bloack scope and functional scope
*/

accountEmail="heba@gmail.com"
accountPassword="2135"
accountCity="Banglore"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
