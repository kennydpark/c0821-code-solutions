/* exported unique */

function unique(array) {
  var output = [];
  var count = 0;
  var found = false;

  for (var i = 0; i < array.length; i++) {
    for (var x = 0; x < output.length; x++) {
      if (array[i] === output[x]) {
        found = true;
      }
    }
    count++;
    if (count === 1 && found === false) {
      output.push(array[i]);
    }
    count = 0;
    found = false;
  }
  return output;
}

// input: an array - 'array'
// output: new array of only unique values in order that they appear
// create storage for empty array - 'output'
// create storage for 0 - 'count'
// create storage for boolean - 'found'
// loop through 'array'
//    loop through 'output'
//        if current item of 'array' strictly equals current item of 'output',
//            set 'found' to value of true
//    increment count by one
//    if 'count' strictly equals 1 and 'found' strictly equals false,
//        add the current item of 'array' to 'output'
//    set 'count' to value of 0
//    set 'found' to value of false
// return 'output'
