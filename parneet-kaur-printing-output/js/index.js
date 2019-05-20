// ASSIGNMENT
/*
TASK 1:
Declare three variables, a and b and c.
If a has value 3, b has value 5, and c doesn't have a value, alert the following expressions ( one after another ). Alert popup box has to show the following content for each expression (concatenate everything in one long expression using "\n" to make new lines):

a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/

let a = 3;
let b = 5;
let c;

let printingOutput = `a = 3\nb = 5\nc\n----------\na + b = ${a + b}\na - b = ${a - b}\na * b = ${a * b}\na / b = ${a / b}\na % b = ${a % b}\na += b = ${a += b}\na += b = ${a += b}\na -= b = ${a -= b}\na *= b = ${a *= b}\na /= b = ${a /= b}\na %= b = ${a %= b}\na == b = ${a == b}\na != b = ${a != b}\na > b = ${a < b}\na < b = ${a < b}\n!a && !c = ${!a && !c}\n!a || !c = ${!a || !c}`;

//printingOutput += `\n!a || !c = ${!a || !c}`;

console.log(printingOutput);


/*
TASK 2:
Declare the variable first_name and assign it with the value of your first name;
Declare the variable last_name and assign it with the value of your last name;
Declare the variable email and assign it with the value of your email;
Declare the variable output;
Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";
Assign output with gotten expression;
Print the output in JavaScript console.
*/

let first_name = "Parneet";

let last_name = "Kaur";

let email = "kaur0407@algonquinlive.com";

let output;

output=`${first_name} ${last_name}. You can contact me at ${email}`;

console.log(output);