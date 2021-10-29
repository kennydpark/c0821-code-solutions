/* exported chunk */
function chunk(array, size) {
  var chunked = [];
  var output = [];
  var initialSize = size;
  var start = 0;
  for (var i = start; i < array.length; i++) {
    if (size <= array.length) {
      chunked.push(array.slice(start, size));
      start = size;
      size += initialSize;
      if (size > array.length) {
        chunked.push(array.slice(start, size));
      }
    }
  }
  for (var x = 0; x < chunked.length; x++) {
    if (chunked[x].length > 0) {
      output.push(chunked[x]);
    }
  }
  return output;
}

// input: array, size(integer)
// output: new array
// create storage for an empty array - 'chunked'
// create storage for an empty array - 'output'
// create storage for original size value
// create storage for original start value
// look at each item in the array one at a time
// if size is less than or equal to length of array,
//    return the array from start to size and push it to chunked
//    set start equal to size
//    add the original size to size and assign it to size
//    if size is greater than the length of array plus 1,
//        return the array from start to size and push it to chunked
// look at each item in chunked array one at a time
//    if the current element is greater than 0,
//        push it to output
// return output
