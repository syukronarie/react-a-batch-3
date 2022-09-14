// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.

function fizzBuzz(n) {
	// time complexity O(n)
	// space complexity O(n)
	// for (let i = 1; i <= n; i++) {
	// 	if (i % 3 === 0 && i % 5 === 0) {
	// 		console.log("fizzbuzz");
	// 	} else if (i % 3 === 0) {
	// 		console.log("fizz");
	// 	} else if (i % 5 === 0) {
	// 		console.log("buzz");
	// 	} else {
	// 		console.log(i);
	// 	}
	// }

	// time complexity O(n)
	for (let i = 1; i <= n; i++) {
		console.log(n);
		let str = "";
		if (!(i % 3)) str += "fizz";
		if (!(i % 5)) str += "buzz";
		if (!str) str += i;
		console.log(str);
	}
}

fizzBuzz(27);
