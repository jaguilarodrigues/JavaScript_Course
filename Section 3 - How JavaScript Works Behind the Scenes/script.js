/**
 * Lecture: Hosting
 */
/*
calculateAge(1990);

//function declaration
function calculateAge(year)
{
	console.log(2016-year);
}

//retirement(1956); //only works with function declaration

//function expression
var retirement = function(year)
{
	console.log(65 (2016 - year));
}

//variables
console.log(age);
var age = 23;  //global execution context
console.log(age);

function foo()
{
	console.log(age);
	var age = 65;
	console.log(age);
}
foo();
console.log(age);
*/

/**
* Scoping
*/
/*
//First scoping example
var a = 'Hello!';
first();

function first(){
	var b = 'Hi!';
	second();

	function second(){
		var c = 'Hey!';
		third();
	}
}

function third()
{
	var d = 'John';
	//console.log(c);
	console.log(a + d);
}
*/

/**
 * The 'this' Keyword
 */

 /* Regular function call: 'this' keyword points to the 
global object (window object).*/

/* Method call: 'this' points to the object that is 
calling*/

/*
console.log(this);

calculateAge(1995);

function calculateAge(year)
{
	console.log(2016-year);
	console.log(this);
}

var john = 
{
	name:	'Jonh',
	yearOfBirth:	1998,
	calculateAge: function()
	{
		console.log(this);
		console.log(2016 - this.yearOfBirth);

		function innerFunction()
		{
			console.log(this);
		}
		innerFunction();
	}
}

john.calculateAge();

var mike = 
{
	name: 'Mike',
	yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;;
mike.calculateAge();
*/