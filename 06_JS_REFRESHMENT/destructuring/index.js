const car = {
	name: "BMW",
	rpm: "2500rpm",
	color: "black",
};

// destructuring
const { name, color, rpm } = car;

// destructuring alias
const { name: nameAlias, color: colorAlias, rpm: rpmAlias } = car;

console.log({ nameAlias });
