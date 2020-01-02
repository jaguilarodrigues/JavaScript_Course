/**
 * The Ternary Operator and Switch Statements
 */

 var firstName = 'John';
 var age = 36;

 // Ternary operator
 age >= 18 ? console.log(firstName + ' drinks beer') 
 : console.log(firstName + ' drinks juice');

 var drink = age >= 18 ? 'beer' : 'juice';

 console.log(drink);

// Switch statement
var job = 'driver';
switch (job)
{
    case 'teacher':
        console.log(firstName + ' teacher kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
}

switch (true)
{
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default: 
        console.log(firstName + ' is a man.');
}