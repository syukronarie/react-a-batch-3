// Data types in JS

// Value Types / Primitive
// 1. Number
// 2. String
// 3. Boolean
// 4. Symbol
// 5. Null
// 6. Undefined

// Reference Types / Non-Primitive
// 1. Object
// 2. Array
// 3. Function

// Value Types / Primitive

// Number
let score = 80;
let salary = 10_000_000;
let nan = NaN;

// String
let textEditor = "VS Code";
let age = "20";

// Boolean
let isValidated = true;
let isActived = false;

// Symbol
let reactSymbol = Symbol("React");

// Null
let data = null;

// Undefined
let initialData;

// Reference Types / Non-Primitive

// Object
const student = {
	firstName: "Fadil",
	lastName: "Aziz",
};

// Array
const names = ["Bima", "Angga"];

// Array of Object
const students = [
	{
		firstName: "Fadil",
		lastName: "Aziz",
	},
	{
		firstName: "Rizky",
		lastName: "Fauzi",
	},
];

// function
// function declaration
// has `this` as global variable
function sum1(a, b) {
	this.data = 10;
	console.log(this.data);
	return a + b;
}

// function expression
// has `this` as global variable
let sum2 = function (a, b) {
	this.data = 10;
	console.log(this.data);
	console.log(this);
	return a + b;
};

// arrow function
// has not `this` as global variable
let sum3 = (a, b) => {
	return a + b;
};

sum1(11, 20); // 31
sum2(10, 10); // 20
sum3(10, 11); // 11

// check is object in JS
function isObject(obj) {
	return obj === Object(obj);
}
