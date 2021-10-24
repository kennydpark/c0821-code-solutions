/* exported union */

function union(first, second) {
  var combined = first.concat(second);
  var output = [];
  var count = 0;
  var found = false;

  for (var i = 0; i < combined.length; i++) {
    for (var x = 0; x < output.length; x++) {
      if (combined[i] === output[x]) {
        found = true;
      }
    }
    count++;
    if (count === 1 && found === false) {
      output.push(combined[i]);
    }
    count = 0;
    found = false;
  }
  return output;
}

// input: 'first' - array
//        'second' - array
// output: new array containing unique values from both 'first' and 'second' in the order they appear
// combine 'first' and 'second' arrays and assign to 'combined'
// create storage for empty array - 'output'
// create storage for 0 - 'count'
// set a boolean false assigned to 'found'
// loop through the combined array
//    loop through 'output'
//        if current element of combined equals current element of output,
//            set 'found' to true;
//    increment count by 1
//    if count equals 1 and found is false,
//        add current combined element to output
//    set count to 0
//    set found to false
// return output
