// Write a function that returns the number of vowels found within a string.
// Vowel characters are 'a', 'e', 'i', 'o', and 'u'.
// Make sure the function is case insensitive!
// --- Examples
//   vowels('What') --> 1
//   vowels('Why?') --> 0
//   vowels('aEiOu') --> 5
//   vowels('I am a world-class developer using iterations') --> 16

function vocal(str) {
	const strNew = str.split("");
	let jumlahVokal = 0;
	strNew.forEach((element) => {
		if (element === "I" || element === "i") jumlahVokal += 1;
		if (element === "A" || element === "a") jumlahVokal += 1;
		if (element === "U" || element === "u") jumlahVokal += 1;
		if (element === "E" || element === "e") jumlahVokal += 1;
		if (element === "O" || element === "o") jumlahVokal += 1;
	});
	console.log(jumlahVokal);
}

vocal("aiueo");

function vowels1(word) {
	let totalWord = 0;
	for (let i = 0; i < word.length; word++) {
		word[i] === "a" || "i" || "u" || "e" || "o"
			? (totalWord += 1)
			: (totalWord += 0);
	}
	return totalWord;
}

vowels1("test");

function vowels2(check) {
	let jml = 0;
	check.split("").map((m) => {
		if (m == "a" || m == "i" || m == "u" || m == "o") {
			jml++;
		}
	});
	return console.log(jml);
}

vowels2("what");

const vowels3 = (string) => {
	string = string.toLowerCase();
	let iteration = 0;
	for (let i = 0; i < string.length; i++) {
		if (
			string[i] == "a" ||
			string[i] == "e" ||
			string[i] == "i" ||
			string[i] == "o" ||
			string[i] == "u"
		) {
			iteration++;
		}
	}
	console.log(iteration);
};

vowels3("what");

const hurufVocal = ["a", "i", "u", "e", "o"];
const vocal5 = (string) => {
	let total = 0;
	for (let i = 0; i < string.length; i++) {
		if (hurufVocal.includes(string[i].toLowerCase())) {
			total += 1;
		}
	}
	return total;
};
console.log(vocal5("ABCDE"));

const vowels = ["a", "i", "u", "e", "o"];

function vowel6(str) {
	let saving = 0;

	for (let letter of str.toLowerCase()) {
		if (vowels.includes(letter)) {
			saving++;
		}
	}
	console.log(saving);
	return saving;
}

vowel6("I am a world-class developer using iterations");

const vomel7 = (string) => {
	const vomelRegex = /[aiueo]/gi;
	const vomelString = string.match(vomelRegex);
	let vomelResult = vomelString.length;
	console.log(vomelResult);
};
vomel7("I am a world-class developer using iterations");

const countVowels = (words) => {
	words = words.toLowerCase();
	const vowels = "aiueo".split("");
	let count = 0;
	for (let i of words) {
		if (vowels.includes(i)) {
			count++;
		}
	}
	return count;
};
console.log(countVowels("aEiOu"));

const getVowels = (string) => {
	let char = string.split("");
	let vowels = char.filter((x) => {
		return x === "a" || x === "i" || x === "u" || x === "e" || x === "0";
	});
	return vowels.length;
};

console.log(getVowels("askjiowyu"));

const containsVocalLetter = (letter) => {
	return /a|i|u|e|o|A|I|U|E|O/gm.test(letter);
};

const vowels9 = (string) => {
	let convertedString = [...string];
	let checkVocal = convertedString.map((letter) => containsVocalLetter(letter));
	let n = 0;
	for (i = 0; i < checkVocal.length; i++) {
		if (checkVocal[i] === true) {
			n++;
		}
	}
	console.log(n);
};

vowels9("What");
vowels9("Why?");
vowels9("aEiOu");
vowels9("I am a world-class developer using iterations");

