/*
WEB U1B1 + U1B2 Practice
Strings + Numbers (NO functions)
*/

console.log("\n=== PART A: Variables + typeof ===\n");

// TODO A1: Create a variable called firstName (string)'
let firstName = "Baamba";
let lastName = "Baambatwoba";
let gradeLevel =  7;
console.log(firstName, "String");
console.log(lastName, "String");
console.log(gradeLevel, "Number");
// TODO A2: Create a variable called lastName (string)
// TODO A3: Create a variable called gradeLevel (number)
// TODO A4: Log each variable and its typeof

// Example output style (you can match this format):
// firstName: Nick | type: string


console.log("\n=== PART B: Building strings ===\n");

// TODO B1: Create fullName using firstName + lastName (include a space)
let fullName = firstName + " " + lastName;
let usernameDirty = "NHagiwara";
let usernameCleanedUp = usernameDirty.toLowerCase();
console.log("Username: ",usernameCleanedUp)
console.log(fullName);
// TODO B2: Create a username using:
// - first letter of firstName + lastName
// - all lowercase
// Example: "narmstrong"
// TODO B3: Log fullName and username

// Helpful hints (not required):
// - firstName[0]
// - .toLowerCase()


console.log("\n=== PART C: String skills ===\n");

console.log(fullName.length);
console.log = (fullName.toUpperCase);
let trimmed = fullName.trim();
console.log(trimmed[trimmed.length - 1]);
console.log(trimmed.includes(" "));

// TODO C3: Log the last character of fullName
// TODO C4: Check if fullName includes a space (true/false) and log it
// TODO C5: Replace spaces in fullName with hyphens and log it
// Example: "Nick-Armstrong"


console.log("\n=== PART D: Numbers + math ===\n");

// Scenario: You run a tiny school store.
// You sold some items and need totals.

// TODO D1: Create variables:
let pencilsSold = 13;
let pencilPrice = 3.99;
let notebooksSold = 4;
let notebooksPrice = 4.99;
// - pencilsSold (number)
// - pencilPrice (number)
// - notebooksSold (number)
// - notebookPrice (number)
// Choose realistic values (example: pencilsSold = 17, pencilPrice = 0.25)

// TODO D2: Calculate subtotal = (pencilsSold * pencilPrice) + (notebooksSold * notebookPrice)
let subtotal = (pencilsSold * pencilPrice) + (notebooksSold * notebooksPrice);
let taxRate = 0.07;
let taxAmount = subtotal * taxRate;
let total = subtotal + taxAmount;
console.log(total.toFixed(2));


    console.log("\n=== PART E: Converting strings to numbers ===\n");

// Scenario: Data came in as strings (like form inputs)
const inputA = "12";
const inputB = "5.5";

let numA = parseInt(inputA);
let numB = parseInt(inputB);
console.log(numA + numB);
console.log(inputA + inputB);
console.log(inputA, "Number", inputB, "Number");
// TODO E1: Create numA and numB as numbers (not strings)
// TODO E2: Log numA + numB (should be 17.5 if done right)
// TODO E3: Log inputA + inputB (this will be string concatenation)
// TODO E4: Log the typeof of inputA and numA to prove the difference

// Stretch (still no functions):
console.log(Math.round(numB));
console.log(Math.floor(numB));
console.log(Math.ceil(numB));
// TODO E5: Round numB to the nearest whole number and log it
// TODO E6: Use Math.floor and Math.ceil on numB and log both