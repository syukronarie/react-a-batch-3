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

// map()
// modified, add property
// A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
// Calls a defined callback function on each element of an array, and returns an array that contains the results.

console.log({ students });

const updatedStudentsId = students.map((value) => {
	const { id, gender } = value;
	value.id = String(id);
	if (gender === "Male") {
		value.gender = "Female";
		value.age = 20;
	} else {
		value.gender = "Male";
		value.age = 21;
	}

	return value;
});

console.log({ updatedStudentsId });
