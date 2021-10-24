/* exported zip */
function zip(first, second) {
  var newArray = [];
  if (first.length > second.length) {
    for (var i = 0; i < second.length; i++) {
      var nested = [];
      nested.push(first[i], second[i]);
      newArray.push(nested);
    }
  } else {
    for (var n = 0; n < first.length; n++) {
      var nested2 = [];
      nested2.push(first[n], second[n]);
      newArray.push(nested2);
    }
  }
  return newArray;
}

// input: first (array), second (array)
// output: An Array of Arrays. Each sub-Array is a pair containing an element from first, and an element from second, each from the same index of their respective source Array. The "zipped" result is only as long as the shorter of first and second.
// create storage for the output array, called 'newArray'
// if the length of 'first' is greater than length of 'second',
//    look at each item in 'first' and 'second' as long as the index is less than the value of 'second' length,
//        create storage for nested array, an empty array called 'nested'
//        push the current item of 'first' and 'second' into 'nested'
//        push 'nested' into 'newArray'
//    otherwise, look at each item in 'first' and ' second' as long as the index is less than the value of 'first' length,
//        create storage for nested array, an empty array called 'nested2'
//        push the current item of 'first' and 'second' into 'nested2'
//        push 'nested2' into 'newArray'
// return 'newArray'