// Rio Al Rasyid to Everyone (6.49 PM)
// Mohon maaf Mas, saya dating terlambat karena perjalanan pulang dari kampus tadi 🙏
// Me to Everyone (7.31 PM)
// https://www.bigocheatsheet.com/
// M. Mustakim Surya to Everyone (7.37 PM)
// Maaf telat mas, ini baru bisa masuk, hujan deras dan tadi mati listrik jadinya sinyal ga ada, ini baru hidup listrik lagi
// Me to Everyone (7.56 PM)
// // Write a function that returns the provided string with
// // the first letter of each word capitalized. Make sure the
// // rest of the word is in lower case.
// // --- Examples
// //   capitalize("I'm a little tea pot") --> 'I'm A Little Tea Pot'
// //   capitalize('sHoRt AnD sToUt') --> 'Short And Stout'
// Me to Everyone (8.05 PM)
// erlangga udh tuh santai bener
// Fahd Erlangga B.M to Everyone (8.06 PM)
// bingung bang
// Me to Everyone (8.06 PM)
// wkwk
// Muhammad Fadillah Abdul Aziz to Everyone (8.08 PM)
// [file: hasil.png]
// Harie Fairuzzaki to Everyone (8.09 PM)
// [file: capitalize.png]
// Muhammad Fadillah Abdul Aziz to Everyone (8.13 PM)
// const Capitalize = (string) => {
//   let newString = string.split(" ");
//   for (let i = 0; i < newString.length; i++) {
//     newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].slice(1);
//   }

//   newString = newString.join(" ");
//   console.log(newString);
// };
// Harie Fairuzzaki to Everyone (8.14 PM)
// function capitalize(str) {
//   const slices = str.slice(1);
//   const string = str[0].toUpperCase() + slices.toLowerCase();
//   console.log(string);
// }

// capitalize("hAriE");
// Mochammad Ilham Maulana to Everyone (8.16 PM)
// Hayu rek dikirim?
// Juan Carlos to Everyone (8.16 PM)
// function capitalize(str) {
//   const arr = str.split(" ");
//   for (i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//   }
//   const newStr = arr.join(" ");
//   console.log(newStr);
// }

// capitalize("sHoRt AnD sToUt");
// Juan Carlos to Everyone (8.19 PM)
// function capitalize(str) {
//   const arr = str.split(" ");
//   for (i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
//   }
//   const newStr = arr.join(" ");
//   console.log(newStr);
// }

// capitalize("sHoRt AnD sToUt");
// Zhafran Afif to Everyone (8.24 PM)
// const capitalizeString = (string) => {
//     let newString = string.split(' ')
//     for (let i = 0; i < newString.length; i++) {
//         newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].slice(1).toLowerCase()
//     }
//     const joinString = newString.join(' ')
//     console.log(joinString)
// }
// capitalizeString('Short AnD sToUt')
// Me to Everyone (8.27 PM)
// // Write a function that returns the number of vowels found within a string.
// // Vowel characters are 'a', 'e', 'i', 'o', and 'u'.
// // Make sure the function is case insensitive!
// // --- Examples
// //   vowels('What') --> 1
// //   vowels('Why?') --> 0
// //   vowels('aEiOu') --> 5
// //   vowels('I am a world-class developer using iterations') --> 16
// Daffa Damar Ardhika to Everyone (8.29 PM)
// const capitalizeFirstLetter = (sentence) => {
//     let newSentence = sentence.split(' ');
//     let capitalize = newSentence.map(element => {
//         return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
//     });

//     let result = capitalize.join(" ");
//     console.log(result)
// }

// capitalizeFirstLetter("I'm a little tea pot");
// capitalizeFirstLetter("sHoRt AnD sToUt");
// Muji Burrohman to Everyone (8.34 PM)
// function vokal(str) {
//   const strNew = str.split('');
//   let jumlahVokal = 0;
//   strNew.forEach((element) => {
//     if (element === 'I' || element === 'i') jumlahVokal += 1;
//     if (element === 'A' || element === 'a') jumlahVokal += 1;
//     if (element === 'U' || element === 'u') jumlahVokal += 1;
//     if (element === 'E' || element === 'e') jumlahVokal += 1;
//     if (element === 'O' || element === 'o') jumlahVokal += 1;
//   });
//   console.log(jumlahVokal);
// }

