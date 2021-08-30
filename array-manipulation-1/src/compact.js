/* exported compact */

// input: array
// output: array
// create storage for output, which is an empty array
// look at each item in the array, one at a time
//     if array at i returns boolean true,
//     add the value of array at i to output
// return output

function compact(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      output.push(array[i]);
    }
  }
  return output;
}
