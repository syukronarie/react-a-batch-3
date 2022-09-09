// values and referrences
const names = ["Muji", "Takim", "Anang"];

const copyRefOfNames = names;
console.log("BEFORE COPY BY REFERENCES");
console.log({ names });
console.log({ copyRefOfNames });

copyRefOfNames.shift();
copyRefOfNames.push("Fauzan");

console.log("AFTER COPY BY REFERENCES");
console.log({ names });
console.log({ copyRefOfNames });

// copy non-primitive data types without references
// - desctructuring
