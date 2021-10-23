/* exported flatten */
function flatten(array) {
  var flattenedArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      var arrayOfArray = array[i];
      for (var n = 0; n < arrayOfArray.length; n++) {
        flattenedArray.push(arrayOfArray[n]);
      }
    } else if ((typeof array[i] === 'number') || (typeof array[i] === 'boolean')) {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
}

// input: array that may or may not have nested arrays
// create storage for a flattened array called flattenedArray
// loop through 'array'
//    if value at current index is an array,
//        assign that value to arrayOfArray
//        loop through arrayOfArray
//            add the current value to flattenedArray
//        otherwise, if current value is a number or a boolean,
//            add the current value to flattenedArray
// return flattenedArray
