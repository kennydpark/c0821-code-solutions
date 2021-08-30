/* exported initial */
function initial(array) {
  var output = [];
  for (var i = 0; i < array.length - 1; i++) {
    output.push(array[i]);
  }
  return output;
}

// input: array
// output: new array containing all elements of the array except the last
// create storage for output, which is an empty array
// look at each item in array one by one, except for the last
// add the array at the index to the output
// return output
