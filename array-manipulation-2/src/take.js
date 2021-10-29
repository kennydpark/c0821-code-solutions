/* exported take */

function take(array, count) {
  var output = [];
  for (var i = 0; i < count; i++) {
    if (array[i] !== undefined) {
      output.push(array[i]);
    }
  }
  return output;
}

// input: array, count (number)
// output: array
// create storage for output - empty array
// look at each item in the array one at a time, from 0 to 'count'
//    if the current element is not undefined,
//        push it to 'output'
// return output
