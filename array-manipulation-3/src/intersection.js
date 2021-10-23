/* exported intersection */
function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    for (var n = 0; n < second.length; n++) {
      if (first[i] === second[n]) {
        newArray.push(first[i]);
      }
    }
  }
  return newArray;
}

// input: first (an array), second (an array)
// output: an array of the unique value in both arrays, called newArray
// loop through 'first'
//    loop through 'second'
//        if current value of 'first' strictly equals current value of 'second'
//            add the current value of 'first' to newArray
// return newArray
