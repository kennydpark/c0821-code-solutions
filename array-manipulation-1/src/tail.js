/* exported tail */
function tail(array) {
  var output = [];
  for (var i = 1; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}

// input: array
// output: new array containing the array after the first item
// create storage for output, which is an empty array
// look at each item in the array one by one, starting with AFTER the first item
// add the value for the array at the index to the output
// return the output
