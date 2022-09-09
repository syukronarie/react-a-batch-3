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
		gender: "Male",
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
		gender: "Male",
	},
	{
		id: 5,
		firstName: "Olympia",
		lastName: "Demare",
		email: "odemare4@lulu.com",
		gender: "Female",
	},
];

const maleStudents = students.filter((val) => val.gender !== "Female");
const femaleStudents = students.filter((val) => val.gender !== "Male");

console.log({
	maleStudents,
	femaleStudents,
});
