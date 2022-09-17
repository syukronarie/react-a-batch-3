const languages = [
	"English",
	"Finnish",
	"English",
	"French",
	"Spanish",
	"English",
	"French",
	"Indonesia",
];

const setOfLanguages = new Set(languages);

console.log({ setOfLanguages });

for (let lang of setOfLanguages) {
	console.log(lang);
}

console.log(setOfLanguages.size);
setOfLanguages.add("Arabic");

console.log({ setOfLanguages });

const numbers = [1, 2, 3, 4, 5, 6, 7, 2, 3, 1];

const remDups = [...new Set(numbers)];
console.log(remDups);
