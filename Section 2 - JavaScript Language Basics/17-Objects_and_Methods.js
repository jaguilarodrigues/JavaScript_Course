/**
 * Objects and Methods
 */

var john = 
{
    firstName:  'Jonh',
    lastName:   'Smith',
    birthYear:  1992,
    family:     ['Jane', 'Mark', 'Bob', 'Emily'],
    job:        'teacher',
    isMarried:  false,
    calAge:     function()
    {
        this.age = 2019 - this.birthYear;
    }
};

john.calAge();
console.log(john);
