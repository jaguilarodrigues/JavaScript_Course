/**
 * Coding Challenge 4
 */

/*
Let's remember the first coding challenge where Mark and 
John compared their BMIs. Let's now implement the same 
functionality with objects and methods.

1. For each of them, create an object with properties for
their full name, mass, and height

2. Then, add a method to each object to calculate the BMI.
Save the BMI to the object and also return it from the 
method.

3. In the end, log to the console who has the highest BMI, 
together with the full name and the respective BMI. Don't 
forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). 
(mass in kg and height in meter).

GOOD LUCK 😀
*/

var john =
{
    firstName:  'John',
    lastName:   'Smith',
    mass:       65.7,
    height:     1.8,
    calBMI:     function()
    {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

var mark =
{
    firstName:  'Mark',
    lastName:   'Silva',
    mass:       80,
    height:     1.9,
    calBMI:     function()
    {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

console.log(john);

mark.calBMI();
john.calBMI();

if(mark.BMI > john.BMI)
    console.log(mark.firstName + ' ' + mark.lastName +' has a higher BMI of '+ mark.BMI);
if(john.BMI > mark.BMI)
    console.log(john.firstName + ' ' + john.lastName +' has a higher BMI of '+ mark.BMI);
if(john.BMI === mark.BMI)
    console.log(mark.firstName + ' ' + mark.lastName + ' and ' + john.firstName + ' ' + john.lastName +' BMI are equal.' );