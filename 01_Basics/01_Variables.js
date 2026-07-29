const accountId = 932595
let accountEmail = "arb@gmail.com"
var accountPassword = "4518"
accountCity = "Pune"
let accountState;

// accountId = 2 // not allowed

accountEmail = "Avi@gmail.com"
accountPassword = "1845"
accountCity = "Nashik"

/*
    prefer not to use var
    because issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])