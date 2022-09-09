// sort
// Sorts an array in place. This method mutates the array and returns a reference to the same array.
// Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.

const fruits = ["Banana", "Orange", "Apple", "Orange", "Pear", "Banana"];
fruits.sort();
console.log({ fruits });

const arrOfNums = [11, 2, 22, 1];
arrOfNums.sort((a, b) => a - b);

console.log({ arrOfNums });
