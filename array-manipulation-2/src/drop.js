/* exported drop */
function drop(array, count) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (i > count - 1) {
      output.push(array[i]);
    }
  }
  return output;
}

// input: array, count (number)
// output: array
// create storage for output, an empty array
// look at each item in the array one at a time
//    if i is greater than 'count' subtracted by 1,
//        add value of array at i to 'output'
// return 'output'
