const countries = [
	["Finland", [{ city: "Helsinki" }]],
	["Sweden", [{ city: "Stockholm" }]],
	["Norway", [{ city: "Oslo" }]],
];

const countriesMap = new Map(countries);

// console.log(map.size);
// console.log(map.get("Finland"));
// console.log(map.has("Finland"));

countriesMap.set("Indonesia", [{ city: "Jakarta" }]);

// for (let country of countries) {
// 	console.log({ country });
// }

for (let [country, city] of countriesMap) {
	console.log({ country, city });
}
