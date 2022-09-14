// array of string
const students = ["We", "will", "rock", "you"];

// join
// returns string
// A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
// Adds all the elements of an array into a string, separated by the specified separator string.

const strJoinWithSpace = students.join(" ");
const strJoinWithDash = students.join("-");

console.log({
	strJoinWithSpace,
	strJoinWithDash,
});
