/**
* Loops and Iteration
*/

//for loop 
for (var i = 0; i < 10; i++)
{
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++)
{
    console.log(john[i]);
}

//while loop
var i = 0;
while (i < john.length)
{
    console.log(john[i]);
    i++;
}


// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++)
{
    if(typeof john[i] !== 'string') continue; 
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++)
{
    if(typeof john[i] !== 'string') break; 
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--)
{
    console.log(john[i]);
}