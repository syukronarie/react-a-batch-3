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

const newUsers = [
	{
		id: 5,
		firstName: "Olympia",
		lastName: "Demare",
		email: "odemare4@lulu.com",
		gender: "Female",
	},
	{
		id: 6,
		firstName: "Kayla",
		lastName: "Rapa",
		email: "krapa5@homestead.com",
		gender: "Female",
	},
	{
		id: 7,
		firstName: "Steward",
		lastName: "Briffett",
		email: "sbriffett6@nymag.com",
		gender: "Male",
	},
	{
		id: 8,
		firstName: "Sheila",
		lastName: "Kenner",
		email: "skenner7@scribd.com",
		gender: "Female",
	},
];

// concat
// Additional arrays and/or items to add to the end of the array.
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.

const combinedUsers = oldUsers.concat(newUsers);

console.log({ combinedUsers });
