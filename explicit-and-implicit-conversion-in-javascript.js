/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// -----------------Part 1------------------

/*let result = "5" - 2;
console.log("The result is: " + result);*/

let result = Number("5") - 2;  
// Number("5") converts string to number → 5 - 2 = 3
console.log("The result is: " + result);

/*let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}*/
// Fix 2: Convert string "false" properly to a boolean
let isValid = ("false" === "true");  
// Instead of Boolean("false") (which is true), we check actual value
// "false" === "true" → false
if (isValid) {
  console.log("This is valid!");
} else {
  console.log("This is NOT valid!");
}


/*let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);*/
// Fix 3: Convert string "25" to number before addition
let age = Number("25");  
// Converts string to number → 25

let totalAge = age + 5;  
// Now it's numeric addition → 25 + 5 = 30

console.log("Total Age: " + totalAge);
//--------------------Part 2:------------------

//  Implicit Type Conversion
let value1 = "10";
let result1 = value1 * 2;  

// "*" forces conversion from string → number
console.log("Implicit Conversion:");
console.log("Before:", value1, "| Type:", typeof value1);
console.log("After:", result1, "| Type:", typeof result1);


//  Explicit Type Conversion (with edge case: NaN)
let value2 = "hello";
let result2 = Number(value2);  

// "hello" cannot be converted to a number → NaN
console.log("\nExplicit Conversion (NaN example):");
console.log("Before:", value2, "| Type:", typeof value2);
console.log("After:", result2, "| Type:", typeof result2);


//  Explicit Conversion (null example)
let value3 = null;
let result3 = Number(value3);  

// null converts to 0
console.log("\nExplicit Conversion (null example):");
console.log("Before:", value3, "| Type:", typeof value3);
console.log("After:", result3, "| Type:", typeof result3);
