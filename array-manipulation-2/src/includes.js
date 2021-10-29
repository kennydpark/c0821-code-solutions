/* exported includes */
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// input: array, value
// output: boolean
// look at each item in array one at a time
//    if value of array at i strictly equals 'value',
//        return true;
// return false
