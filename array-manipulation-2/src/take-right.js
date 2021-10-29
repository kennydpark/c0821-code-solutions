/* exported takeRight */
// function takeRight(array, count) {
//   var output = [];
//   for (var i = 0; i < array.length; i++) {
//     if (i > (array.length - count - 1)) {
//       output.push(array[i]);
//     }
//   }
//   return output;
// }

// input: array, count (number)
// output: new array
// create storage for output, an empty array
// look at each item of array one at a time
//    if 'i' is greater than the length of the array subtracted by 'count' subtracted by 1,
//        add the value of array at i to the output
// return the output

function takeRight(array, count) {
  var output = [];
  var last = array.length;
  for (var i = (last - count); i < array.length; i++) {
    if (array[i] !== undefined) {
      output.push(array[i]);
    }
  }
  return output;
}

// input: array, count (number)
// output: new array
// create storage for output, an empty array
// look at each item in the array, starting from the last minus 'count'
//    if the current element is not undefined,
//        push it to the output array
// return output
