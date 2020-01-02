/**
 * Coding Challenge
 */

/* Problem
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: 
BMI = mass / height^2 = mass / (height * height). 
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. 
(Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

//1.
var massJohn = 75;
var massMark = 70;
var heightJohn = 1.8;
var heightMark = 1.7;

//2.
var BMIJohn = massJohn / (heightJohn * heightJohn);
var BMIMark = massMark / (heightMark * heightMark);

//3.
var isMarkBMIHigher = BMIMark > BMIJohn;

//4.
console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBMIHigher);