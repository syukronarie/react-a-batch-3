// loops
// for loop
// while loop
// do while loop

const oldUsers = [
	{
		id: 1,
		firstName: "Addie",
		lastName: "Binnie",
		email: "abinnie0@nba.com",
		gender: "Female",
	},
	{
		id: 2,
		firstName: "Patty",
		lastName: "Bergen",
		email: "pbergen1@accuweather.com",
		gender: "Female",
	},
	{
		id: 3,
		firstName: "Oneida",
		lastName: "Di Ruggiero",
		email: "odiruggiero2@sfgate.com",
		gender: "Female",
	},
	{
		id: 4,
		firstName: "Kayle",
		lastName: "Whiteman",
		email: "kwhiteman3@aboutads.info",
		gender: "Female",
	},
];

for (let i = 0; i <= oldUsers.length; i++) {
	const user = oldUsers[i];
	if (i === 1) {
		continue;
	}
	// if (i === 3) {
	// 	break;
	// }
	// console.log({ user });
}

for (let user of oldUsers) {
	console.log({ user });
}

const person = { fname: "John", lname: "Doe", age: 25 };

for (let property in person) {
	console.log(person[property]);
}
