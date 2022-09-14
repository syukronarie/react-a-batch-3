// Write a function that returns the provided string with
// the first letter of each word capitalized. Make sure the
// rest of the word is in lower case.
// --- Examples
//   capitalize("I'm a little tea pot") --> 'I'm A Little Tea Pot'
//   capitalize('sHoRt AnD sToUt') --> 'Short And Stout'

const capitalize = (string) => {
	// let newString = string.split(" ");
	// for (let i = 0; i < newString.length; i++) {
	// 	newString[i] =
	// 		newString[i].charAt(0).toUpperCase() +
	// 		newString[i].slice(1).toLowerCase();
	// }
	// newString = newString.join(" ");
	// console.log(newString);

	const strings = string.split(" ");
	const results = [];
	for (let i = 0; i < strings.length; i++) {
		const word = strings[i];
		results.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
	}
	return results.join(" ");
};

const capitalizeFirstLetter = (sentence) => {
	const newSentence = sentence.split(" ");
	const capitalize = newSentence
		.map((element) => {
			return element[0].toUpperCase() + element.slice(1).toLowerCase();
		})
		.join(" ");
	console.log(capitalize);
};

capitalizeFirstLetter("I'm a little tea pot");
capitalizeFirstLetter("sHoRt AnD sToUt");

// console.log(capitalize("nama anda siAPa"));
// console.log(capitalize("hello my name aziz"));
