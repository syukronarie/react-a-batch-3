const starts = [1, 2, 3, 4, 5, 6];

const sumArrOfNum = starts.reduce((prevVal, currVal) => {
	return prevVal + currVal;
}, 1);

console.log({ sumArrOfNum });

const topSix = [
	{ name: "Nigeria", position: "1st", points: 43 },
	{ name: "England", position: "2nd", points: 37 },
	{ name: "USA", position: "3rd", points: 35 },
	{ name: "South Africa", position: "4th", points: 30 },
	{ name: "Brazil", position: "5th", points: 27 },
	{ name: "Korea", position: "6th", points: 23 },
];

const sumPoint = topSix.reduce((accumulator, curr) => {
	return accumulator + curr.points;
}, 0);

console.log({ sumPoint });
