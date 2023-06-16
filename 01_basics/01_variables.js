const accountId = 293949
let accountEmail = "Sultan@google.com"  
var accountPassword = "09876"
accountCity = "Delhi"
let accountState;

// accountId = 2 // not allowed

accountEmail = "sultan@k.com"
accountPassword = "54321"
accountCity = "Chandigarh"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])