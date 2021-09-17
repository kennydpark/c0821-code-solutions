/* exported take */
function take(array, count) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (i <= (count - 1)) {
      output.push(array[i]);
    }
  }
  return output;
}

// input: array, count (number)
// output: array
// create storage for output - empty array
// look at each item in the array one at a time
//    if i is less than or equal to the value of count subtracted by 1,
//        add array at i to output
// return output
