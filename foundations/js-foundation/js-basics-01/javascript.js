console.log("Test console.log");

// working with variables
let admin;

let name = "John";

admin = name;

alert(admin);

// giving the right name
let ourPlanetName = "Earth"

let currentUserName = "John"

console.log(ourPlanetName);
console.log(currentUserName);

// constants - uppercase constants
const COLOR_RED = "#F00" // Capital-named constants are only used as aliases for “hard-coded” values.

const BIRTHDAY = '18.10.2001' // In this code, birthday is exactly like that. So we could use the upper case for it.

const age = (BIRTHDAY); // age is evaluated in run-time. Today we have one age, a year after we’ll have another one. It is constant in a sense that it does not change through the code execution. But it is a bit “less of a constant” than birthday: it is calculated, so we should keep the lower case for it.

console.log(COLOR_RED);
console.log(BIRTHDAY);
console.log(age);