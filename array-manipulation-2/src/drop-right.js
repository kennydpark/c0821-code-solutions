/* exported dropRight */
function dropRight(array, count) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (i < (array.length - count)) {
      output.push(array[i]);
    }
  }
  return output;
}

// input: array, count (number)
// output: empty array
// create storage for output, an empty array
// look at each item in the array one at a time
//    if 'i' is less than the length of the array subtracted by count,
//        add the value of array at 'i' to the output
// return the output
