/**
* Function Statements and Expressions
*/

//Function declaration
//  function whaDoYouDo(job, firstName){}

// Function expression
var whaDoYouDo = function(job, firstName)
{
    switch(job)
    {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in';
        case 'designer':
            return firstName + ' designs beautiful';
        default:
            return firstName + ' does something else';
    }
}

console.log(whaDoYouDo('teacher', 'John'));
console.log(whaDoYouDo('designer', 'Jane'));
console.log(whaDoYouDo('retired', 'Mark'));