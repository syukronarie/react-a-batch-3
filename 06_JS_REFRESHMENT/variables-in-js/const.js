// const
// CONSTANT -- Constant. Variables. A constant does not change its value over time.

const GENDER = "Male";
console.log({ GENDER });

if (true) {
	// if scope -- local scope
	const BOOK_NAME = "Atomic Habits";
	console.log({ GENDER });
	console.log({ BOOK_NAME });
}

function sayHello() {
	const SCORE = 80;
	console.log({ SCORE });
}

sayHello();

console.log({ GENDER }); // { GENDER: 'Male' }
console.log({ SCORE }); // Reference Error: not declared
