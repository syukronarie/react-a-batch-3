// syntax to declare variable in JS
// let, var, const
// camel case

// global scope

// let
let firstName = "Arie";

console.log({ firstName }); // Arie

if (true) {
	// if scope -- local scope
	let lastName = "Syukron";
	console.log({ firstName });
	console.log({ lastName });
}

function sayHello() {
	let score = 80;
	console.log({ score });
}

sayHello();

// wrong ( calling let variable in outside of scope )
// console.log({ score });
// console.log({ lastName });
