/**
* Coding Challenge 3
*/

/*
John and his family went on a holiday and went to 3 
different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a 
simple tip calculator (as a function). He likes to tip 
20% of the bill when the bill is less than $50, 15% when 
the bill is between $50 and $200, and 10% if the bill is 
more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it 
with 20/100 = 0.2)

GOOD LUCK 😀
*/

var bills = new Array (124, 48, 268);
var tips = new Array ();
var finalPaid = new Array ();

function tip(bill)
{
    if(bill < 50)
        return bill * 0.2;
    if(bill >= 50 && bill < 200)
        return bill * 0.15;
    if(bill >= 200)
        return bill * 0.1;
}

tips.push(tip(bills[0]));
tips.push(tip(bills[1]));
tips.push(tip(bills[2]));

finalPaid.push(bills[0] + tip(bills[0]));
finalPaid.push(bills[1] + tip(bills[1]));
finalPaid.push(bills[2] + tip(bills[2]));

console.log(bills);
console.log(tips);
console.log(finalPaid);