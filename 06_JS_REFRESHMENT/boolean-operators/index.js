// boolean (true || false)

// Truthy values - Falsy values

// Truthy values
// * All numbers(positive and negative) are truthy except zero
// * All strings are truthy except an empty string ('')
// * The boolean true

// Falsy values
// * 0
// * 0n
// * null
// * undefined
// * NaN
// * the boolean false
// * '', "", ``, empty string

// ternary operator

const isValidated = false;
const NAME = "Joyo";

const user = isValidated ? NAME : null;

console.log(user);

let names = ["Muji", "Takim", "Anang"];

// Binary Logical Operators
const data = names ?? null;

console.log(data);

// optional chaining
const student = {
	firstName: "Fadil",
	lastName: "Aziz",
};

const gender = student?.gender;

console.log(gender);
