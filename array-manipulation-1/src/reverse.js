/* exported reverse */
function reverse(array) {
  var output = [];
  var lastItemIndex = array.length - 1;
  for (var i = lastItemIndex; i > -1; i--) {
    output.push(array[i]);
  }
  return output;
}

// input: array
// output: empty array
// create storage for output, which is an empty array
// create storage for the last index of the array
// look at each item in the array one by one, starting with the last index, and if i is greater than -1, decrement by 1
// add the value of the array at the index to output
// return output
