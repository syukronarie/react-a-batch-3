// QUESTION DESCRIPTION
// One of the shops in HackerMall is offering discount coupons based on a puzzling problem.
// There are n tags where each tag has a value denoted by val[i].
// A customer needs to choose the tags in such a way that the sum of values is even.

// ! The goal is to find the maximum possible even sum of values of tags that can be chosen.
// Note:
// * It is guaranteed that there is at least one tag with an even value.
// * The tags can have positive or negative values.
// * It can be possible to choose no tags at all.

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on("end", function () {
	inputString = inputString.split("\n");

	main();
});

function readLine() {
	return inputString[currentLine++];
}

/*
 * Complete the 'getMaximumEvenSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY val as parameter.
 */

function sumReturnEven(arr) {
	let result = 0;
	for (let n of arr) {
		result += n;
	}
	console.log({ arr, result });
	if (!(result % 2)) {
		return result;
	}
	return false;
}

function getMaxVal(arr) {
	return arr.sort((a, b) => a - b)[arr.length - 1];
}

function genOneMinVals(arr) {
	const results = [];
	for (let n of arr) {
		if (n < 0) {
			results.push(n);
		}
	}
	const filtered = arr.filter((val) => val > 0);
	if (filtered.length > 0) {
		for (let n of arr) {
			results.push(n);
		}
	}

	if (results.length > 0) {
		return results.sort((a, b) => a - b)[0];
	}

	return arr;
}

function getMaximumEvenSum(vals) {
	// Write your code here
	const oneMinVals = genOneMinVals(vals);
	const sortVals = [...vals].sort((a, b) => a - b);
	const evenVals = [...vals].filter((val) => val > 0);
	const nonOddVals = [...vals].filter((val) => {
		if (!(val % 2)) return val;
	});
	const uniqueVals = [...new Set([...vals])];

	const resSortVals = sumReturnEven(sortVals);
	const resEvenVals = sumReturnEven(evenVals);
	const resNonOddVals = sumReturnEven(nonOddVals);
	const resUniqueVals = sumReturnEven(uniqueVals);
	const resOri = sumReturnEven(vals);
	const resOneMinVals = sumReturnEven(oneMinVals);

	const results = [];

	if (resSortVals) results.push(resSortVals);
	if (resEvenVals) results.push(resEvenVals);
	if (resNonOddVals) results.push(resNonOddVals);
	if (resUniqueVals) results.push(resUniqueVals);
	if (resOri) results.push(resOri);
	if (resOneMinVals) results.push(resOneMinVals);

	console.log({
		resSortVals,
		resEvenVals,
		resNonOddVals,
		resUniqueVals,
		resOneMinVals,
	});

	return getMaxVal(results);
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const valCount = parseInt(readLine().trim(), 10);

	let val = [];

	for (let i = 0; i < valCount; i++) {
		const valItem = parseInt(readLine().trim(), 10);
		val.push(valItem);
	}

	const result = getMaximumEvenSum(val);

	ws.write(result + "\n");

	ws.end();
}
