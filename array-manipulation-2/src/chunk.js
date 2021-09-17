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
  var start = 0;
  // var end = size;
  for (var i = start; i < array.length; i++) {
    if (size <= array.length + 1) {
      output.push(array.slice(start, size));
      start = size;
      size += size;
    }

  }
  return output;
}
