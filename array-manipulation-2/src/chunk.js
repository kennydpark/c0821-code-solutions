/* exported chunk */
// function chunk(array, size) {
//   var output = [];
//   var arrayChunk = [];
//   for (var i = 0; i < array.length; i++) {
//     if (i <= size) {
//       arrayChunk.push(array[i]);
//     } else {

//     }
//   }
//   return output;
// }

// function chunk(array, size) {
//   var output = [];
//   var chunk = [];

//   for (var i = 0; i < array.length; i++) {
//     if (i < size) {
//       output.push(array[i]);
//       size += size;
//     }
//   }
//   // output.push(chunk);
//   return output;
// }

// function chunk(array, size) {
//   var output = [];
//   for (var i = 0; i < array.length; i++) {
//     if (i < size) {
//       output.push(array.slice(i, size));
//       i = size;
//       size += size;
//     }
//     // output.push(array.slice(i, size));
//   }
//   return output;
// }

// function chunk(array, size) {
//   var output = [];
//   var start = 0;
//   var end = size;
//   for (var i = 0; i < array.length; i++) {
//     output.push(array.slice(start, end));
//     start = end;
//     size += size;
//   }

//   return output;
// }

// function chunk(array, size) {
//   var output = [];
//   for (var i = 0; i < array.length; i++) {
//     array.slice()
//   }
//   return output;
// }

// function chunk(array, size) {
//   var output = [];
//   for (var i = 0; i < array.length; i++) {
//     if (i < size) {
//       output.push(array.slice(i, size));
//       i = size;
//       size += size;
//     }
//     // output.push(array.slice(i, size));
//   }
//   return output;
// }

function chunk(array, size) {
  var output = [];
  var initialSize = size;
  var start = 0;
  for (var i = start; i < array.length; i++) {
    if (size <= array.length) {
      output.push(array.slice(start, size));
      start = size;
      size += initialSize;
      if (size > array.length) {
        output.push(array.slice(start, size));
      }
    }
  }
  return output;
}

// input: array, size(integer)
// output: new array
// create storage for output, empty array
// create storage for original size value
// create storage for original start value
// look at each item in the array one at a time
// if size is less than or equal to length of array,
//    return the array from start to size and push it to output
//    set start equal to size
//    add the original size to size and assign it to size
//    if size is greater than the length of array plus 1,
//        return the array from
