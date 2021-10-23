/* exported equal */
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  var length = first.length;
  var counter = 0;
  for (var i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      counter++;
    }
  }
  if (counter === length) {
    return true;
  } else {
    return false;
  }
}

// input: first (an array), second (an array)
// output: boolean, true if first equals second, false otherwise
// if the length of first is not equal to length of second,
//    return false
// assign the length of first to variable called length
// assign 0 to variable called counter as storage
// loop through 'first'
//    if value of 'first' at each index is equal to the value of 'second' at that same index,
//        increment 'counter' by one
// if value of 'counter' equals 'length',
//    return true
//    otherwise,
//    return false
