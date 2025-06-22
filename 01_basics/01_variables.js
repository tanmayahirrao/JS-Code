const accountId = 4125
let accountEmail = 'tanmay@gmol.com'
var accountPassword = '1947'
accountCity = 'Pune'
let accountState;

//accountId = 2 // not allowed TypeError: Assignment to constant variable.

accountEmail = 'hc@hc.com'
accountPassword = '2222'
accountCity = 'Dhule'

console.log(accountId);

/*
PLease dont use var (because issue in block scope and functional scope)
use let, const instead
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
