/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var array = string.split('');
  array.splice(firstIndex, 1, string[secondIndex]);
  array.splice(secondIndex, 1, string[firstIndex]);
  return array.join('');
}

// input: number, number, string
// output: string
// create storage for string turned into an array, called array
// use splice method to start at firstIndex value index, delete 1, then add string at value of secondIndex as index
// use splice method to start at secondIndex value index, delete 1, then add string at value of firstIndex as index
// return the array turned into a string without commas