// vokal('aiueo');
// Muhammad Hafizh Zulian Susanto to Everyone (8.34 PM)
// function vowels(word){
//     let totalWord = 0
//     for(let i=0; i<word.length; word++){
//         word[i] == 'a' || 'i' || 'u' ||'e' || 'o' ? totalWord+=1 : totalWord+=0
//     }
//     return totalWord
// }
// Muhammad Agil to Everyone (8.35 PM)
// function vowels(check) {
//   let jml = 0;
//   check.split("").map((m) => {
//     if (m == "a" || m == "i" || m == "u" || m == "o") {
//       jml++;
//     }
//   });
//   return console.log(jml);
// }

// vowels("what");
// Muhammad Fadillah Abdul Aziz to Everyone (8.35 PM)
// const vowels = (string) => {
//   string = string.toLowerCase();
//   let iteration = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (
//       string[i] == "a" ||
//       string[i] == "e" ||
//       string[i] == "i" ||
//       string[i] == "o" ||
//       string[i] == "u"
//     ) {
//       iteration++;
//     }
//   }
//   console.log(iteration);
// };
// Jarot Setiawan to Everyone (8.36 PM)
// const hurufVocal = ["a", "i", "u", "e", "o"];
// const vocal = (string) => {
//     let total = 0;
//     for(let i=0; i<string.length; i++) {
//         if(hurufVocal.includes(string[i].toLowerCase())){
//             total += 1;
//         }
//     }
//     return total;
// }
// console.log(vocal("ABCDE"));
// Juan Carlos to Everyone (8.38 PM)
// const vowels = ["a", "i", "u", "e", "o"];

// function vowel(str) {
//   let saving = 0;

//   for (let letter of str.toLowerCase()) {
//     if (vowels.includes(letter)) {
//       saving++;
//     }
//   }
//   console.log(saving);
//   return saving;
// }

// vowel("I am a world-class developer using iterations");
// Zhafran Afif to Everyone (8.39 PM)
// const vomel = string => {
//     const vomelRegex = /[aiueo]/gi;
//     const vomelString = string.match(vomelRegex)
//     let vomelResult = vomelString.length
//     console.log(vomelResult)
// }
// vomel('I am a world-class developer using iterations')
// Mochammad Ilham Maulana to Everyone (8.41 PM)
// const countVowels = (words) => {
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   let count = 0;
//   for (let i of words) {
//     if (vowels.includes(i)) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(countVowels("aEiOu"));
// Anang Khoirul Fadli to Everyone (8.46 PM)
// const getVowels = (string) =>{
//     let char = string.split("")
//     let vowels = char.filter(x =>{
//         return x === "a" || x === "i" || x === "u" || x === "e" || x === "0";
//     })
//     return vowels.length;
// }

// console.log(getVowels("askjiowyu"));
// Daffa Damar Ardhika to Everyone (8.50 PM)
// mas ijin kirim
// Daffa Damar Ardhika to Everyone (8.50 PM)
// const containsVocalLetter = (letter) => {
//     return /a|i|u|e|o|A|I|U|E|O/gm.test(letter);
// }

// const vowels = (string) => {
//     let convertedString = [...string];
//     let checkVocal = convertedString.map(letter => containsVocalLetter(letter));
//     let n = 0
//     for (i = 0; i < checkVocal.length; i++) {
//         if (checkVocal[i] === true) { n++ }
//     }
//     console.log(n)
// }

// vowels('What')
// vowels('Why?')
// vowels('aEiOu')
// vowels('I am a world-class developer using iterations')
