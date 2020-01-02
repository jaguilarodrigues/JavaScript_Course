/**
 * If / else statements
 */

 var firstName = 'John';
 var civilStatus = 'married';

 if (civilStatus === 'married')
 {
     console.log(firstName + ' is married');
 }
 else
 {
     console.log(firstName + ' will hopefully marry soon ')
 }

 var isMarried = false;
 if (isMarried)
 {
     console.log(firstName + ' is married');
 }
 else
 {
     console.log(firstName + ' will hopefully marry soon ')
 }

var massJohn = 80;
var massMark = 70;
var heightJohn = 1.8;
var heightMark = 1.7;

var BMIJohn = massJohn / (heightJohn * heightJohn);
var BMIMark = massMark / (heightMark * heightMark);

console.log(BMIMark + ' ' + BMIJohn);

if (BMIMark > BMIJohn)
{
    console.log('Mark\'s BMI higher than John\'s.');
}
else
{
    console.log('John\'s BMI higher than Mark\'s.');
}