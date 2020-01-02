/**
 * Variable mutation and type coercion
 */

var firstName = 'Jaqueline';
var age = 25;

//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Student';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried);

// Variable mutation
age = 'twenty five';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried);

var lastName = prompt('What is her last name?');
console.log(firstName + ' ' + lastName);