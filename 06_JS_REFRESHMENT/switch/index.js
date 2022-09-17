const score = 81;

function decideScore(score) {
	let result;
	switch (true) {
		case score >= 80:
			result = "Sangat Baik";
			break;
		case score >= 70:
			result = "Baik";
			break;
		case score >= 60:
			result = "Cukup Baik";
			break;
		default:
			result = "Buruk";
			break;
	}
	return result;
}

const result = decideScore(score);
console.log({ result });

function getDayName(day) {
	switch (day) {
		case 0:
			console.log("It's Sunday");
			break;
		case 1:
			console.log("It's Monday!");
			break;
		case 2:
			console.log("It's Tuesday.");
			break;
		case 3:
			console.log("Wednesday already!");
			break;
		case 4:
			console.log("It’s Thursday");
			break;
		case 5:
			console.log("Happy Friday!");
			break;
		case 6:
			console.log("It’s Saturday!");
			break;
		default:
			console.log("No case matched");
	}
}

// Set the current day of the week to a variable, with 0 being Sunday and 6 being Saturday
const day = new Date().getDay();

getDayName(day);
