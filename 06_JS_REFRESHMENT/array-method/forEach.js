// array of object
const students = [
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
	{
		id: 5,
		firstName: "Olympia",
		lastName: "Demare",
		email: "odemare4@lulu.com",
		gender: "Female",
	},
];

const unsensitiveDataOfStudents = [];

// forEach -> for loop
// Performs the specified action for each element in an array.

students.forEach((value) => {
	const { id, firstName, lastName, gender } = value;
	const unsensitiveData = { id, firstName, lastName, gender };
	unsensitiveDataOfStudents.push(unsensitiveData);
});

console.log({ unsensitiveDataOfStudents });
