// create an unsorted array
const letters = ["e", "c", "a", "b", "d"];
// print the unsorted array
console.log(letters);
// sort the original letters array
letters.sort((c1, c2) => c1.localeCompare(c2));
// make a copy of the letters array
const sortedArray = [...letters];
// print the new array
console.log(sortedArray);
